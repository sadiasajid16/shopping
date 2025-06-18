document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    const cards = document.querySelectorAll('.product-card');
    let anyVisible = false;

    cards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.parentElement.style.display = 'block';
        anyVisible = true;
      } else {
        card.parentElement.style.display = 'none';
      }
    });

    const message = document.querySelector('.no-product-message');
    if (!anyVisible) {
      message.classList.remove('d-none');
    } else {
      message.classList.add('d-none');
    }

    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});





 document.addEventListener("DOMContentLoaded", function () {
  const scroller = document.querySelector('.card-scroller');
  const card = document.querySelector('.product-card-container');
  if (!scroller || !card) return;

  const cardWidth = card.offsetWidth + 16;

  document.querySelector('.product-left-arrow').addEventListener('click', () => {
    scroller.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  document.querySelector('.product-right-arrow').addEventListener('click', () => {
    scroller.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scroller = document.querySelector('.testimonials-scroller');
  const card = document.querySelector('.testimonial-card');
  if (!scroller || !card) return;

  const cardWidth = card.offsetWidth + 16;

  document.querySelector('.testimonial-left-arrow').addEventListener('click', () => {
    scroller.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  document.querySelector('.testimonial-right-arrow').addEventListener('click', () => {
    scroller.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });
});
