document.getElementById('paymentForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const cardNumber = document.getElementById('cardNumber').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const cvv = document.getElementById('cvv').value;

  const statusMessage = document.getElementById('statusMessage');

  // Simple validation
  if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
    statusMessage.textContent = "Invalid card number. Must be 16 digits.";
    return;
  }

  if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
    statusMessage.textContent = "Invalid CVV. Must be 3 digits.";
    return;
  }

  // Simulate verification
  statusMessage.textContent = "Payment verified successfully!";
  statusMessage.style.color = "#28a745";
});