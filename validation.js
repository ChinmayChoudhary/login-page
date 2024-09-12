// Form elements and error message
const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');
const remember_me = document.getElementById('remember-me');
const toggle_password = document.getElementById('toggle-password');

// Event listener for form submission
form.addEventListener('submit', (e) => {
  let errors = [];

  if (firstname_input) {
    errors = getSignupFormErrors(
      firstname_input.value,
      email_input.value,
      password_input.value,
      repeat_password_input.value
    );
  } else {
    errors = getLoginFormErrors(email_input.value, password_input.value);
  }

  if (errors.length > 0) {
    e.preventDefault();
    error_message.innerText = errors.join('. ');
  } else {
    if (remember_me && remember_me.checked) {
      localStorage.setItem('rememberedEmail', email_input.value);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
    // Redirect to welcome page after successful login
    window.location.href = 'welcome.html';
  }
});

// Show or hide password on eye icon click
toggle_password.addEventListener('click', () => {
  if (password_input.type === 'password') {
    password_input.type = 'text';
    toggle_password.innerHTML = '&#128065;';
  } else {
    password_input.type = 'password';
    toggle_password.innerHTML = '&#128065;';
  }
});

// Function to validate signup form
function getSignupFormErrors(firstname, email, password, repeatPassword) {
  let errors = [];

  if (firstname === '' || firstname == null) {
    errors.push('Firstname is required');
    firstname_input.parentElement.classList.add('incorrect');
  }
  if (email === '' || email == null) {
    errors.push('Email is required');
    email_input.parentElement.classList.add('incorrect');
  }
  if (password === '' || password == null) {
    errors.push('Password is required');
    password_input.parentElement.classList.add('incorrect');
  }
  if (password.length < 8) {
    errors.push('Password must have at least 8 characters');
    password_input.parentElement.classList.add('incorrect');
  }
  if (password !== repeatPassword) {
    errors.push('Password does not match repeated password');
    password_input.parentElement.classList.add('incorrect');
    repeat_password_input.parentElement.classList.add('incorrect');
  }

  return errors;
}

// Function to validate login form
function getLoginFormErrors(email, password) {
  let errors = [];

  if (email === '' || email == null) {
    errors.push('Email is required');
    email_input.parentElement.classList.add('incorrect');
  }
  if (password === '' || password == null) {
    errors.push('Password is required');
    password_input.parentElement.classList.add('incorrect');
  }

  return errors;
}

// Reset error styling when user corrects input
const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null);

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.parentElement.classList.contains('incorrect')) {
      input.parentElement.classList.remove('incorrect');
      error_message.innerText = '';
    }
  });
});

// Load remembered email if available
window.addEventListener('DOMContentLoaded', () => {
  const rememberedEmail = localStorage.getItem('rememberedEmail');
  if (rememberedEmail) {
    email_input.value = rememberedEmail;
    remember_me.checked = true;
  }
});
