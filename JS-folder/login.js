document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const message = document.getElementById('login-message');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
      message.textContent = 'Please fill in both email and password.';
      message.className = 'form-message error';
      return;
    }

    if (!email.includes('@')) {
      message.textContent = 'Please enter a valid email address.';
      message.className = 'form-message error';
      return;
    }

    message.textContent = 'Login successful. Redirecting to your dashboard...';
    message.className = 'form-message success';
    window.location.href = './editor.html';
  });
});
