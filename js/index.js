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

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50

    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

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
const mixer = mixitup(".portfolio__container", {
  selectors: {
    target: '.portfolio__content'
  },
  animation: {
    duration: 400
  }
});

/* LINK ACTIVE PORTFOLIO */
const linkPortfolio = document.querySelectorAll(".portfolio__item")

function activePortfolio() {
  if (linkPortfolio) {
    linkPortfolio.forEach(l => l.classList.remove("active-portfolio"))
    this.classList.add("active-portfolio")
  }
}
linkPortfolio.forEach(l => l.addEventListener("click", activePortfolio))

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
  }
})

/* SCROLL REVEAL ANIMATION */

/* SCROLL HOME */

/* SCROLL ABOUT */

/* SCROLL SKILLS */

/* SCROLL WORK */

/* SCROLL CONTACT */
