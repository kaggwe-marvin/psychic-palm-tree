/**
 * HTMX Utilities for enhancing the user experience
 */

// Toast notification function for HTMX responses
function showToast(message, type = 'info', duration = 3000) {
  // Create toast element
  const toast = document.createElement('div');
  
  // Set classes based on type
  const baseClasses = 'fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg transform transition-all duration-300 z-50';
  let typeClasses = '';
  
  switch (type) {
    case 'success':
      typeClasses = 'bg-green-500 text-white';
      break;
    case 'error':
      typeClasses = 'bg-red-500 text-white';
      break;
    case 'warning':
      typeClasses = 'bg-yellow-500 text-white';
      break;
    case 'info':
    default:
      typeClasses = 'bg-blue-500 text-white';
  }
  
  toast.className = `${baseClasses} ${typeClasses}`;
  toast.innerText = message;
  
  // Add to the document
  document.body.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.classList.add('translate-y-0', 'opacity-100');
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);
  
  // Remove after duration
  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
    
    // Remove from DOM after animation completes
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, duration);
}

// Make functions available in global scope for HTMX event handlers
window.showToast = showToast;

// Initialize HTMX extension for response handling
document.addEventListener('DOMContentLoaded', () => {
  // Add global HTMX event handlers
  htmx.on('htmx:afterRequest', (event) => {
    // You can add global handling here if needed
  });
  
  htmx.on('htmx:responseError', (event) => {
    // Default error handling if not handled by specific elements
    const status = event.detail.xhr.status;
    if (status >= 400) {
      showToast(`Error: ${status} - ${event.detail.xhr.statusText}`, 'error');
    }
  });
});
