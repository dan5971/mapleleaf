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

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < threshold) {
    header.classList.remove('hide');
    lastScrollY = currentScrollY;
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











