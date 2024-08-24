const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", async (event) => {
    const relatedApps = await navigator.getInstalledRelatedApps();
  
    // Search for a specific installed platform-specific app
    const psApp = relatedApps.find((app) => app.id === "J.A.T.E");
  
    if (psApp) {
      event.preventDefault();
      // Update UI as appropriate
    }
  });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!installPrompt) {
        return;
      }
      const result = await installPrompt.prompt();
      console.log(`Install prompt was: ${result.outcome}`);
      disableInAppInstallPrompt();
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
    installPrompt = null;
    installButton.setAttribute("hidden", "");
  }
