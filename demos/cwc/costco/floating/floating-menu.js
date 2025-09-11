// Floating menu functions
function toggleMenu() {
  const menuItems = document.getElementById('menuItems');
  menuItems.classList.toggle('show');
}

function sendMessage(message) {
    agentforce_messaging.util.sendTextMessage(message);
}

// Initialize menu when DOM is loaded
function initFloatingMenu() {
  const menuItemsContainer = document.getElementById('menuItems');
  if (!menuItemsContainer) return;
  
  // Get configuration from the page (fallback to empty array if not defined)
  const config = window.floatingMenuConfig || [];
  
  // Clear existing content
  menuItemsContainer.innerHTML = '';
  
  // Generate buttons from config
  config.forEach((item, index) => {
    if (item.label && item.message) {
      const button = document.createElement('button');
      button.className = 'menu-btn';
      button.textContent = item.label;
      button.onclick = () => sendMessage(item.message);
      menuItemsContainer.appendChild(button);
    }
  });
  
  // If no config provided, show a helpful message
  if (config.length === 0) {
    const placeholder = document.createElement('div');
    placeholder.style.padding = '10px';
    placeholder.style.fontSize = '12px';
    placeholder.style.color = '#666';
    placeholder.textContent = 'No menu items configured';
    menuItemsContainer.appendChild(placeholder);
  }
}

// Auto-initialize when script loads
document.addEventListener('DOMContentLoaded', initFloatingMenu);