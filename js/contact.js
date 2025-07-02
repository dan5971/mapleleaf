// footer slideUp transition 

document.addEventListener("DOMContentLoaded", () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1  // 10% visible triggers
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class when element enters viewport
        entry.target.classList.add('animate-slide-up');
      } else {
        // Remove animation class when element leaves viewport
        entry.target.classList.remove('animate-slide-up');
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  document.querySelectorAll('.footer-b-top, .footer-b-bottom').forEach(el => {
    observer.observe(el);
  });
});


