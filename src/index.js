import { createApp } from 'vue';

import App from '@/App.vue';

import '@/css/tailwind.css';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  document.body.appendChild(el);
  createApp(App).mount(el);
});
