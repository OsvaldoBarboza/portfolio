# Repository Guidelines

## Project Structure & Module Organization

This repository is a static portfolio site. Keep page markup in `index.html`, shared presentation rules in `style.css`, and browser interactions in `script.js`. Media belongs under `assets/`: images in `assets/img/` (with campaign subfolders such as `anativa/` and `unik/`) and motion work in `assets/videos/`. Use relative asset paths so the site also works when served locally.

## Build, Test, and Development Commands

There is no package manager, build step, or automated test suite configured. Serve the repository with a local static server rather than opening files directly:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` and verify navigation, image galleries, video hover playback, and sound controls. If Python is unavailable, use any equivalent static-server extension or tool.

## Coding Style & Naming Conventions

Use the existing plain HTML, CSS, and vanilla JavaScript approach; do not introduce frameworks for isolated changes. Preserve the current CSS style: one declaration per line, four-space indentation within rules, lowercase kebab-case class names (for example, `.video-card` and `.sound-btn`). Use descriptive camelCase JavaScript variables and keep DOM behavior close to the elements it controls. Prefer semantic HTML and add `aria-*` labels for icon-only controls.

## Testing Guidelines

Perform manual responsive checks after each UI change. Test desktop and narrow mobile widths, keyboard focus, the lightbox close/previous/next controls, and all video-card sound states. Confirm DevTools shows no JavaScript errors and that every changed asset path returns successfully.

## Commit & Pull Request Guidelines

The history currently contains only `Initial commit`, so no established convention exists. Use concise imperative subjects such as `Refine video sound controls` or `Add Anativa gallery images`. Keep commits narrowly scoped. Pull requests should explain the visible change, list manual checks performed, link relevant issues when applicable, and include screenshots or a short recording for UI or motion changes.

## Asset & Configuration Care

Optimize new images and videos before committing. Do not rename or move assets without updating every reference in `index.html`; broken portfolio media is user-facing.
