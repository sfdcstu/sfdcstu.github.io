function showError(message) {
    const errorContainer = document.getElementById('error-container');
    if (errorContainer) {
        errorContainer.innerHTML = `<div class="error">${message}</div>`;
    }
}

// Trigger initialization when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit longer for the Agentforce component to initialize
    setTimeout(() => {
        const iframe = document.getElementById("agentforce-messaging-frame");
        if (iframe) {
            iframe.style.position = "relative";
            iframe.style.top = "0";
            iframe.style.left = "0";
            iframe.style.height = "100%"; 
            iframe.style.width = "100%";
            iframe.style.boxShadow = "none";
            iframe.style.borderRadius = "12px";
            iframe.style.border = "none";
            iframe.style.margin = "0";
            iframe.style.padding = "0";
            iframe.style.transform = "none";
            iframe.style.overflow = "visible";
        }
        
        const messaging = document.getElementById('agentforce-messaging');
        if (messaging) {
            messaging.style.position = "relative";
            messaging.style.top = "0";
            messaging.style.left = "0";
            messaging.style.width = "100%";
            messaging.style.height = "100%"; 
            messaging.style.borderRadius = "12px";
            messaging.style.margin = "0";
            messaging.style.padding = "0";
            messaging.style.transform = "none";
            messaging.style.overflow = "visible";
        }
        
        // Move the Agentforce messaging component into the cwc-shell container
        const agentforceMessaging = document.getElementById('agentforce-messaging');
        const cwcShell = document.getElementById('cwc-shell');
        
        if (agentforceMessaging && cwcShell) {
            cwcShell.appendChild(agentforceMessaging);
        }
    }, 100); // Increased timeout to allow for proper initialization
});