// Floating menu configuration
const menuConfig = {
  orderInquiry: {
    label: 'Order Inquiry',
    message: 'Where is my order?'
  },
  productInquiry: {
    label: 'Product Inquiry', 
    message: 'Will it fit in my space?'
  },
  deliveryInquiry: {
    label: 'Delivery Inquiry',
    message: 'What will the team do when they deliver my appliance?'
  }
};

// Floating menu functions
function toggleMenu() {
  const menuItems = document.getElementById('menuItems');
  menuItems.classList.toggle('show');
}

function sendMessage(key) {
  if (menuConfig[key] && menuConfig[key].message) {
    agentforce_messaging.util.sendTextMessage(menuConfig[key].message);
  }
}

// Initialize menu when DOM is loaded
function initFloatingMenu() {
  const menuItemsContainer = document.getElementById('menuItems');
  if (!menuItemsContainer) return;
  
  // Clear existing content
  menuItemsContainer.innerHTML = '';
  
  // Generate buttons from config
  Object.keys(menuConfig).forEach(key => {
    const button = document.createElement('button');
    button.className = 'menu-btn';
    button.textContent = menuConfig[key].label;
    button.onclick = () => sendMessage(key);
    menuItemsContainer.appendChild(button);
  });
}

// Auto-initialize when script loads
document.addEventListener('DOMContentLoaded', initFloatingMenu);
