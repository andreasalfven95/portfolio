/* MENU SHOW */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

/* ACTIVE AND REMOVE MENU */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  //Remove mobile menu
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

/* SCROLL REVEAL ANIMATION */
/* const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
}) */

/* SCROLL HOME */
/* sr.reveal('.home__title', {})
sr.reveal('.home__button', { delay: 200 })
sr.reveal('.home__img', { delay: 400 })
sr.reveal('.home__social-icon', { interval: 200 }) */

/* SCROLL ABOUT */
/* sr.reveal('.about', {})
sr.reveal('.about__img', { delay: 400 })
sr.reveal('.about__container', { delay: 200 }) */

/* SCROLL PORTFOLIO */
/* sr.reveal('.portfolio', {})
sr.reveal('.portfolio__nav', { delay: 200 })
sr.reveal('.portfolio__content', { interval: 400 }) */

/* SCROLL SKILLS */
/* sr.reveal('.skills', {})
sr.reveal('.skills__content', { interval: 400 }) */

/* SCROLL CONTACT */
/* sr.reveal('.contact', {})
sr.reveal('.contact__input', { interval: 400 }) */
