document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.template-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.textContent.trim().toLowerCase();

      filterButtons.forEach((item) => item.classList.toggle('active', item === button));

      cards.forEach((card) => {
        const visible = category === 'all' || card.dataset.category === category;
        card.style.display = visible ? 'block' : 'none';
      });
    });
  });
});
