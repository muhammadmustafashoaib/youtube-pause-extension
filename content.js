function handleVisibility() {
  chrome.storage.local.get('enabled', (data) => {
    if (data.enabled === false) return;
    if (document.hidden) {
      document.querySelectorAll('video').forEach(video => {
        if (!video.paused) {
          video.pause();
        }
      });
    }
  });
}

document.addEventListener('visibilitychange', handleVisibility);