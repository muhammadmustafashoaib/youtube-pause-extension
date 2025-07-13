const checkbox = document.getElementById('enabled');

// Load saved state
chrome.storage.local.get('enabled', (data) => {
  checkbox.checked = data.enabled !== false;
});

checkbox.addEventListener('change', () => {
  chrome.storage.local.set({ enabled: checkbox.checked });
});