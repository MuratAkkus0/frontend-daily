# frontend-daily

This is my first repository: an early learning archive of daily practice
projects from when I was starting out with front-end development (March
2023 onward). Thirty-six small, unrelated exercises were dumped into one
repository over time instead of being given their own repos — that was the
wrong way to organise the work, and I know it now.

**This repo is kept for the record, not maintained, and not the place to
look for my current work.** Almost everything here was later redone as its
own standalone, cleaned-up repository — see the index below. Where a
standalone repo exists, treat it as the real, current version of that
exercise; what's in this archive is preserved exactly as it was originally
written, warts and all, so it stays an honest snapshot of where I started.

If you want to see what I can actually build today, look at the standalone
repos this index links to, not this one.

## Index of sub-projects

| Folder | What it demonstrates | Superseded by |
| --- | --- | --- |
| `API_Practices` | `fetch`/XHR/async-await basics against public APIs | [`API_Practices`](https://github.com/MuratAkkus0/api-practices) |
| `Aufgabe` | A small "Speed Wars" countdown/quiz assignment | — |
| `ChatScript` | A static fake chat/messenger UI prototype | [`ChatScript`](https://github.com/MuratAkkus0/chat-ui-clone) |
| `Expense-Tracker` | Vue 3 income/expense tracker backed by a `json-server` mock API | [`Vue_Expense_Tracker_LS`](https://github.com/MuratAkkus0/expense-tracker-local) (the mock-API half now lives separately in [`expense-tracker-fake-api`](https://github.com/MuratAkkus0/expense-tracker-mock-api)) |
| `Fylo-Dark-Landingpage-Design` | Frontend Mentor "Fylo" dark landing page challenge | [`FyloLandingPage`](https://github.com/MuratAkkus0/fylo-landing-page) |
| `KrautUndRuben` | A German-language PHP + MySQL recipe/e-commerce practice site with an admin panel | — |
| `LandingPage` | A CSS `mix-blend-mode` "Go To Africa" travel landing page | [`SimpleLandingPage`](https://github.com/MuratAkkus0/simple-landing-page) |
| `LoginForm` | An animated login form UI (bundles an internal copy of the `mailCss` exercise) | [`AnimatedLoginForm`](https://github.com/MuratAkkus0/animated-login-form) |
| `NodeJs-lessons` | Node.js/Express + MongoDB fundamentals notes and a small API exercise | — |
| `SimpleWebSite` | First plain HTML/CSS practice page (navbar + hero section) | [`MyFirstWebsite`](https://github.com/MuratAkkus0/my-first-website) |
| `Weatherapp` | A weather lookup app against a public weather API | [`WeatherApp`](https://github.com/MuratAkkus0/weather-dashboard) |
| `adam-asmaca` | A hangman ("Adam Asmaca") word-guessing game | [`AdamAsmaca`](https://github.com/MuratAkkus0/hangman-game) |
| `animated_cards` | CSS hover/flip animated card components | [`AnimatedCards`](https://github.com/MuratAkkus0/animated-cards) |
| `basic_slider` | A basic next/prev image slider (hard image swap, no transition) | [`FadeInSlider`](https://github.com/MuratAkkus0/fade-in-slider) |
| `calculater` | A four-function calculator in plain JS | [`Calculater`](https://github.com/MuratAkkus0/calculator-vanilla-js) |
| `carvis_project` | A car listing/showcase practice site | [`Carvis-Project`](https://github.com/MuratAkkus0/carvis-voice-assistant) |
| `egghead_io_clone` | A static clone of the egghead.io homepage layout | [`EggHeadIo-Clone`](https://github.com/MuratAkkus0/egghead-clone) |
| `furniture_webpage` | "Akkuslar Tischlerei" fictional carpentry business landing page | [`SimpleWebPage`](https://github.com/MuratAkkus0/simple-web-page) |
| `imageWebsite` | An image search app calling the Unsplash API directly from the browser | [`ImageSearchApp`](https://github.com/MuratAkkus0/image-search) |
| `mailCss` | An HTML email layout/CSS practice template | [`MailInterface`](https://github.com/MuratAkkus0/mail-client-ui) |
| `progress_steps` | An animated multi-step progress indicator | [`AnimatedProgressSteps`](https://github.com/MuratAkkus0/animated-progress-steps) |
| `quizApp` | A plain-JS multiple-choice quiz | [`QuizApp`](https://github.com/MuratAkkus0/quiz-platform) |
| `sinemaKoltuk` | A cinema seat reservation UI | [`CinemaSeatReservation`](https://github.com/MuratAkkus0/cinema-booking) |
| `sudokuApp` | A playable sudoku board UI | [`SudokuApp`](https://github.com/MuratAkkus0/sudoku-game) |
| `sudokuSolver` | A sudoku-solving algorithm exercise | [`JS_Sudoke_Solver`](https://github.com/MuratAkkus0/sudoku-solver) |
| `toDoApp` | A plain-JS to-do list | [`ToDoApp`](https://github.com/MuratAkkus0/todo-vanilla-js) |
| `valens-katolog` | A candle/product catalog landing page | [`ValensCatalog`](https://github.com/MuratAkkus0/valens-catalog) |
| `vue-lesson-notes` | Vue 3 fundamentals notes (directives, `v-for`/`v-if`, dynamic components, computed properties) | — |
| `vue-project` | First Vue project, wired to a fake/mock API | [`First-Vue-Project-Fake-Api`](https://github.com/MuratAkkus0/job-listings-mock-api) |
| `word_repeat` | A vocabulary word-repetition trainer | [`Word-Repeat-App`](https://github.com/MuratAkkus0/vocab-trainer) |

Entries marked "—" had no standalone successor found; they're kept here as
originally written.

## What was cleaned up in this pass

- Removed committed `node_modules` (`NodeJs-lessons/node_modules`) and added
  a real `.gitignore` (`node_modules/`, build output, `.DS_Store`, local env
  files).
- Checked for the two directory names reported as starting with a literal
  `"` character (`"ChatScript`, `"vue-lesson-notes`). On inspection neither
  actually exists: `git ls-files` displays paths containing non-ASCII bytes
  (e.g. the `ü` in `ChatScript/Html/prototurkSohbetArayüzü.html`) wrapped in
  quotes by default — that's a `git` display convention
  (`core.quotepath`), not a broken filename. Both `ChatScript` and
  `vue-lesson-notes` are named correctly on disk and in the index.
- **Removed third-party/identifiable-person assets** found while auditing
  this archive (this portfolio has shipped this kind of thing before, so it
  was checked for deliberately):
  - `ChatScript/Files/Kahlil_Gibran_1913.jpg` — a real historical photo of
    the writer Kahlil Gibran, reused as a fake chat-contact avatar.
  - `ChatScript/Files/ben.jpg` — a real, identifiable person's photo used
    as a fake chat avatar.
  - `SimpleWebSite/halil-cibran-kusursuz-dc3bcnya.jpg` — a watermarked
    stock photo (`wallpaperguide.com` watermark).
  - `Fylo-Dark-Landingpage-Design/public/images/profile-1.jpg`, `profile-2.jpg`,
    `profile-3.jpg` — real people's photos used as fake testimonial avatars
    (this is the stock Frontend Mentor "Fylo" challenge asset set).
  - `egghead_io_clone/public/img/logo.svg` — the egghead.io trademarked
    logo.
  - `egghead_io_clone/public/img/icons/{css,gatsby,graphql,javascript,react,vscode}.png` —
    trademarked technology logos copied from egghead.io's real homepage.
  - `egghead_io_clone/public/img/image.png` and
    `egghead_io_clone/public/img/ImmuateableImmer_Final.png` — copyrighted
    course-marketing artwork copied from egghead.io's real homepage.
  - `LoginForm/Files/pngwing.com.png` — the real ASUS logo, used generically
    as a decorative "logo" image on an unrelated login form.
  - `adam-asmaca/img/receptayyiperdoga.jpg`, `indir0.jpeg`, `indir2.jpeg` —
    photographs of real, identifiable public figures (Turkish politicians)
    used as hangman-game images/favicon.
  - `LandingPage/Files/bollon.mp4` — a branded promotional video from a real
    hot-air-balloon tour company (Anatolian Balloons), used as decorative
    background footage.

  These files were deleted outright rather than replaced, since replacing
  them would mean touching code in a project this repo explicitly does not
  modernize. A few pages (`ChatScript`, `Fylo-Dark-Landingpage-Design`,
  `egghead_io_clone`, `LoginForm`, `adam-asmaca`, `LandingPage`) will now
  show missing images/video where these assets used to be — that's expected
  for an unmaintained archive.
- Replaced the German/English/Turkish mixed project description with this
  README.

## What was checked and left alone

- `valens-katolog/images/pexels-*.jpg` — genuine Pexels stock photos (free
  license, no watermark, no identifiable faces).
- `Expense-Tracker/src/assets/logo.svg` and
  `vue-project/src/assets/images/logo.png` — the official Vue.js framework
  logo, shipped by default by Vue's own project scaffolding tool. Left in
  place; this is the framework's own branding on its own default template
  page, not a misused third-party asset.
- `imageWebsite/js/script.js` contains a **hardcoded Unsplash API access
  key**. It was not touched (this repo's code is preserved as originally
  written), but it's worth knowing about if this repository is ever made
  public again with that key still live.
- `LoginForm/mailCss/` is a byte-for-byte duplicate of the top-level
  `mailCss/` project — left as-is; it's how the original author organised
  it at the time.

## What this repo is not

Not an application, and not being modernized. The code inside each
sub-folder is preserved as originally written — no framework upgrades, no
refactors, no dependency updates. If a folder above has a "superseded by"
link, that standalone repository is the current, maintained version of that
idea.
