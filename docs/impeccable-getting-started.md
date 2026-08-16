# Impeccable — Getting started (bản lưu)

Tài liệu tham chiếu cho `https://impeccable.style/tutorials/getting-started/`.

> **Lưu ý về nguồn.** Miền `impeccable.style` bị chặn bởi chính sách egress của môi trường
> Claude Code trên web, nên không tải được HTML gốc của trang. Nội dung dưới đây được dựng lại
> từ những nguồn chính chủ mà môi trường này với tới được:
> - repo chính thức `github.com/pbakaus/impeccable` (README trên nhánh `main`, tháng 08/2026)
> - bản Impeccable **v4.1.1** đang cài trong chính repo này (`.claude/skills/impeccable/SKILL.md`)
> - tóm tắt trang tutorial gốc lấy qua công cụ tìm kiếm
>
> Các lệnh, đường dẫn và cấu hình dưới đây đã được đối chiếu với bản v4.1.1 đang cài, không phải suy đoán.

---

## 1. Impeccable là gì

Bộ hướng dẫn thiết kế cho các AI coding agent, tác giả **Paul Bakaus** (công ty Renaissance Geek),
giấy phép **Apache-2.0**. Vấn đề nó giải: mô hình nào cũng được huấn luyện trên cùng một đống
template SaaS, nên bỏ hướng dẫn ra là dự án nào cũng lòi đúng mấy dấu vết quen thuộc — Inter cho
mọi thứ, gradient tím-sang-xanh, card lồng trong card, chữ xám trên nền màu, cái ô icon bo góc
phía trên mỗi tiêu đề.

Gồm ba phần:

| Phần | Nội dung |
| --- | --- |
| **1 skill** | Cài đúng một skill tên `impeccable`; toàn bộ 23 lệnh đi qua nó |
| **23 lệnh** | Từ vựng thiết kế dùng chung với AI: `polish`, `audit`, `critique`, `bolder`, `animate`… |
| **59 luật detector** | Kiểm tra tất định (deterministic), chạy **không cần LLM, không cần API key** |

Impeccable khởi nguồn từ skill [frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design)
của Anthropic, rồi bổ sung ngữ cảnh dự án bền vững + kiểm tra chất lượng chạy ngay trong codebase.

---

## 2. Đường đi của tutorial "Getting started"

Trang gốc gói gọn khoảng **10 phút**, ba bước:

1. **Cài** — `npx impeccable install` từ thư mục gốc dự án.
2. **Nạp ngữ cảnh** — chạy `/impeccable init` bên trong công cụ AI, ghi `PRODUCT.md` (và `DESIGN.md`).
3. **Cải thiện một trang có sẵn** — chạy một lượt `polish`. Skill rà lần lượt căn chỉnh (alignment),
   khoảng cách (spacing), typography, màu, trạng thái tương tác, chuyển động và câu chữ; **sửa có
   trọng điểm chứ không viết lại**.

Kết thúc tutorial: Impeccable đã cài, ngữ cảnh thiết kế đã lưu, một trang có sẵn đã được đánh bóng.

---

## 3. Cài đặt

### Cách 1 — CLI (khuyến nghị)

```bash
npx impeccable install     # từ thư mục gốc dự án
npx impeccable update      # làm mới bản đã cài
```

Nó hiện các thư mục harness nó phát hiện (`~/.claude`, `~/.codex`, `~/.grok`, hay `.cursor` cục bộ…),
cho giữ nguyên hoặc chọn lại, rồi hỏi cài vào **dự án hiện tại** hay **toàn cục**. Bỏ qua phần hỏi
bằng cờ:

```bash
npx impeccable install --providers=claude,codex,cursor,grok --scope=project
```

Với Claude Code, Cursor, Codex, GitHub Copilot và Grok Build, nó cài luôn hook manifest của harness đó.
**Nhớ reload harness sau khi cài.**

- **Codex**: mở `/hooks` sau install/update để duyệt project hook (Codex theo dõi trust theo định nghĩa hook).
- **Grok Build**: cần trust thư mục dự án (`/hooks-trust` hoặc chạy với `--trust`).

### Cách 2 — Git submodule

```bash
git submodule add https://github.com/pbakaus/impeccable .impeccable
npx impeccable link --source=.impeccable --providers=claude,cursor
git add .gitmodules .impeccable .claude .cursor
git commit -m "Add Impeccable skills"

# cập nhật sau này
git submodule update --remote .impeccable
npx impeccable link --source=.impeccable --providers=claude,cursor
```

Provider hợp lệ: `claude`, `cursor`, `gemini`, `codex`, `github`, `grok`, `opencode`, `pi`, `qoder`,
`trae`, `trae-cn`, `rovo-dev`, `vibe`.

### Cách 3 — Plugin

```bash
# Claude Code
/plugin marketplace add pbakaus/impeccable      # rồi mở /plugin và cài từ danh sách

# Grok Build
grok plugin install pbakaus/impeccable#plugin --trust
```

### Cách 4 — Tải ZIP từ impeccable.style, hoặc copy tay từ repo

```bash
cp -r dist/claude-code/.claude your-project/     # theo dự án
cp -r dist/claude-code/.claude/* ~/.claude/      # toàn cục
```

Copy tay là đường dự phòng / gỡ lỗi. Đường chuẩn vẫn là `npx impeccable install|update`.

**Công cụ hỗ trợ:** Claude Code, Cursor, GitHub Copilot, Gemini CLI, Codex CLI, Grok Build,
OpenCode, Pi, Kiro, Trae, Rovo Dev, Qoder, Mistral Vibe, Google Antigravity.

---

## 4. `/impeccable init` — bước không được bỏ

```
/impeccable init
```

Hỏi bề mặt đang làm là **brand** (marketing, landing, portfolio) hay **product** (app UI, dashboard,
tool), rồi ghi ngữ cảnh mà *mọi* lệnh sau này đều đọc:

- `PRODUCT.md` — người dùng, sản phẩm làm gì, lane brand/product, giọng điệu, anti-reference.
- `DESIGN.md` — hệ thiết kế: màu, chữ, spacing, component. Dự án đã có code sẵn thì dùng
  `/impeccable document` để sinh `DESIGN.md` từ chính code đó.

`teach` là bí danh của `init`. `craft` là bí danh **deprecated** cho việc dựng bề mặt mới.

### `buildPath` — comp-first hay code-first

`init` hỏi một lần và ghi vào `.impeccable/config.json`:

```json
{ "buildPath": "comp" }
```

- `comp` — sinh comp full-fidelity trước rồi build bám theo. Bố cục táo bạo hơn, lâu hơn.
- `code` — dựng thẳng bằng code, tham vọng viết vào direction contract và kiểm ở khâu finish. Gọn và nhanh hơn.

Chỉ hiện lựa chọn này khi harness có khả năng sinh ảnh. Ghi đè trên một máy bằng
`.impeccable/config.local.json` (file này gitignored). Mỗi trang quyết định đều có toggle ở footer
để lật cho riêng phiên đó.

---

## 5. 23 lệnh

Gọi theo dạng `/impeccable <command> <target>`. Gõ `/impeccable` trơ không tham số để hiện menu
theo ngữ cảnh — nó **không** tự chạy lệnh nào.

| Nhóm | Lệnh | Làm gì |
| --- | --- | --- |
| Build | `shape [feature]` | Lên phương án UX/UI trước khi viết code |
| Build | `init` | Nạp ngữ cảnh sản phẩm bền vững vào PRODUCT.md |
| Build | `document` | Sinh DESIGN.md từ code sẵn có |
| Build | `extract [target]` | Rút token và component tái dùng vào design system |
| Build | `craft [feature]` | Bí danh deprecated cho việc dựng mới |
| Evaluate | `critique [target]` | Review UX có chấm điểm heuristic |
| Evaluate | `audit [target]` | Kiểm chất lượng kỹ thuật (a11y, hiệu năng, responsive) |
| Refine | `polish [target]` | Lượt hoàn thiện cuối trước khi ship |
| Refine | `bolder [target]` | Khuếch đại thiết kế nhạt / an toàn quá |
| Refine | `quieter [target]` | Hạ nhiệt thiết kế ồn ào quá |
| Refine | `distill [target]` | Lột về phần cốt lõi |
| Refine | `harden [target]` | Lỗi, i18n, tràn chữ, edge case |
| Refine | `onboard [target]` | Luồng lần đầu, empty state, đường kích hoạt |
| Enhance | `animate [target]` | Thêm chuyển động có mục đích |
| Enhance | `colorize [target]` | Đưa màu chiến lược vào UI đơn sắc |
| Enhance | `typeset [target]` | Font, phân cấp, cỡ chữ |
| Enhance | `layout [target]` | Spacing, nhịp, phân cấp thị giác |
| Enhance | `delight [target]` | Thêm cá tính, khoảnh khắc đáng nhớ |
| Enhance | `overdrive [target]` | Đẩy quá giới hạn thông thường |
| Fix | `clarify [target]` | Sửa UX copy, nhãn, thông báo lỗi |
| Fix | `adapt [target]` | Thích ứng thiết bị / khổ màn hình |
| Fix | `optimize [target]` | Chẩn và sửa hiệu năng UI |
| Iterate | `live` | Chế độ biến thể trực quan trong trình duyệt |

Ví dụ dùng:

```
/impeccable audit blog             # audit trang hub + trang bài
/impeccable critique landing
/impeccable polish settings
/impeccable harden checkout
/impeccable redo this hero section  # mô tả tự do cũng được
```

**Pin lệnh hay dùng** thành shortcut đứng riêng:

```
/impeccable pin audit      # tạo /audit
/impeccable unpin audit
```

### Bốn "mode" quyết định thành công của bề mặt

Chọn theo **bề mặt được yêu cầu**, không theo sản phẩm — landing page của một cái tool vẫn là Persuade;
tài liệu của một nhà mốt vẫn là Read.

| Mode | Bề mặt | Thành công là |
| --- | --- | --- |
| **Persuade** | Landing, marketing, campaign, pricing | Khách quyết định và hành động |
| **Operate** | App UI, dashboard, editor, admin, settings | Khách hoàn thành một tác vụ |
| **Read** | Docs, bài viết, guide, help, changelog | Khách hiểu được một điều gì đó |
| **Experience** | Portfolio, gallery, showcase | Khách ở bên trong chính tác phẩm |

### Hai luật nền của skill

- **Brief thắng.** Tôn trọng aesthetic/thời kỳ/chất liệu/font/bảng màu đã ghim, kể cả khi nó
  đụng cảnh báo "mẫu bão hoà". Bẻ brief theo gu của mình = thất bại.
- **Refinement giữ, redesign thay.** Refinement giữ nguyên bản sắc, hành vi, câu chữ và mọi thứ
  ngoài phạm vi. Redesign giữ sự thật sản phẩm và chức năng nhưng coi vẻ ngoài cũ là bằng chứng và
  anti-reference. Không có chuyện chia đôi thành "đánh bóng cái vẻ ngoài đã bỏ".

---

## 6. Live mode

```
/impeccable live
```

Chọn phần tử ngay trong trình duyệt, sinh các biến thể, chấp nhận cái ưng — không phải regenerate
cả trang. Cấu hình khung/framework nằm ở `.impeccable/live/config.json` (file này **được commit**).

---

## 7. Detector — CLI và hook

### CLI (không cần AI harness)

```bash
npx impeccable detect src/                   # quét thư mục
npx impeccable detect index.html             # quét file HTML
npx impeccable detect https://example.com    # quét URL (Puppeteer)
npx impeccable detect --json .               # đầu ra JSON cho CI
npx impeccable detect --no-config src/       # quét thô, bỏ qua config/ngữ cảnh dự án

npx impeccable ignores list
npx impeccable ignores add-file "src/legacy/**"
npx impeccable ignores add-value overused-font Inter --reason "Brand font"
```

59 luật tất định, chia hai nhóm: **AI slop** (viền side-tab, gradient tím, easing bounce, glow tối)
và **chất lượng thiết kế chung** (độ dài dòng, padding chật, vùng chạm nhỏ, nhảy cấp heading…).
Chạy được trên HTML, CSS, JSX/TSX, Vue, Svelte và CSS-in-JS.

Miễn trừ theo **một file** thì viết comment ngay trong file, cú pháp comment nào cũng được:

```html
<!-- impeccable-disable overused-font: exported brand doc -->
<!-- impeccable-disable-line ... -->
<!-- impeccable-disable-next-line ... -->
```

### Hook

Hook chạy detector khi agent sửa file UI rồi đẩy phát hiện ngược vào luồng làm việc.

| Harness | File hook | Thời điểm |
| --- | --- | --- |
| Claude Code | `.claude/settings.local.json` (gitignored) → `scripts/hook.mjs` | Sau khi sửa, thêm lượt sâu lúc Stop |
| GitHub Copilot | `.github/hooks/impeccable.json` (được commit) | Sau khi sửa |
| Cursor | `.cursor/hooks.json` → `hook-before-edit.mjs` | **Chặn trước** khi ghi file xấu |
| Codex | `.codex/hooks.json` → `.agents/skills/impeccable/scripts/hook.mjs` | Sau khi sửa |

Quản lý bằng `/impeccable hooks <on|off|status|ignore-rule|ignore-file|ignore-value|reset>`.
Lựa chọn bật/tắt hook nhớ theo từng dev trong `.impeccable/config.local.json`; `--no-hooks` bỏ qua
cho một lần chạy mà không ghi gì.

### `/impeccable doctor`

Báo và sửa lệch (drift) giữa các artifact của dự án (PRODUCT.md, DESIGN.md + sidecar, config, surface
brief, hook) và những gì phiên bản hiện tại đọc. **Skill không tự sửa drift kèm theo một tác vụ thiết
kế** — chỉ báo, trừ khi được yêu cầu.

---

## 8. `.gitignore` cho `.impeccable/`

Impeccable ghi file làm việc dưới `.impeccable/`. Thêm khối này (patterns cố tình **không neo gốc**
vì trong monorepo `.impeccable/` hay nằm dưới `apps/web/`):

```gitignore
# impeccable-ignore-start
.impeccable/config.local.json
.impeccable/hook.cache.json
.impeccable/hook.pending.json
.impeccable/*.png
.impeccable/live/server.json
.impeccable/live/sessions/
.impeccable/live/previews/
.impeccable/live/annotations/
.impeccable/live/cache/
.impeccable/live/manual-edit-apply-transaction.json
.impeccable/live/manual-edit-events.jsonl
.impeccable/live/manual-edit-evidence/
.impeccable/live/pending-manual-edits.json
.impeccable/live/deferred-svelte-component-accepts.json
.impeccable/live/*.png
# impeccable-ignore-end
```

**Giữ tracked** (artifact dùng chung của dự án): `.impeccable/config.json`,
`.impeccable/live/config.json`, `.impeccable/design.json`, `.impeccable/critique/*.md`.

File đã lỡ commit trước khi thêm khối này thì `.gitignore` không tự bỏ theo dõi — chạy
`git rm --cached <path>`.

---

## 9. Anti-pattern skill luôn nhắc

- Không dùng font bị lạm dụng (Arial, Inter, font hệ thống mặc định).
- Không để chữ xám trên nền màu.
- Không dùng đen/xám thuần — luôn pha một chút màu.
- Không bọc mọi thứ vào card, càng không lồng card trong card.
- Không dùng easing bounce/elastic — nó cũ.

---

## 10. Bản cài trong repo này

Repo `luuvminh/impeccable` đang có **Impeccable v4.1.1** cài cục bộ theo dự án — mọi phiên Claude Code
mở trên repo này tự nhận, không cần bước setup.

| Đường dẫn | Là gì |
| --- | --- |
| `.claude/skills/impeccable/` | `SKILL.md`, 39 playbook tham chiếu, 108 script |
| `.claude/agents/` | 4 sub-agent: `finish-reviewer`, `documenter`, `manual-edit-applier`, `asset-producer` |
| `.claude/settings.json` | Hook `PostToolUse`, `Stop`, `SessionStart` |
| `package.json` | `htmlparser2`, `css-select`, `css-tree`, `domutils` — thiếu là detector rơi về chế độ regex và đếm thiếu |

Chạy detector bằng tay:

```bash
node .claude/skills/impeccable/scripts/detect.mjs path/to/file.html
node .claude/skills/impeccable/scripts/doctor.mjs
```

Cần Node 22.18+ và đã `npm install`.

**Cập nhật:** bản này build từ source vì `impeccable.style` không với tới được từ môi trường này —
xem `README.md` ở gốc repo cho các bước clone → build → copy. Nơi nào mạng cho phép thì
`npx impeccable update` làm gọn trong một lệnh.

---

## Nguồn

- Trang gốc (không tải được từ đây): <https://impeccable.style/tutorials/getting-started/>
- Repo chính thức: <https://github.com/pbakaus/impeccable>
- Case study: <https://impeccable.style/cases/neo-mirai>
- Docs hook: <https://impeccable.style/docs/hooks> · Docs detector: <https://impeccable.style/docs/detector>
- Tác giả: [Paul Bakaus](https://www.paulbakaus.com) — Apache-2.0
