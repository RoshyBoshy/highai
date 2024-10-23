<script>
	import { onMount } from 'svelte';
	import Nav from './components/Nav.svelte';
	import Hero from './components/Hero.svelte';
	import About from './components/About.svelte';
	import Chatbot from './components/Chatbot/Chatbot.svelte';
	import CursorBuds from './components/BudEffects/CursorBuds.svelte';
  </script>
  
  <main>
	<CursorBuds />
	<div class="container">
	  <Nav />
	  <Hero />
	</div>
	<About />
	<Chatbot />
  </main>
  
  <style>
	:global(body) {
	  margin: 0;
	  padding: 0;
	  background-color: var(--background-color);
	  color: var(--text-color);
	  font-family: 'mainFont', sans-serif;
	}
  </style>