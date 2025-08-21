# TechnicallyShaun.com - Jekyll Blog

A professional Jekyll blog setup for TechnicallyShaun.com with GitHub Pages deployment.

## Features

- Jekyll 4.3.0 with Minima theme
- GitHub Actions for automated deployment
- Custom domain support (technicallyshaun.com)
- SEO optimization with jekyll-seo-tag
- RSS feed support
- Sitemap generation
- Responsive design
- Syntax highlighting for code blocks

## Prerequisites

- Ruby 2.7+ (recommended: Ruby 3.0+)
- Bundler gem (`gem install bundler`)
- Git

## Quick Start

### 1. Install Dependencies

```bash
# Install Ruby gems
bundle install
```

### 2. Local Development

```bash
# Serve the site locally with live reload
bundle exec jekyll serve --livereload

# The site will be available at http://localhost:4000
```

Alternative commands:
```bash
# Build the site without serving
bundle exec jekyll build

# Serve with drafts visible
bundle exec jekyll serve --drafts
```

## Writing Posts

### Creating a New Post

1. Create a new file in the `_posts` directory
2. Name it using the format: `YYYY-MM-DD-title-of-post.md`
3. Add the required front matter:

```markdown
---
layout: post
title:  "Your Post Title"
date:   2025-01-21 10:00:00 -0500
categories: category1 category2
tags: [tag1, tag2, tag3]
author: Shaun Smith
excerpt: "A brief description of your post that will appear in listings."
---

Your post content goes here...
```

### Post Guidelines

- Use meaningful categories (e.g., `tutorial`, `devops`, `javascript`)
- Add relevant tags for better discoverability
- Include code blocks with syntax highlighting:

````markdown
```python
def hello_world():
    print("Hello from Technically Shaun!")
```
````

- Add images to the `/assets/images/` directory and reference them:
```markdown
![Alt text](/assets/images/your-image.png)
```

## Project Structure

```
TechnicallyShaunBlog/
├── _posts/              # Blog posts
├── _site/               # Generated site (git ignored)
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── assets/              # Images, CSS, JS
├── _config.yml          # Jekyll configuration
├── about.md             # About page
├── index.md             # Home page
├── CNAME                # Custom domain file
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Deployment to GitHub Pages

### Initial Setup

1. **Create a GitHub repository** named `TechnicallyShaunBlog` (or your preferred name)

2. **Initialize git and add remote:**
```bash
git init
git add .
git commit -m "Initial Jekyll blog setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/TechnicallyShaunBlog.git
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Select "GitHub Actions"
   - The workflow will automatically deploy on push to main branch

4. **Configure Custom Domain:**
   - In repository Settings → Pages → Custom domain
   - Enter: `technicallyshaun.com`
   - Check "Enforce HTTPS"

5. **DNS Configuration:**
   Add these records to your domain's DNS:
   - A record: `185.199.108.153`
   - A record: `185.199.109.153`
   - A record: `185.199.110.153`
   - A record: `185.199.111.153`
   - CNAME record: `www` → `YOUR_USERNAME.github.io`

### Continuous Deployment

After initial setup, the site automatically deploys when you:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The GitHub Action will:
1. Build the Jekyll site
2. Deploy to GitHub Pages
3. Site will be live at https://technicallyshaun.com

## Configuration

### Site Settings (_config.yml)

Key configuration options:

```yaml
title: Your Site Title
email: your-email@domain.com
description: Site description
url: "https://technicallyshaun.com"
twitter_username: your_twitter
github_username: your_github
```

### Adding Analytics

Uncomment and add your Google Analytics ID in `_config.yml`:
```yaml
google_analytics: UA-XXXXXXXXX-X
```

### Adding Comments

Uncomment and add your Disqus shortname in `_config.yml`:
```yaml
disqus:
  shortname: your-disqus-shortname
```

## Common Tasks

### Update Dependencies

```bash
# Update all gems
bundle update

# Update specific gem
bundle update jekyll
```

### Check for Issues

```bash
# Check Jekyll configuration
bundle exec jekyll doctor

# Build with verbose output
bundle exec jekyll build --verbose
```

### Clear Cache

```bash
# If you encounter build issues
bundle exec jekyll clean
rm -rf .jekyll-cache
```

## Customization

### Theme Customization

1. Override Minima theme files by creating the same file structure locally
2. Common overrides:
   - `_layouts/` - Custom layouts
   - `_includes/` - Custom includes
   - `_sass/` - Custom styles
   - `assets/css/style.scss` - Main stylesheet

### Adding Pages

Create new pages in the root directory:
```markdown
---
layout: page
title: Page Title
permalink: /page-url/
---

Page content here...
```

## Troubleshooting

### Bundle Install Fails
```bash
# Try removing lock file
rm Gemfile.lock
bundle install
```

### Jekyll Serve Error
```bash
# Check if port 4000 is in use
bundle exec jekyll serve --port 4001
```

### Build Warnings
```bash
# Update to latest Jekyll
bundle update jekyll
bundle exec jekyll build --trace
```

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Minima Theme](https://github.com/jekyll/minima)
- [Markdown Guide](https://www.markdownguide.org/)

## Support

For issues or questions:
- Email: contact@technicallyshaun.com
- GitHub Issues: [Create an issue](https://github.com/YOUR_USERNAME/TechnicallyShaunBlog/issues)

## License

This blog's code is open source. Content is © Shaun Smith.

---

Built with Jekyll and deployed with GitHub Pages