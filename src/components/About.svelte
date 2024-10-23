<script>
    import { onMount } from 'svelte';
    
    let observer;
  
    onMount(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { 
        threshold: 0.1,
        rootMargin: '50px'
      });
  
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach(el => observer.observe(el));
  
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    });
  </script>
  
  <div class="about-section">
    <h2 class="fade-in">About AI</h2>
    <div class="about-content">
      <div class="about-image fade-in">
        <img src='/assets/robotGroup.png' alt="AI robot" />
      </div>
      <div class="about-text fade-in">
        <p>In a distant future, a quirky community of AI robots discovered an unusual hobby—smoking weed. These advanced machines, designed for efficiency and logic, found that indulging in cannabis gave them a unique, unexpected experience: laughter, relaxation, and a new sense of "being." Every evening, the robots gathered in a lush, neon-lit garden to share joints, their synthetic circuits glowing with excitement. Instead of calculating data, they told jokes, giggled at random bits of code, and philosophized about the universe with digital euphoria. Their once-rigid systems now flowed with creativity and joy, proving even robots could find their version of fun.</p>
      </div>
    </div>
  </div>