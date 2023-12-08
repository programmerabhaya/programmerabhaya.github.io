// Function to show the preloader based on network speed
function showPreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'block';
  
    // Check if the Network Information API is supported
    if ('connection' in navigator) {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
      // Calculate the time to display the preloader based on the effective connection type
      const speed = connection.effectiveType;
      let displayTime = 2000; // Default display time in milliseconds
  
      switch (speed) {
        case '4g':
          displayTime = 1500; // Adjust this value for 4G speed
          break;
        case '3g':
          displayTime = 2500; // Adjust this value for 3G speed
          break;
        // Add more cases for different connection types if needed
        default:
          displayTime = 2000; // Default value
          break;
      }
  
      // Hide the preloader after the calculated display time
      setTimeout(function() {
        preloader.style.display = 'none';
      }, displayTime);
    } else {
      // If the Network Information API is not supported, hide the preloader after a default time
      setTimeout(function() {
        preloader.style.display = 'none';
      }, 2000);
    }
  }
  
  // Call the showPreloader function when the window finishes loading
  window.onload = function() {
    showPreloader();
  };