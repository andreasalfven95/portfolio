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

var videoAttr = { autoplay: true, loop: true, mute: true, playsinline: true }
var imgMP4s = Array.prototype.map.call(
  document.querySelectorAll('img[src*=".mp4"]'),
  function (img) {
    var src = img.src
    img.src = null

    img.addEventListener('error', function (e) {
      console.log('MP4 in image not supported. Replacing with video', e)
      var video = document.createElement('video')

      for (var key in videoAttr) {
        video.setAttribute(key, videoAttr[key])
      }

      for (
        var imgAttr = img.attributes, len = imgAttr.length, i = 0;
        i < len;
        i++
      ) {
        video.setAttribute(imgAttr[i].name, imgAttr[i].value)
      }

      img.parentNode.insertBefore(video, img)
      img.parentNode.removeChild(img)
    })

    img.src = src
  }
)

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
