 
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  // Perform install steps if necessary
  self.skipWaiting(); // Activate worker immediately
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
  // Perform activate steps if necessary
  event.waitUntil(clients.claim()); // Become available to all pages
});

// Example: Listen for fetch events (optional)
self.addEventListener('fetch', (event) => {
  // Handle fetch events if needed
});
