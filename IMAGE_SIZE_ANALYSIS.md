# Light Mode vs Dark Mode Image Size Analysis

## Question
Is the light mode image size the same as the dark mode image size?

## Answer
**YES**, the light mode and dark mode use the **exact same image** with the **exact same dimensions**.

## Technical Details

### Image File
- **File**: `assets/images/hero-banner.png`
- **Dimensions**: 1536 x 1024 pixels
- **File Size**: 2.1MB
- **Format**: PNG (8-bit RGB)

### Implementation
The hero section is implemented in `_layouts/home.html`:
```html
<div class="hero" style="background-image: url('{{ '/assets/images/hero-banner.png' | relative_url }}');">
  <div class="hero-overlay"></div>
  ...
</div>
```

### CSS Styling
In `assets/css/style.scss`, the `.hero` class applies:
```css
.hero {
  background-size: cover;
  background-position: center 40%;
  background-repeat: no-repeat;
}
```

The `background-size: cover` property ensures the image:
- Maintains its aspect ratio
- Covers the entire hero area
- Renders at the same size regardless of theme

### Theme Differences
The **only difference** between light and dark mode is the overlay gradient:

**Dark Mode Overlay:**
```css
.hero-overlay {
  background: linear-gradient(135deg, rgba(13, 17, 23, 0.85) 0%, rgba(22, 27, 34, 0.75) 100%);
}
```

**Light Mode Overlay:**
```css
[data-theme="light"] .hero-overlay {
  background: linear-gradient(135deg, rgba(250, 251, 252, 0.85) 0%, rgba(246, 248, 250, 0.75) 100%);
}
```

## Visual Comparison

### Dark Mode
![Dark Mode Hero](https://github.com/user-attachments/assets/7b4fb721-1c49-49bd-a8cb-5e67324e23c6)

### Light Mode
![Light Mode Hero](https://github.com/user-attachments/assets/a8839822-5e90-4880-a90d-6aece61a8358)

## Conclusion
Both themes use the identical background image. The visual difference is achieved solely through the semi-transparent overlay gradient, which is darker in dark mode and lighter in light mode. The underlying image dimensions, file size, and rendering size remain consistent across both themes.
