<script>
  import { onMount } from 'svelte';

  function createBudAtCursor(x, y) {
    const bud = document.createElement('div');
    bud.className = 'cursor-bud';
    
    const img = document.createElement('img');
    img.src = '/assets/buds.png';
    img.alt = 'falling bud';
    
    // Increased duration for longer fall
    const duration = 8 + Math.random() * 4; // Now falls for 8-12 seconds
    const size = 20 + Math.random() * 15;
    
    bud.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
      z-index: 1000;
      opacity: 1;
      transition: opacity ${duration * 0.2}s ease-out; /* Faster fade out */
    `;
    
    img.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      filter: brightness(1.2) contrast(1.2) drop-shadow(0 0 5px rgba(255, 255, 255, 0.2));
      mix-blend-mode: screen;
    `;
    
    bud.appendChild(img);
    document.body.appendChild(bud);
    
    requestAnimationFrame(() => {
      bud.style.transition = `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
      const viewportHeight = window.innerHeight;
      const fallDistance = viewportHeight * 2; // Fall beyond viewport for smoother exit
      
      bud.style.transform = `translateY(${fallDistance}px)`;
      
      // Start fade out near the end of the animation
      setTimeout(() => {
        bud.style.opacity = '0';
      }, duration * 800); // Start fade out at 80% of the animation
    });
    
    // Remove element after animation completes
    setTimeout(() => {
      if (document.body.contains(bud)) {
        document.body.removeChild(bud);
      }
    }, duration * 1000);
  }

  function setupCursorBuds() {
    if (typeof window !== 'undefined') {
      const handleClick = (e) => {
        // Only create one bud per click
        const offsetX = e.clientX + (Math.random() - 0.5) * 10; // Slight random offset
        createBudAtCursor(offsetX, e.clientY);
      };
      
      document.addEventListener('click', handleClick);
      
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }
  }

  onMount(() => {
    const cleanup = setupCursorBuds();
    return cleanup;
  });
</script>