// hamburgur navbar

const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');
const navActions = document.getElementById('navActions');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navActions.classList.toggle('active');
});


// logic for FAQ section

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const icon = item.querySelector('.faq-icon');

    question.addEventListener('click', () => {
       
        // jb ek faq open ho to dusra bnd hojay
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-icon').textContent = '+';
            }
        });

        // Current item ko toggle 
        item.classList.toggle('active');
        
        // Icon change logic 
        if (item.classList.contains('active')) {
            icon.textContent = '—';
        } else {
            icon.textContent = '+';
        }
    });
});