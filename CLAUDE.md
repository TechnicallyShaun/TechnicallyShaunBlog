# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Local Development
```bash
# Install dependencies (run after cloning or when Gemfile changes)
bundle install

# Start local server with live reload (primary development command)
bundle exec jekyll serve --livereload

# Build site without serving
bundle exec jekyll build

# Serve with draft posts visible
bundle exec jekyll serve --drafts

# Clean build artifacts and cache
bundle exec jekyll clean
rm -rf .jekyll-cache
```

### Dependency Management
```bash
# Update all gems
bundle update

# Update specific gem
bundle update jekyll
```

### Debugging
```bash
# Check Jekyll configuration
bundle exec jekyll doctor

# Build with verbose output for debugging
bundle exec jekyll build --verbose

# Build with trace for error details
bundle exec jekyll build --trace

# Use different port if 4000 is occupied
bundle exec jekyll serve --port 4001
```

## Architecture Overview

This is a Jekyll-based static site generator blog configured for GitHub Pages deployment with a custom domain (technicallyshaun.com).

### Key Components

**Content Structure:**
- `_posts/`: Blog posts in format `YYYY-MM-DD-title.md` with required front matter
- Posts URL pattern: `/blog/:year/:month/:day/:title/`
- Pagination enabled (10 posts per page)

**Configuration:**
- `_config.yml`: Main Jekyll configuration with Minima theme, plugin settings, and SEO metadata
- Custom domain via CNAME file
- GitHub Actions workflow (`.github/workflows/jekyll-gh-pages.yml`) for automated deployment on push to main

**Front Matter Requirements for Posts:**
```yaml
---
layout: post
title:  "Post Title"
date:   YYYY-MM-DD HH:MM:SS -ZONE
categories: category1 category2
tags: [tag1, tag2]
author: Shaun Smith
excerpt: "Brief description"
---
```

### Deployment Pipeline

1. Push to main branch triggers GitHub Actions workflow
2. Workflow builds Jekyll site with production environment
3. Deploys to GitHub Pages automatically
4. Site accessible at https://technicallyshaun.com

### Theme Customization

Using Minima theme with override capability:
- Create matching file structure locally to override theme files
- Common override locations: `_layouts/`, `_includes/`, `_sass/`, `assets/css/style.scss`

### Plugin Ecosystem

Active plugins:
- jekyll-feed (RSS generation)
- jekyll-seo-tag (SEO metadata)
- jekyll-sitemap (sitemap.xml)
- jekyll-paginate (post pagination)

### Analytics & Comments

Pre-configured but disabled:
- Google Analytics: Uncomment and add tracking ID in `_config.yml`
- Disqus comments: Uncomment and add shortname in `_config.yml`