////////////////////////////////////////////
// Elements
const mobileNavIconContainer = document.querySelector(`.mobile-nav`);
const expandMenuIcon =
  mobileNavIconContainer.querySelector(`.mobile-nav-expand`);
const collapseMenuIcon =
  mobileNavIconContainer.querySelector(`.mobile-nav-collapse`);
const navbar = document.querySelector(`.nav-bar`);

////////////////////////////////////////////
// Functions
/**
 * Shows mobile nav menu by adding a class to the navbar. Hides the hamburger menu icon and shows the "close" icon.
 */
const showMenu = function () {
  expandMenuIcon.classList.add(`js--hidden`);
  collapseMenuIcon.classList.remove(`js--hidden`);
  navbar.classList.add(`js--nav-bar--expand`);
};

/**
 * Hides mobile nav menu by removing a class from the navbar. Shows the hamburger menu icon and hides the "close" icon.
 */
const hideMenu = function () {
  expandMenuIcon.classList.remove(`js--hidden`);
  collapseMenuIcon.classList.add(`js--hidden`);
  navbar.classList.remove(`js--nav-bar--expand`);
};

////////////////////////////////////////////
// Event Listeners
// Mobile Nav Icon
mobileNavIconContainer.addEventListener(`click`, function () {
  const menuExpanded = navbar.classList.contains(`js--nav-bar--expand`);
  console.log(menuExpanded);
  if (menuExpanded) {
    hideMenu();
  } else {
    showMenu();
  }
});

// Navbar
navbar.addEventListener(`click`, function (e) {
  if (
    !e.target.classList.contains(`nav-link`) &&
    !e.target.parentElement.classList.contains(`nav-link`)
  )
    return;
  hideMenu();
});
