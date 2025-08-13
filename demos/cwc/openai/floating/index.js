function showError(message) {
    const errorContainer = document.getElementById('error-container');
    errorContainer.innerHTML = `<div class="error">${message}</div>`;
}

// Initialize chat panel UI controls
function initializeChatControls() {
    const chatToggle = document.getElementById("chatToggle");
    const chatContainer = document.getElementById("chatContainer");

    chatToggle.addEventListener("click", () => {
    chatContainer.classList.add("open");
    chatToggle.classList.add("hide");
    });

    // Close chat when clicking outside the container
    document.addEventListener("click", (event) => {
        if (!chatContainer.contains(event.target) && !chatToggle.contains(event.target) && chatContainer.classList.contains("open")) {
            chatContainer.classList.remove("open");
            chatToggle.classList.remove("hide");
        }
    });
}

// Trigger initialization when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // initializeApp();
        initializeChatControls();
    }, 10);
    setTimeout(() => {
        const iframe = document.getElementById("agentforce-messaging-frame");
        if (iframe) {
            iframe.style["position"] = "relative";
            iframe.style["top"] = "0";
            iframe.style["left"] = "0";
            iframe.style["height"] = "600px"; 
            iframe.style["width"] = "516px";
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
            messaging.style["min-height"] = "600px"; 
            messaging.style["border-radius"] = "16px";
            messaging.style["margin"] = "0";
            messaging.style["padding"] = "0";
            messaging.style["transform"] = "none";
            messaging.style["overflow"] = "visible";
        }
        document.getElementById('cwc-shell').appendChild(document.getElementById('agentforce-messaging'));
      }, 10);
});