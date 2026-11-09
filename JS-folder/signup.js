document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  const message = document.getElementById('signup-message');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();

    if (!firstName || !lastName || !email || !password) {
      message.textContent = 'Please fill in all required fields.';
      message.className = 'form-message error';
      return;
    }

    if (!email.includes('@')) {
      message.textContent = 'Please enter a valid email address.';
      message.className = 'form-message error';
      return;
    }

    if (password.length < 6) {
      message.textContent = 'Password must be at least 6 characters long.';
      message.className = 'form-message error';
      return;
    }

    message.textContent = `Welcome aboard, ${firstName}! Your account is ready.`;
    message.className = 'form-message success';
    window.location.href = './editor.html';
  });
});
