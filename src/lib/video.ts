/*
  Bunny Stream playback URLs.

  A purchased lesson must not become a link anyone can forward, so every
  playback URL is signed and expires. Bunny's token authentication is a SHA256
  of (signingKey + path + expiry); the token and expiry ride as query params.

  Without keys this returns { ready: false } and the player renders its
  not-wired state. It never returns a fake URL.
*/

import { createHash } from 'node:crypto';
import { bunny } from './config';

export interface Playback {
  ready: boolean;
  src?: string;
  poster?: string;
  /** Seconds until the signed URL stops working. */
  expiresIn?: number;
}

const TTL = 60 * 60 * 4; // four hours: long enough for one practice sitting

export function playbackFor(videoId: string | undefined): Playback {
  if (!bunny.configured || !videoId) return { ready: false };

  const expires = Math.floor(Date.now() / 1000) + TTL;
  const path = `/${bunny.libraryId}/${videoId}/playlist.m3u8`;
  const token = createHash('sha256')
    .update(`${bunny.signingKey}${path}${expires}`)
    .digest('hex');

  return {
    ready: true,
    src: `https://${bunny.cdnHost}${path}?token=${token}&expires=${expires}`,
    poster: `https://${bunny.cdnHost}/${bunny.libraryId}/${videoId}/thumbnail.jpg`,
    expiresIn: TTL,
  };
}
