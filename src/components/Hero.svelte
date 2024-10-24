<script>
    import { onMount } from 'svelte';
    import lottie from 'lottie-web/build/player/lottie_light.js';
  
    let animationContainer;
    let animation;
  
    function handleBuySell() {
      console.log('Buy/Sell clicked');
    }
  
    function handleCopyOnEnter(event) {
      if (event.key === 'Enter') {
        copyToClipboard();
      }
    }
  
    function copyToClipboard() {
      const address = "0x123123x9213749z092";
      navigator.clipboard.writeText(address)
        .then(() => { 
          const addressElement = document.querySelector('.address');
          addressElement.classList.add('copied');
          
          setTimeout(() => { 
            addressElement.classList.remove('copied');
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    }
  
    onMount(() => {
      try {
        animation = lottie.loadAnimation({
          container: animationContainer,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/assets/roll.json'
        });
      } catch (error) {
        console.error('Error initializing Lottie:', error);
      }
  
      return () => {
        if (animation) {
          animation.destroy();
        }
      };
    });
  </script>
  
  <div class="content">
    <div class="left-side">
      <h1 class="constant-smoke" data-text="MY HIGH AI">MY HIGH AI</h1>
      <h3>I'm just an AI that gets HIGH</h3>
      <div class="button-address-container">
        <button on:click={handleBuySell}>BUY</button>
        <div 
          class="address" 
          on:click={copyToClipboard} 
          on:keydown={handleCopyOnEnter} 
          tabindex="0" 
          role="button"
        >
          0x123123x9213749z092
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="image-container">
        <img src='/assets/robot.png' alt="AI robot" />
        <div bind:this={animationContainer} class="lottie-overlay"></div>
      </div>
    </div>
  </div>
  
  <style>
    /* Add component-specific styles here */
  </style>