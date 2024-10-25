<script>
    import FallingBuds from './BudEffects/FallingBuds.svelte';

    function handleBuySell() {
      window.open('https://pump.fun', '_blank');
    }
    
    function handleChart() {
      window.open('https://pump.fun', '_blank');
    }
  
    function handleTelegram() {
      window.open('https://t.me/+7fgDlG3tqFFiMjQ8', '_blank');
    }
  
    function handleX() {
      window.open('https://x.com/HighAi_Sol', '_blank');
    }
  
    function scrollToChatbot() {
      const chatbotSection = document.querySelector('.chatbot-section');
      if (chatbotSection) {
        chatbotSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  </script>
  
  <nav>
    <FallingBuds />

    <div class="nav-logo">MY HIGH AI</div>
    <div class="nav-center">
      <button class="pulse-button" on:click={scrollToChatbot}>NEW! AI CHATBOT!🤖</button>
    </div>
    <div class="nav-buttons">
      <button on:click={handleBuySell}>BUY $HIGHAI</button>
      <button on:click={handleChart}>CHART</button>
      <button on:click={handleTelegram} class="icon-button">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.89.03-.25.34-.51.93-.78 3.63-1.58 6.06-2.62 7.28-3.13 3.47-1.46 4.19-1.71 4.66-1.71.1 0 .33.02.48.12.13.08.21.2.23.34.02.15.03.3.02.46z"/>
        </svg>
      </button>
      <button on:click={handleX} class="icon-button">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </button>
    </div>
  </nav>