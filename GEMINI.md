# Project Overview

This is a Jekyll-powered blog for TechnicallyShaun.com, deployed automatically to GitHub Pages. The blog focuses on AI, automation, and software development topics, including tutorials and articles on MCP, Claude API, and building autonomous personal assistants.

**Key Technologies:**

*   **Jekyll:** A static site generator written in Ruby.
*   **Minima:** The Jekyll theme used for this blog.
*   **GitHub Pages:** Hosting for the static site.
*   **GitHub Actions:** For continuous integration and deployment (CI/CD).

## Building and Running

The project uses Bundler to manage Ruby gems.

**1. Install Dependencies:**

```bash
bundle install
```

**2. Local Development:**

To serve the site locally with live reload:

```bash
bundle exec jekyll serve --livereload
```

The site will be available at `http://localhost:4000`.

**3. Build for Production:**

To build the site without serving:

```bash
bundle exec jekyll build
```

## Development Conventions

*   **Blog Posts:** New posts are created in the `_posts` directory using the format `YYYY-MM-DD-title-of-post.md`.
*   **Tutorials:** Tutorials are created in the `_tutorials` directory.
*   **Images:** Images are stored in the `/assets/images/` directory.
*   **Deployment:** The site is automatically deployed to GitHub Pages when changes are pushed to the `master` branch. The deployment workflow is defined in `.github/workflows/jekyll.yml`.

## Key Files

*   `_config.yml`: Contains the main Jekyll configuration, including site title, description, plugins, and theme settings.
*   `Gemfile`: Lists the Ruby gems used by the project, managed by Bundler.
*   `index.md`: The home page of the blog.
*   `about.md`: The about page.
*   `_posts/`: Directory containing all blog posts.
*   `_tutorials/`: Directory containing all tutorials.
*   `.github/workflows/jekyll.yml`: The GitHub Actions workflow for building and deploying the site.
