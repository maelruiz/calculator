// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the display element
    var display = document.querySelector('input[name="display"]');
  
    // Get all the calculator buttons
    var buttons = document.querySelectorAll('.calculator input[type="button"]');
  
    // Add click event listeners to each button
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Get the clicked button's value
        var buttonValue = this.value;
  
        // Handle different button actions
        switch (buttonValue) {
          case 'AC': // Clear the display
            display.value = '';
            break;
          case 'DE': // Delete the last character
            display.value = display.value.slice(0, -1);
            break;
          case '=': // Evaluate the expression
            try {
              display.value = eval(display.value);
            } catch (error) {
              display.value = 'Error';
            }
            break;
          default: // Append the clicked button's value to the display
            display.value += buttonValue;
        }
      });
    });
  });
  