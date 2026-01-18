/**
 * Post Header Shrink Module
 * 
 * Gradually shrinks the post header (title font size and padding) as the user
 * scrolls down the page, freeing up screen real estate for content.
 * 
 * Behavior:
 * - Activates after scrolling past the main header (HEADER_HEIGHT)
 * - Smoothly transitions over SCROLL_RANGE pixels
 * - Uses ease-out cubic easing for natural feel
 * - Fully reversible when scrolling back up
 * 
 * @module post-header-shrink
 */
(function() {
  // Configuration
  const HEADER_HEIGHT = 80; // Approximate height of main header when sticky
  const SCROLL_RANGE = 200; // Pixels over which to gradually shrink
  const MIN_FONT_SIZE = 1.2; // rem
  const MIN_PADDING = { top: 1.5, bottom: 1 }; // rem
  const THROTTLE_DELAY = 16; // ms (~60fps)
  
  // Initial values (matching CSS defaults)
  const INITIAL_FONT_SIZE = 2.5; // rem (from h1 default)
  const INITIAL_PADDING = { top: 3, bottom: 2 }; // rem (from .post-header-wrapper)
  
  // Cache DOM elements
  let postHeaderWrapper = null;
  let postTitle = null;
  let lastScrollTime = 0;
  let rafId = null;
  
  /**
   * Initialize the module
   * Caches DOM elements and sets up event listeners
   */
  function init() {
    postHeaderWrapper = document.querySelector('.post-header-wrapper');
    postTitle = document.querySelector('.post-title');
    
    // Only run if we're on a post page with these elements
    if (!postHeaderWrapper || !postTitle) {
      return;
    }
    
    // Add throttled scroll listener
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Run once on init in case user refreshes mid-scroll
    handleScroll();
  }
  
  /**
   * Throttled scroll handler to improve performance
   * Limits execution to ~60fps
   */
  function throttledHandleScroll() {
    const now = Date.now();
    
    if (now - lastScrollTime < THROTTLE_DELAY) {
      // Schedule update for next frame if not already scheduled
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = null;
          handleScroll();
          lastScrollTime = Date.now();
        });
      }
      return;
    }
    
    lastScrollTime = now;
    handleScroll();
  }
  
  /**
   * Handle scroll event and update header styles
   * Calculates and applies font size and padding based on scroll position
   */
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
  
  /**
   * Easing function for smoother animation
   * @param {number} t - Progress value between 0 and 1
   * @returns {number} Eased value between 0 and 1
   */
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
