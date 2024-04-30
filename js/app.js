/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
  sections.forEach(function(section) {
    const navItem = document.createElement('li');
    navItem.innerHTML = `<a class="nav__link menu__link" href="#${section.id}" id="navli"> ${section.dataset.nav}</a>`;
    navbar.appendChild(navItem);  
  });

}


// Add class 'active' to section when near top of viewport
function setActiveSection() {
  const navbarLinks = document.querySelectorAll('#navli');
  sections.forEach(function(section) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >=150) {
      section.classList.add('active');
      navbarLinks.forEach(function(link) {
        if (link.getAttribute('href').slice(1) === section.id) {
          link.classList.add('active__link');
        } else {
          link.classList.remove('active__link');
        }
      });
    } else {
      section.classList.remove('active');
    }
  });
}


// Add event listener to listen for scroll events
window.addEventListener('scroll', setActiveSection);

// Call buildNav to generate navigation menu
buildNav();

/**
 * End Main Functions
 * Begin Events
 * 
*/
