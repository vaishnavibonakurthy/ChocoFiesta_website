// Accessing DOM elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Form submission event listener
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  
  // Validate form inputs
  if (validateForm()) {
    // Send form data to the server (you can customize this part as per your needs)
    sendFormData();
  }
});

// Form validation function
function validateForm() {
  let isValid = true;
  
  // Validate name input
  if (nameInput.value.trim() === '') {
    isValid = false;
    nameInput.classList.add('error');
  } else {
    nameInput.classList.remove('error');
  }
  
  // Validate email input
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(emailInput.value)) {
    isValid = false;
    emailInput.classList.add('error');
  } else {
    emailInput.classList.remove('error');
  }
  
  // Validate message input
  if (messageInput.value.trim() === '') {
    isValid = false;
    messageInput.classList.add('error');
  } else {
    messageInput.classList.remove('error');
  }
  
  return isValid;
}

// Function to send form data to the server
function sendFormData() {
  // You can customize this part to send form data to your server using AJAX or any other method
  
  // Display success message or perform further actions
  alert('Form submitted successfully!');
}
