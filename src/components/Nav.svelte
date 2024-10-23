<script>
    function handleBuySell() {
      console.log('Buy/Sell clicked');
    }
    
    function handleChart() {
      console.log('Chart clicked');
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
    <div class="nav-logo">HIGH AI</div>
    <div class="nav-center">
      <button class="pulse-button" on:click={scrollToChatbot}>NEW! AI CHATBOT</button>
    </div>
    <div class="nav-buttons">
      <button on:click={handleBuySell}>BUY/SELL</button>
      <button on:click={handleChart}>CHART</button>
      <button on:click={handleTelegram} class="icon-button">
        <!-- Telegram SVG -->
      </button>
      <button on:click={handleX} class="icon-button">
        <!-- X SVG -->
      </button>
    </div>
  </nav>