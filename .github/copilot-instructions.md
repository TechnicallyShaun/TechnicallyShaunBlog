# GitHub Copilot Instructions for TechnicallyShaunBlog

This repository contains a Jekyll-based blog for TechnicallyShaun.com, deployed via GitHub Pages.

## Project Overview

This is a professional Jekyll 4.3.0 blog using the Minima theme, featuring:
- GitHub Pages deployment via GitHub Actions
- SEO optimization with jekyll-seo-tag
- Custom domain support (technicallyshaun.com)
- RSS feed, sitemap, and syntax highlighting
- Giscus comments integration

## Essential Commands

### Development
```bash
# Install dependencies (ALWAYS run first)
bundle install

# Local development with live reload
bundle exec jekyll serve --livereload

# Include drafts in local preview
bundle exec jekyll serve --livereload --drafts
```

### Build & Testing
```bash
# Production build
JEKYLL_ENV=production bundle exec jekyll build

# Standard build
bundle exec jekyll build

# Check configuration and diagnose issues
bundle exec jekyll doctor

# Link checking (after build)
bundle exec htmlproofer ./_site --disable-external
```

### Validation Steps
Before opening a PR, always run:
```bash
bundle install && bundle exec jekyll build && bundle exec htmlproofer ./_site
```

## Repository Structure

```
/
├── _posts/              # Blog posts (YYYY-MM-DD-title.md format)
├── _drafts/             # Unpublished drafts (no date prefix)
├── _layouts/            # Custom Liquid layouts
├── _includes/           # Reusable Liquid partials
├── _data/               # YAML/JSON/CSV data files
├── assets/              # CSS, JS, images
│   ├── css/
│   ├── js/
│   └── images/
├── pages/               # Standalone pages
├── _config.yml          # Main Jekyll configuration
├── _site/               # Build output (git ignored)
└── .github/
    └── workflows/       # GitHub Actions CI/CD
```

## Writing Blog Posts

### Post File Naming & Location
- All posts go in `_posts/` directory
- Name format: `YYYY-MM-DD-title-of-post.md` (kebab-case)
- Drafts go in `_drafts/` without date prefix

### Required Front Matter
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS -0500
categories: category1 category2
tags: [tag1, tag2, tag3]
author: Shaun Smith
excerpt: "Brief description for listings and SEO"
---
```

### Content Guidelines
- Use fenced code blocks with language identifiers (```python, ```javascript, etc.)
- Store images in `/assets/images/` and reference: `![Alt text](/assets/images/name.png)`
- Use meaningful categories (e.g., `tutorial`, `devops`, `javascript`)
- Add descriptive tags for discoverability

## Code Style & Conventions

### Indentation & Formatting
- **2 spaces** for Liquid templates, HTML, YAML, and JSON
- Use kebab-case for file names and slugs
- Front matter keys: lowercase with underscores where needed

### Liquid Templates
- Prefer `{% render %}` over `{% include %}` for reusable components
- Keep logic minimal in templates
- Use filters for data transformation

### Markdown
- Use fenced code blocks (```) over indented code blocks
- Prefer reference-style links for readability in longer documents
- Use semantic heading hierarchy (h1 → h2 → h3)

## Configuration Files

### _config.yml
Primary configuration file containing:
- Site metadata (title, description, URL)
- Plugin configuration
- Theme settings (Minima)
- Build settings and exclusions
- Pagination, permalinks, collections

Key settings:
```yaml
url: "https://technicallyshaun.com"
baseurl: ""
theme: minima
plugins: [jekyll-feed, jekyll-seo-tag, jekyll-sitemap, jekyll-paginate]
```

### Gemfile
Defines Ruby dependencies. Use `bundle install` to install, `bundle update` to update.

## Testing & Validation

### Build Testing
- Every change must build without warnings: `bundle exec jekyll build`
- Use `bundle exec jekyll doctor` to diagnose configuration issues
- Check verbose output if issues occur: `bundle exec jekyll build --verbose`

### Link Checking
- After build, run `bundle exec htmlproofer ./_site --disable-external`
- In CI, enable external link checks for thorough validation

### Optional Linting
- Markdown: `npx markdownlint "**/*.md"` (if configured)
- CSS: `stylelint` (if configured)

## Git Commit Conventions

Use Conventional Commits format:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks
- `refactor:` - Code refactoring
- `style:` - Formatting changes

Examples:
```
feat(posts): add reading time to article header
fix(layout): correct mobile navigation spacing
docs: update README with new setup instructions
chore(deps): update Jekyll to 4.3.0
```

## Pull Request Guidelines

- Describe changes clearly and link related issues (`Closes #123`)
- Include screenshots for UI/layout changes
- List manual testing steps (serve locally, navigate to affected pages)
- Keep PRs focused on a single concern
- Document any configuration changes in the PR description

## Security & Best Practices

### Do NOT Commit
- `_site/` directory (build output)
- `.jekyll-cache/` or similar caches
- Credentials, API keys, or secrets
- `vendor/` directories

### Configuration
- Use `_config.yml` for site settings
- Use environment variables for sensitive data
- Prefer `_config.dev.yml` for local overrides (not committed)

### Front Matter Validation
- Always validate dates are in correct format
- Check slugs and permalinks to avoid broken routes
- Ensure categories and tags are consistent across posts

## Deployment

- Automated via GitHub Actions on push to `main` branch
- Workflow file: `.github/workflows/jekyll.yml`
- Site deploys to GitHub Pages at https://technicallyshaun.com
- No manual deployment steps required

## Common Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
bundle exec jekyll clean
rm -rf .jekyll-cache
bundle exec jekyll build
```

### Dependency Issues
```bash
# Remove lock file and reinstall
rm Gemfile.lock
bundle install
```

### Port Already in Use
```bash
# Use alternative port
bundle exec jekyll serve --port 4001
```

## Agent-Specific Guidance

When working on this repository:

1. **Always run** `bundle install && bundle exec jekyll build` before and after changes
2. **Validate** that posts have correct front matter and naming
3. **Test locally** with `bundle exec jekyll serve --livereload` before finalizing
4. **Keep changes minimal** - prefer editing existing files over creating new ones unless adding content
5. **Check links** after modifying layouts or navigation
6. **Document** any configuration changes clearly in commit messages and PR descriptions

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Minima Theme](https://github.com/jekyll/minima)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Liquid Template Documentation](https://shopify.github.io/liquid/)
