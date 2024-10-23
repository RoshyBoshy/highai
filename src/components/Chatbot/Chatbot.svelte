<script>
    import { onMount } from 'svelte';
    import ChatMessage from './ChatMessage.svelte';
    import ChatInput from './ChatInput.svelte';
    import FallingBuds from '../BudEffects/FallingBuds.svelte';
    import { HIGH_PHRASES, HIGH_REACTIONS, HIGH_QUESTIONS } from '../../constants/chatResponses';
  
    let messages = [];
  
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
  
    async function handleMessage(event) {
      const userMessage = event.detail;
      
      messages = [...messages, { text: userMessage, type: 'user' }];
  
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      const aiResponse = generateAIResponse(userMessage);
      messages = [...messages, { text: aiResponse, type: 'ai' }];
  
      setTimeout(() => {
        const chatMessages = document.querySelector('.chat-messages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 100);
    }
  </script>
  
  <div class="chatbot-section">
    <FallingBuds />
    <h2 class="fade-in">AI Chatbot</h2>
    <h3 class="fade-in">Type a message below but dont expect the answer to make too much sense...🍃😵‍💫</h3>
    
    <div class="chat-container">
      <div class="chat-messages">
        {#each messages as message}
          <ChatMessage {message} />
        {/each}
      </div>
      <ChatInput on:message={handleMessage} />
    </div>
  </div>