(function() {
  // Configuration
  const HEADER_HEIGHT = 80; // Approximate height of main header when sticky
  const SCROLL_RANGE = 200; // Pixels over which to gradually shrink
  const MIN_FONT_SIZE = 1.2; // rem
  const MIN_PADDING = { top: 1.5, bottom: 1 }; // rem
  
  // Initial values (matching CSS defaults)
  const INITIAL_FONT_SIZE = 2.5; // rem (from h1 default)
  const INITIAL_PADDING = { top: 3, bottom: 2 }; // rem (from .post-header-wrapper)
  
  // Cache DOM elements
  let postHeaderWrapper = null;
  let postTitle = null;
  
  // Initialize on page load
  function init() {
    postHeaderWrapper = document.querySelector('.post-header-wrapper');
    postTitle = document.querySelector('.post-title');
    
    // Only run if we're on a post page with these elements
    if (!postHeaderWrapper || !postTitle) {
      return;
    }
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Run once on init in case user refreshes mid-scroll
    handleScroll();
  }
  
  function handleScroll() {
    const scrollY = window.scrollY;
    
    // Only start shrinking after scrolling past the main header
    if (scrollY <= HEADER_HEIGHT) {
      // Reset to initial state
      postTitle.style.fontSize = '';
      postHeaderWrapper.style.padding = '';
      return;
    }
    
    // Calculate progress (0 to 1) over the SCROLL_RANGE
    const scrollProgress = Math.min((scrollY - HEADER_HEIGHT) / SCROLL_RANGE, 1);
    
    // Calculate font size (ease-out for smoother feel)
    const easedProgress = easeOutCubic(scrollProgress);
    const fontSize = INITIAL_FONT_SIZE - (INITIAL_FONT_SIZE - MIN_FONT_SIZE) * easedProgress;
    
    // Calculate padding
    const paddingTop = INITIAL_PADDING.top - (INITIAL_PADDING.top - MIN_PADDING.top) * easedProgress;
    const paddingBottom = INITIAL_PADDING.bottom - (INITIAL_PADDING.bottom - MIN_PADDING.bottom) * easedProgress;
    
    // Apply styles
    postTitle.style.fontSize = `${fontSize}rem`;
    postHeaderWrapper.style.padding = `${paddingTop}rem 0 ${paddingBottom}rem`;
  }
  
  // Easing function for smoother animation
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
