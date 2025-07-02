const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

function openNavbar() {
  navbar.classList.toggle('active');
}

function closeNavbar() {
  navbar.classList.remove('active');
}

hamburger.addEventListener('click', openNavbar);
menu.addEventListener('click', openNavbar);
closeBtn.addEventListener('click', closeNavbar);

// Close navbar if clicking outside
document.addEventListener('click', function(event) {
  const isClickInsideNavbar = navbar.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);
  const isClickOnMenu = menu.contains(event.target);

  if (!isClickInsideNavbar && !isClickOnHamburger && !isClickOnMenu) {
    closeNavbar();
  }
});
/*
const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');
const dtNavLinks = document.querySelectorAll('.dt-a');

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage || (currentPage
  === '/' && link.getAttribute('href') === 'index.html')) {
    link.classList.add('active-page');
  }
});
dtNavLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage || (currentPage
  === '/' && link.getAttribute('href') === 'index.html')) {
    link.classList.add('active');
  }
}); 

const currentPage = window.location.pathname;

// Highlight nav links
document.querySelectorAll('.dt-a').forEach(link => {
  const href = link.getAttribute('href');

  if (
    href === currentPage ||
    (currentPage === '/' && href === 'index.html') ||
    (currentPage === '/index.html' && href === '/')
  ) {
    link.classList.add('active-page');

    // Optionally, also add class to the parent <li> if it's a dt-navlink
    const parentLi = link.closest('.dt-a');
    if (parentLi) {
      parentLi.classList.add('active');
    }
  }
}); */

const currentPath = window.location.pathname.replace(/^\/+/, '');

  document.querySelectorAll('.dt-a, .navlink').forEach(link => {
    const linkPath = link.getAttribute('href').replace(/^\/+/, '');

    if (
      linkPath === currentPath ||
      (currentPath === '' && (linkPath === 'index.html' || linkPath === './'))
    ) {
      link.classList.add('active-link', 'active');

      // Optional: highlight parent <li> as well
      const parentLi = link.closest('li');
      if (parentLi) {
        parentLi.classList.add('active-li');
      }
    }
  });

  // Navbar scroll feature 
 

let lastScrollY = window.scrollY;
const header = document.getElementById('header');
let threshold = window.innerHeight;
const scrollDelta = 10;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < threshold) {
    header.classList.remove('hide');
    lastScrollY = currentScrollY;
    return;
  }

  if (Math.abs(currentScrollY - lastScrollY) < scrollDelta) {
    return;
  }

  if (currentScrollY < lastScrollY) {
    // Scrolling up - show header
    header.classList.remove('hide')
  } else {
    header.classList.add('hide');
  }

  lastScrollY = currentScrollY;
})



window.addEventListener('resize', () => {
  threshold = window.innerHeight;
})  

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      //  observer.unobserve(entry.target); // optional: only run once
      } else {
        entry.target.classList.remove('in-view');    
      }
    });
  },
  {
    threshold: 0.1
  }
);

const target = document.querySelector('.about-img');
if (target) {
  observer.observe(target);
}

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        // Element is out of view — remove the class so it can animate again
        entry.target.classList.remove('visible');  
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-from-left, .animate-from-right').forEach(el => {
    observer.observe(el);
  });
});

// Testimonials slider 
/*
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll('.testimonial');
  let index = 0;

  setInterval(() => {
    testimonials[index].classList.remove('active');

    index = (index + 1) % testimonials.length;

    testimonials[index].classList.add('active');
  }, 5000); // every 5 seconds
}); 
 */

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll('.testimonial');
  const leftBtn = document.querySelector('.left-chevron');
  const rightBtn = document.querySelector('.right-chevron');
  let index = 0;
  let intervalId;

  function showTestimonial(i) {
    testimonials.forEach(t => t.classList.remove('active'));
    testimonials[i].classList.add('active');
  }

  function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }

  function prevTestimonial() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  }

  // Auto-rotate every 5 seconds
  intervalId = setInterval(nextTestimonial, 7000);

  // Handle manual clicks
  rightBtn.addEventListener('click', () => {
    nextTestimonial();
    resetInterval();
  });

  leftBtn.addEventListener('click', () => {
    prevTestimonial();
    resetInterval();
  });

  // Reset auto-rotation timer on manual interaction
  function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextTestimonial, 5000);
  }
});

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


