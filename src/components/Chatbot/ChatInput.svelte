<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    function handleSubmit(event) {
      event.preventDefault();
      const messageInput = event.target.elements.message;
      const message = messageInput.value.trim();
      
      if (message) {
        dispatch('message', message);
        messageInput.value = '';
      }
    }
  </script>
  
  <form class="chat-input" on:submit={handleSubmit}>
    <input 
      type="text" 
      name="message" 
      placeholder="Type your message..." 
      autocomplete="off"
    />
    <button type="submit">Send</button>
  </form>