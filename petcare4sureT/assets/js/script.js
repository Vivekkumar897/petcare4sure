
/**
 * Add event listener on element(s)
 * @param {NodeList|Element} elem - The element or list of elements to add the event listener to.
 * @param {string} type - The type of event to listen for.
 * @param {function} callback - The function to call when the event is triggered.
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * Navbar toggle functionality
 */
const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * Active header when window scrolls down to 100px
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeElemOnScroll);

/**
 * Speak welcome message on page load
 */
const userButton = document.querySelector('.action-btn.user');
const speakWelcomeMessage = function () {
  if ('speechSynthesis' in window) {
    const text = "Welcome to petcare4sure! Your pet, our passion.";
    const utterance = new SpeechSynthesisUtterance(text);

    // Optionally set more properties on the utterance
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;

    // Speak the utterance
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("Speech Synthesis not supported in this browser.");
  }
};

addEventOnElem(userButton, 'click', speakWelcomeMessage);

const loginLink = document.querySelector('.navbar-action-btn');
const speakWelcomeMessages = function () {
  if ('speechSynthesis' in window) {
    const text = "Welcome to petcare4sure! Your pet, our passion.";
    const utterance = new SpeechSynthesisUtterance(text);

    // Optionally set more properties on the utterance
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;

    // Speak the utterance
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("Speech Synthesis not supported in this browser.");
  }
};

addEventOnElem(loginLink, 'click', speakWelcomeMessages);