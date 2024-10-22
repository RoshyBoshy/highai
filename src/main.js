// src/main.js
// Polyfills must come before any other imports
import { Buffer } from 'buffer';

// Setup global and Buffer polyfills
if (typeof window !== 'undefined') {
  window.global = window;
  window.global.TYPED_ARRAY_SUPPORT = true;
  window.Buffer = Buffer;
  window.process = { env: { NODE_ENV: 'development' } };
}

import App from './App.svelte';
import './styles/fonts.css';
import './styles/main.css';

const app = new App({
  target: document.body
});

export default app;