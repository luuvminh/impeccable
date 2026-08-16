/*
  The course, and one learner's position in it.

  Reads Supabase when it is configured; otherwise serves the sample course
  below so the interface can be reviewed before any keys exist. The sample is
  authored at production fidelity and every screen that renders it says so —
  it is never passed off as the real curriculum.

  Lesson titles and counts here are placeholders awaiting Mây's real syllabus.
  No claim, price, or credential is invented.
*/

import { supabase, isSample } from './config';

export type LessonState = 'done' | 'current' | 'open' | 'locked';

export interface Lesson {
  slug: string;
  n: number;
  title: string;
  minutes: number;
  videoId?: string;
}

export interface Level {
  id: string;
  n: 'I' | 'II' | 'III' | 'IV';
  /** SMuFL dynamic, composed from single glyphs. PUA — dump codepoints, do not eyeball. */
  dyn: string;
  dynName: string;
  name: string;
  lessons: Lesson[];
}

/* ---------------------------------------------------------------
   Sample course — placeholder syllabus, real shape
   --------------------------------------------------------------- */

const lesson = (n: number, title: string, minutes: number, prefix: string): Lesson => ({
  slug: `${prefix}-${n}`,
  n,
  title,
  minutes,
});

export const LEVELS: Level[] = [
  {
    id: 'vo-long',
    n: 'I',
    dyn: '',
    dynName: 'pianissimo',
    name: 'Vỡ lòng',
    lessons: [
      lesson(1, 'Ngồi và đặt tay', 9, 'vl'),
      lesson(2, 'Bảy nốt trên phím trắng', 12, 'vl'),
      lesson(3, 'Đọc khuông nhạc khoá Sol', 14, 'vl'),
      lesson(4, 'Tay phải chơi giai điệu đầu tiên', 16, 'vl'),
      lesson(5, 'Tay trái giữ nhịp', 13, 'vl'),
      lesson(6, 'Ghép hai tay, chậm và đúng', 18, 'vl'),
    ],
  },
  {
    id: 'nen-tang',
    n: 'II',
    dyn: '',
    dynName: 'mezzo-piano',
    name: 'Nền tảng',
    lessons: [
      lesson(1, 'Hợp âm trưởng và thứ', 15, 'nt'),
      lesson(2, 'Thế đảo và cách bấm gần', 17, 'nt'),
      lesson(3, 'Chuyển hợp âm không ngắt nhịp', 19, 'nt'),
      lesson(4, 'Đệm một bài hát đơn giản', 21, 'nt'),
      lesson(5, 'Khi tay trái không theo kịp', 16, 'nt'),
    ],
  },
  {
    id: 'vung-nhip',
    n: 'III',
    dyn: '',
    dynName: 'mezzo-forte',
    name: 'Vững nhịp',
    lessons: [
      lesson(1, 'Pedal: đạp, giữ, nhả', 14, 'vn'),
      lesson(2, 'Ba kiểu đệm cho một bài', 20, 'vn'),
      lesson(3, 'Sắc thái mạnh nhẹ', 18, 'vn'),
      lesson(4, 'Chơi chậm lại để nghe rõ hơn', 15, 'vn'),
    ],
  },
  {
    id: 'nang-cao',
    n: 'IV',
    dyn: '',
    dynName: 'fortissimo',
    name: 'Nâng cao',
    lessons: [
      lesson(1, 'Đọc một bản nhạc mới', 22, 'nc'),
      lesson(2, 'Tự dựng bản đệm riêng', 25, 'nc'),
      lesson(3, 'Một tác phẩm cổ điển vừa sức', 28, 'nc'),
    ],
  },
];

/* ---------------------------------------------------------------
   Progress
   --------------------------------------------------------------- */

export interface Progress {
  /** Lesson slugs the learner has marked done. */
  done: Set<string>;
  /** Levels the learner has bought. Others render locked, never hidden. */
  owned: Set<string>;
}

const SAMPLE_PROGRESS: Progress = {
  done: new Set(['vl-1', 'vl-2', 'vl-3', 'vl-4']),
  owned: new Set(['vo-long', 'nen-tang']),
};

export async function getProgress(userId: string | null): Promise<Progress> {
  if (isSample || !userId) return SAMPLE_PROGRESS;

  // Real read. Kept deliberately small: two tables, no ORM, no client bundle.
  const headers = {
    apikey: supabase.anonKey!,
    Authorization: `Bearer ${supabase.anonKey!}`,
  };
  const [doneRes, ownedRes] = await Promise.all([
    fetch(`${supabase.url}/rest/v1/lesson_progress?user_id=eq.${userId}&select=lesson_slug`, { headers }),
    fetch(`${supabase.url}/rest/v1/enrolments?user_id=eq.${userId}&select=level_id`, { headers }),
  ]);
  if (!doneRes.ok || !ownedRes.ok) {
    throw new Error('Không đọc được tiến độ học viên.');
  }
  return {
    done: new Set((await doneRes.json()).map((r: any) => r.lesson_slug)),
    owned: new Set((await ownedRes.json()).map((r: any) => r.level_id)),
  };
}

/* ---------------------------------------------------------------
   Derived view
   --------------------------------------------------------------- */

export function lessonState(lesson: Lesson, level: Level, p: Progress): LessonState {
  if (!p.owned.has(level.id)) return 'locked';
  if (p.done.has(lesson.slug)) return 'done';
  const firstUndone = level.lessons.find((l) => !p.done.has(l.slug));
  return firstUndone?.slug === lesson.slug ? 'current' : 'open';
}

/** The single lesson the learner should resume. Null when nothing is owned. */
export function resumePoint(p: Progress): { level: Level; lesson: Lesson } | null {
  for (const level of LEVELS) {
    if (!p.owned.has(level.id)) continue;
    const next = level.lessons.find((l) => !p.done.has(l.slug));
    if (next) return { level, lesson: next };
  }
  return null;
}

export function levelStats(level: Level, p: Progress) {
  const total = level.lessons.length;
  const done = level.lessons.filter((l) => p.done.has(l.slug)).length;
  return { total, done, owned: p.owned.has(level.id) };
}

export function findLesson(slug: string) {
  for (const level of LEVELS) {
    const lesson = level.lessons.find((l) => l.slug === slug);
    if (lesson) return { level, lesson };
  }
  return null;
}
