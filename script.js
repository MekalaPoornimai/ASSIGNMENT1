// JavaScript code

// Functionality for user registration
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  // Send email data to backend for registration
  console.log('User registered with email:', email);
});

// Functionality for loan request
document.getElementById('request-loan').addEventListener('click', function() {
  // Placeholder function, replace with actual functionality to request loan
  console.log('Loan requested');
  // For demonstration, you can show an alert or update the UI to indicate the loan request
  alert('Loan requested successfully!');
});

// Functionality for loan payment confirmation
document.getElementById('confirm-payment').addEventListener('click', function() {
  // Placeholder function, replace with actual functionality to confirm payment
  console.log('Payment confirmed');
  // For demonstration, you can show an alert or update the UI to indicate payment confirmation
  alert('Payment confirmed successfully!');
});
