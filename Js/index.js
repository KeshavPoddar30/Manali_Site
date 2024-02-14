const checkInInput = document.getElementById('check-in');
const checkOutInput = document.getElementById('check-out');

// Function to calculate the number of days between two dates
function calculateStayDuration() {
  const checkInDate = new Date(checkInInput.value);
  const checkOutDate = new Date(checkOutInput.value);
  
  // Calculate the difference in milliseconds
  const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
  
  // Convert the difference to days
  const numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
  
  // Display the result in the total-days input
  const totalDaysInput = document.getElementById('total-days');
  totalDaysInput.value = numberOfDays;
}

// Event listeners to trigger the calculation when dates are changed
checkInInput.addEventListener('change', calculateStayDuration);
checkOutInput.addEventListener('change', calculateStayDuration);