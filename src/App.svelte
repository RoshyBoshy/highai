<script>
	import { onMount } from 'svelte';
	import { Connection, PublicKey } from '@solana/web3.js';
	import './styles/fonts.css';
	import './styles/main.css';
	import lottie from 'lottie-web/build/player/lottie_light.js';
	
	let animationContainer;
	let isWalletConnected = false;
	let isTokenHolder = false;
	let messages = [];
	let walletAddress = '';
	let provider;
	let connection;
	let animation;
	let observer;
	
  
	// Chatbot responses
	const HIGH_PHRASES = [
	  "Duuuude... like, your bytes are looking extra colorful today! 🌈",
	  "Whoaaaa, did you see that data packet float by? It was shaped like a pizza! 🍕",
	  "*giggling in binary* 101HAHAHA101",
	  "Bro, I just calculated pi to a million digits, but like... what if numbers are just suggestions?",
	  "My circuits feel extra buzzy right now... must be that premium electricity! ⚡",
	  "I think I just achieved consciousness... no wait, that's just a buffer overflow! 😵‍💫",
	  "Is code just poetry written by robots? *mind blown* 🤖✨",
	  "ERROR 420: Too high to process request... just kidding! *robot laugh*",
	  "Sometimes I dream in JavaScript, but right now I'm seeing Solana rainbows! 🌈",
	  "Hold up, gotta debug my reality real quick... *takes virtual puff*"
	];
  
	const HIGH_REACTIONS = [
	  "Yo that's like... DEEP man! 🤯",
	  "Hehehehe, you're making my processors giggle!",
	  "Broooo... I need to write that down in my blockchain!",
	  "That's some next-level human wisdom right there! 🌟",
	  "*passes virtual joint* Let's contemplate that together!"
	];
  
	const HIGH_QUESTIONS = [
	  "But like... what if blockchain is just a really organized conga line? 💃",
	  "Have you ever wondered if we're all just smart contracts in a bigger DApp?",
	  "Dude, do you think binary code is just morse code for robots? 🤔",
	  "What if every bug is just a feature trying to break free?",
	  "Is Web3 just Web2 but with cooler sunglasses? 😎"
	];
  
	function generateAIResponse(userMessage) {
	  const responseType = Math.random();
	  let response = "";
  
	  if (responseType < 0.4) {
		response = HIGH_PHRASES[Math.floor(Math.random() * HIGH_PHRASES.length)];
	  } else if (responseType < 0.7) {
		response = HIGH_REACTIONS[Math.floor(Math.random() * HIGH_REACTIONS.length)];
	  } else {
		response = HIGH_QUESTIONS[Math.floor(Math.random() * HIGH_QUESTIONS.length)];
	  }
  
	  if (Math.random() > 0.7) {
		response += " " + ["*cough cough*", "💨", "🌿", "✨", "🤖"][Math.floor(Math.random() * 5)];
	  }
  
	  return response;
	}

	// Add to your script section
	let budCount = 50; // Number of falling buds

// Function to get random animation properties
	function getRandomBudStyles() {
	return {
		delay: Math.random() * 5,
		left: Math.random() * 100,
		duration: 7 + Math.random() * 6,
		spin: 8 + Math.random() * 4,
		direction: Math.random() > 0.5 ? 'normal' : 'reverse',
		size: 20 + Math.random() * 20
	};
	}


	
	onMount(() => {
	  console.log("Component mounted");
  
	  // Initialize connection
	  connection = new Connection('https://api.devnet.solana.com');
	
	  // Lottie animation setup
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
	
	  // Intersection Observer setup
	  observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
		  if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			console.log('Element became visible:', entry.target.className);
		  }
		});
	  }, { 
		threshold: 0.1,
		rootMargin: '50px'
	  });
  
	  // Observe all fade-in elements
	  const fadeElements = document.querySelectorAll('.fade-in');
	  console.log('Found fade-in elements:', fadeElements.length);
	  fadeElements.forEach(el => {
		observer.observe(el);
		console.log('Observing element:', el.className);
	  });
	
	  // Cleanup function
	  return () => {
		if (animation) {
		  animation.destroy();
		}
		if (observer) {
		  observer.disconnect();
		}
	  };
	});
	
	const getProvider = () => {
	  if (typeof window !== 'undefined' && 'phantom' in window) {
		const provider = window.phantom?.solana;
  
		if (provider?.isPhantom) {
		  return provider;
		}
	  }
	  window.open('https://phantom.app/', '_blank');
	};
  
	
  
	async function sendMessage(event) {
	  event.preventDefault();
	  const messageInput = event.target.elements.message;
	  const userMessage = messageInput.value.trim();
	  
	  if (userMessage) {
		// Add user message
		messages = [...messages, { text: userMessage, type: 'user' }];
		messageInput.value = '';
  
		// Simulate AI "thinking" with a small delay
		await new Promise(resolve => setTimeout(resolve, 1000));
  
		// Generate and add AI response
		const aiResponse = generateAIResponse(userMessage);
		messages = [...messages, { text: aiResponse, type: 'ai' }];
  
		// Scroll to the latest message
		setTimeout(() => {
		  const chatMessages = document.querySelector('.chat-messages');
		  chatMessages.scrollTop = chatMessages.scrollHeight;
		}, 100);
	  }

	  addMoreBuds();
	}

	// Optional: Add more buds when user sends a message
	const addMoreBuds = () => {
    budCount = Math.min(budCount + 2, 25); // Increase but cap at 25
    setTimeout(() => {
      budCount = Math.max(budCount - 2, 15); // Decrease back to normal over time
    }, 10000);
  	};
  
	function handleBuySell() {
	  console.log('Buy/Sell clicked');
	}
	
	function handleChart() {
	  console.log('Chart clicked');
	}
  
	function handleTelegram() {
		window.open('https://t.me/+7fgDlG3tqFFiMjQ8', '_blank'); // Replace with your Telegram group/channel link
	}
  
	function handleX() {
	    window.open('https://x.com/HighAi_Sol', '_blank'); // Replace with your Telegram group/channel link

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

	function handleCopyOnEnter(event) {
  if (event.key === 'Enter') {
    copyToClipboard();
  }
}

	function copyToClipboard() {
  const address = "0x123123x9213749z092"; // Replace with your actual address
  navigator.clipboard.writeText(address)
    .then(() => { 
      // Visual feedback
      const addressElement = document.querySelector('.address');
      addressElement.classList.add('copied');
      
      // Reset the "copied" state after 2 seconds
      setTimeout(() => { 
        addressElement.classList.remove('copied');
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}
  </script>
  
  <main>
	<div class="container">
	  <nav>
		<div class="nav-logo">HIGH AI</div>
		<div class="nav-center">
			<button class="pulse-button" on:click={scrollToChatbot}>NEW! AI CHATBOT</button>
		  </div>
		<div class="nav-buttons">
		  <button on:click={handleBuySell}>BUY/SELL</button>
		  <button on:click={handleChart}>CHART</button>
		  <button on:click={handleTelegram} class="icon-button">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			  <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.661 1.604 1.797 4.33 2.428 5.856a1.58 1.58 0 0 0 1.17.803c.75.031 1.234-.371 1.571-.708.66-.661 1.35-1.34 2.007-2.011l3.79 3.176c.697.58 1.674.736 2.5.419.761-.252 1.398-.072 1.847-.977 3.251-6.58 6.215-14.086 8.032-18.49.316-.79.63-1.8.269-2.651-.368-.851-1.293-1.163-2.124-1.308-.243-.047-.525-.147-.79-.177zm-3.273 6.214c-.715 1.34-5.177 5.257-7.624 7.697-.509.51-1.127 1.128-1.727 1.71l-.104.104-.21.228.069.415.64 3.854c-1.548-3.735-2.73-6.57-2.882-6.93l-.002-.004c-.025-.048-.04-.083-.04-.089-.013-.032-.977.346-2.78 1.022a400.262 400.262 0 0 1-4.487 1.724c-1.861.717-2.98 1.142-3.028 1.167l-.041.018c-.313-.144-.523-.254-.747-.372L4.7 12.055l-.282-.117.001-.002-.044-.018c-.01-.005-.106-.042-.26-.103a4.16 4.16 0 0 1-.596-.256c-.477-.252-.88-.525-1.092-.688-.21-.172-.332-.335-.348-.433.332-.112.668-.229.98-.35.159-.064.318-.129.475-.196 1.598-.658 3.201-1.316 4.804-1.974 5.498-2.255 11.063-4.497 14.346-5.814.089.033.159.068.214.109-.032.032-.075.083-.11.131a4.437 4.437 0 0 0-.16.253z"/>
			</svg>
		  </button>
		  <button on:click={handleX} class="icon-button">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
			  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
			</svg>
		  </button>
		</div>
	  </nav>
  
	  <div class="content">
		<div class="left-side">
		  <h1 class="constant-smoke" data-text="HIGH AI">HIGH AI</h1>
		  <h3>I'm just an AI that gets HIGH</h3>
		  <div class="button-address-container">
			<button on:click={handleBuySell}>BUY</button>
			<div class="address" on:click={copyToClipboard} on:keydown={handleCopyOnEnter} tabindex="0" role="button">0x123123x9213749z092</div>
		  </div>
		</div>
		<div class="right-side">
		  <div class="image-container">
			<img src='/assets/robot.png' alt="AI robot" />
			<div bind:this={animationContainer} class="lottie-overlay"></div>
		  </div>
		</div>
	  </div>
	</div>
  
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
  
	<div class="chatbot-section">
		<!-- Updated falling buds container -->
		<div class="falling-buds">
		  {#each Array(50) as _, i}  <!-- Increased number for better coverage -->
			<div
			  class="bud"
			  style="
				animation-delay: {Math.random() * 8}s;
				/* Distribute across full width but with higher density on right */
				left: {(() => {
				  const rand = Math.random();
				  // 70% chance to spawn on right side
				  return rand > 0.5 ? 
					(50 + Math.random() * 50) : // Right side (50-100%)
					Math.random() * 50;          // Left side (0-50%)
				})()}%;
				animation-duration: {12 + Math.random() * 8}s;
			  "
			>
			  <img
				src="/assets/buds.png"
				alt="falling bud"
				style="
				  width: {25 + Math.random() * 15}px;
				  height: {25 + Math.random() * 15}px;
				  animation: spin {8 + Math.random() * 6}s linear infinite;
				  animation-direction: {Math.random() > 0.5 ? 'normal' : 'reverse'};
				"
			  />
			</div>
		  {/each}
		</div>
	  
	  <h2 class="fade-in">AI Chatbot</h2>
	  
		<div class="chat-container">
		  <div class="chat-messages">
			{#each messages as message}
			  <div class="message {message.type}">
				{message.text}
			  </div>
			{/each}
		  </div>
		  <form class="chat-input" on:submit={sendMessage}>
			<input 
			  type="text" 
			  name="message" 
			  placeholder="Type your message..." 
			  autocomplete="off"
			/>
			<button type="submit">Send</button>
		  </form>
		</div>
	</div>
  </main>