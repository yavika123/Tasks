document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Clear existing error messages
    document.querySelectorAll('.error-message').forEach(error => error.style.display = 'none');
    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    let isValid = true;
    // Username validation
    if (username.length < 3) {
      document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
      document.getElementById('usernameError').style.display = 'block';
      isValid = false;
    }
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    }
    // Password validation
    if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
      document.getElementById('passwordError').style.display = 'block';
      isValid = false;
    }
    // Confirm Password validation
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
      document.getElementById('confirmPasswordError').style.display = 'block';
      isValid = false;
    }
    // If valid, submit the form or display a success message
    if (isValid) {
      alert('Form submitted successfully!');
      this.reset(); // Optionally reset the form
    }
  });
  