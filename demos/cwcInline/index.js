function showError(message) {
    const errorContainer = document.getElementById('error-container');
    errorContainer.innerHTML = `<div class="error">${message}</div>`;
}

// Trigger initialization when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const iframe = document.getElementById("agentforce-messaging-frame");
        if (iframe) {
            iframe.style["position"] = "relative";
            iframe.style["top"] = "0";
            iframe.style["left"] = "0";
            iframe.style["height"] = "100%"; 
            iframe.style["width"] = "100%";
            iframe.style["box-shadow"] = "none";
            iframe.style["border-radius"] = "16px";
            iframe.style["border"] = "none";
            iframe.style["margin"] = "0";
            iframe.style["padding"] = "0";
            iframe.style["transform"] = "none";
            iframe.style["overflow"] = "visible";
        }
        
        const messaging = document.getElementById('agentforce-messaging');
        if (messaging) {
            messaging.style["position"] = "relative";
            messaging.style["top"] = "0";
            messaging.style["left"] = "0";
            messaging.style["width"] = "100%";
            messaging.style["height"] = "100%"; 
            messaging.style["border-radius"] = "16px";
            messaging.style["margin"] = "0";
            messaging.style["padding"] = "0";
            messaging.style["transform"] = "none";
            messaging.style["overflow"] = "visible";
        }
        const agentforceMessaging = document.getElementById('agentforce-messaging');
        if (agentforceMessaging) {
            document.getElementById('cwc-shell').appendChild(agentforceMessaging);
        }
    }, 10);
});