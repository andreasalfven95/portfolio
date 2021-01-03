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
  /* //Active link
  navLink.forEach((n) => n.classList.remove('active-link'))
  this.classList.add('active-link') */

  //Remove mobile menu
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

/* CHANGE HEADER BACKGROUND */
function scrollHeader() {
  const header = document.getElementById('header')
  if (this.scrollY >= 200) {
    header.classList.add('scroll-header')
  } else {
    header.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)

/* MIXITUP FILTER PORTFOLIO */
const mixer = mixitup('.portfolio__container', {
  selectors: {
    target: '.portfolio__content',
  },
  animation: {
    duration: 400,
  },
})

/* LINK ACTIVE PORTFOLIO */
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio() {
  if (linkPortfolio) {
    linkPortfolio.forEach((l) => l.classList.remove('active-portfolio'))
    this.classList.add('active-portfolio')
  }
}
linkPortfolio.forEach((l) => l.addEventListener('click', activePortfolio))

/* SWIPER CAROUSEL */
const mySwiper = new Swiper('.testimonial__container', {
  // Optional parameters
  spaceBetween: 16,
  loop: true,
  grabCursor: true,

  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})

/* GSAP ANIMATIONS */
gsap.from('.home__img', {
  opacity: 0,
  duration: 2,
  delay: 0.5,
  x: 60,
})

gsap.from('.home__data', {
  opacity: 0,
  duration: 2,
  delay: 0.8,
  y: 25,
})

gsap.from('.home__title, home__button', {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2,
})

gsap.from('.nav__logo, .nav__toggle', {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2,
})

gsap.from('.nav__item', {
  opacity: 0,
  duration: 2,
  delay: 1.8,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2,
})

gsap.from('.home__social-icon', {
  opacity: 0,
  duration: 2,
  delay: 2.3,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2,
})

gsap.from('.home__scroll-icon', {
  opacity: 0,
  duration: 2,
  delay: 2.8,
  ease: 'expo.out',
})

gsap.from('.home__scroll-icon', {
  duration: 4,
  delay: 8,
  y: 50,
  repeat: -1,
})

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
sr.reveal('.about', {})
sr.reveal('.about__img', { delay: 400 })
sr.reveal('.about__container', { delay: 200 })

/* SCROLL PORTFOLIO */
sr.reveal('.portfolio', {})
sr.reveal('.portfolio__nav', { delay: 200 })
sr.reveal('.portfolio__content', { interval: 400 })

/* SCROLL SKILLS */
sr.reveal('.skills', {})
sr.reveal('.skills__content', { interval: 400 })

/* SCROLL CONTACT */
sr.reveal('.contact', {})
sr.reveal('.contact__input', { interval: 400 })
