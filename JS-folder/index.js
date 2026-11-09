document.addEventListener('DOMContentLoaded', () => {
  const triggerButtons = document.querySelectorAll('.btn-primary, .btn-ghost, .btn-secondary');

  triggerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.blur();
    });
  });
});
