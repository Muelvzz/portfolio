const observerOptions = {
  root: null,
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const pageElements = document.querySelectorAll('.page');
pageElements.forEach(element => {
  observer.observe(element);
});