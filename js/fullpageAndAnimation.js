const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

let headerHeight = ''

if (width >= 768) {
  // window width is at least 768px
  headerHeight = '80px'
} else {
  // window width is less than 768px
  headerHeight = '3rem'
}

var myFullpage = new fullpage('#fullpage', {
  //Navigation
  menu: '#menu',
  lockAnchors: false,
  anchors: ['home', 'about', 'portfolio', 'skills', 'contact', 'footer'],
  navigation: false,
  navigationPosition: 'right',
  navigationTooltips: [],
  showActiveTooltip: false,
  slidesNavigation: false,
  slidesNavPosition: 'bottom',

  //Scrolling
  css3: true,
  scrollingSpeed: 1000,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: true,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: '#element1, .element2',
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: false,
  recordHistory: false,

  //Design
  paddingTop: headerHeight,
  controlArrows: false,
  verticalCentered: true,
  sectionsColor: [],
  fixedElements: '#header, .footer',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallax: false,
  parallaxOptions: {
    type: 'reveal',
    percentage: 62,
    property: 'translate',
  },
  cards: false,
  cardsOptions: {
    perspective: 100,
    fadeContent: true,
    fadeBackground: true,
  },

  //Custom selectors
  sectionSelector: '.section',
  slideSelector: '.slide',

  lazyLoading: true,

  //events
  onLeave: function (origin, destination, direction) {
    const header = document.getElementById('header')
    var leavingSection = this

    //after leaving section 2
    if (origin.index === 0 && direction === 'down') {
      header.classList.add('scroll-header')
    } else if (destination.index === 0 && direction === 'up') {
      header.classList.remove('scroll-header')
    }
  },
  afterLoad: function (origin, destination, direction) { },
  afterRender: function () {
    var gsap = new TimelineMax().timeScale(1)
    /* GSAP ANIMATIONS */
    gsap.from('.home__img', {
      opacity: 0,
      duration: 1,
      /* delay: 0.5, */
      x: 60,
    })

    gsap.from('.home__data', {
      opacity: 0,
      duration: 1,
      /* delay: 0.8, */
      y: 25,
    })

    gsap.from('.home__title, home__button', {
      opacity: 0,
      duration: 1,
      /* delay: 1, */
      y: 25,
      ease: 'expo.out',
      stagger: 0.2,
    })

    gsap.from('.nav__logo, .nav__toggle', {
      opacity: 0,
      duration: 1,
      /* delay: 1.5, */
      y: 25,
      ease: 'expo.out',
      stagger: 0.2,
    })

    gsap.from('.nav__item', {
      opacity: 0,
      duration: 1,
      /* delay: 1.8, */
      y: 25,
      ease: 'expo.out',
      stagger: 0.2,
    })

    gsap.from('.home__social-icon', {
      opacity: 0,
      duration: 1,
      /* delay: 2.3, */
      y: 25,
      ease: 'expo.out',
      stagger: 0.2,
    })

    gsap.from('.home__scroll-icon', {
      opacity: 0,
      duration: 1,
      /* delay: 2.8, */
      ease: 'expo.out',
    })

    gsap.from('.home__scroll-icon', {
      duration: 4,
      /* delay: 8, */
      y: 50,
      repeat: -1,
    })
  },
  afterResize: function (width, height) { },
  afterReBuild: function () { },
  afterResponsive: function (isResponsive) { },
  afterSlideLoad: function (section, origin, destination, direction) { },
  onSlideLeave: function (section, origin, destination, direction) { },
})
