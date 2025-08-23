# Repository Guidelines

## Project Structure & Module Organization
- `_config.yml`: Primary Jekyll configuration; use `_config.dev.yml` for local overrides.
- `_posts/`: Blog posts named `YYYY-MM-DD-title.md` with YAML front matter.
- `_drafts/`: Unpublished drafts (no date); included with `--drafts`.
- `_layouts/` and `_includes/`: Liquid layouts and partials.
- `_data/`: YAML/JSON/CSV data files available as `site.data.*`.
- `assets/`: CSS, JS, and images (e.g., `assets/css`, `assets/js`).
- `pages/`: Standalone pages (about, tags, etc.).
- `_site/`: Build output (ignored by Git).
Tip: Plugins are declared in `Gemfile` and `_config.yml`.

## Build, Test, and Development Commands
- `bundle install`: Install Ruby gems locally (use Bundler).
- `bundle exec jekyll serve --livereload --drafts`: Run local dev server with live reload and drafts.
- `bundle exec jekyll build`: Produce a production build in `_site/`.
- `JEKYLL_ENV=production bundle exec jekyll build`: Optimize for production.
- `bundle exec jekyll doctor`: Diagnose configuration/content issues.

## Coding Style & Naming Conventions
- Indentation: 2 spaces in Liquid, HTML, YAML, and JSON.
- Posts: `YYYY-MM-DD-my-post.md`; slugs and filenames in kebab-case.
- Front matter keys: `title`, `date`, `layout`, `categories`, `tags`, `excerpt`.
- Liquid: Prefer `{% render %}` for reusable snippets when available; avoid complex logic in templates.
- Markdown: Use fenced code blocks and reference-style links where possible.

## Testing Guidelines
- Build checks: `bundle exec jekyll build` must pass with no warnings.
- Link checks: After build, run `bundle exec htmlproofer ./_site --disable-external` (enable external checks in CI).
- Optional linting: `npx markdownlint "**/*.md"` for Markdown style; `stylelint` for CSS if configured.

## Commit & Pull Request Guidelines
- Commits: Use Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`).
  - Example: `feat(posts): add reading-time to article header`
- PRs: Describe changes, link issues (`Closes #123`), include screenshots for UI updates, and list manual test steps (serve, navigate, check links).
- Scope: Keep PRs focused and incremental.

## Security & Configuration Tips
- Do not commit `_site/`, local caches, or credentials.
- Use config overrides (`_config.dev.yml`, `_config.prod.yml`) instead of hardcoding URLs or keys.
- Validate front matter (dates, slugs, categories) to avoid broken routes.

## Agent-Specific Notes
- Before opening a PR: `bundle install && bundle exec jekyll build && bundle exec htmlproofer ./_site`.
- Prefer minimal, reversible changes to layouts and includes; document any config edits in the PR description.
