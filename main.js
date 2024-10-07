const navToggle = document.querySelector('.mobile-nav-toggle');
const iconClose = document.querySelector('.close-icon');
const iconMenu = document.querySelector('.menu-icon');
const primaryNav = document.querySelector('.primary-navigation');
const primaryHeader = document.querySelector('.primary-header');

navToggle.addEventListener('click', ()=> {
  primaryNav.hasAttribute("data-visible")
  ? navToggle.setAttribute("aria-expanded", false)
  : navToggle.setAttribute("aria-expanded", true);

  hideMobileMenu();  
});

function hideMobileMenu () {
  primaryNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay');
  iconClose.toggleAttribute('icon-visible');
  iconMenu.toggleAttribute('icon-hidden');
}
// Function to smoothly scroll to a target element
function scrollToElement(targetElement) {  
  
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });
}

const srcElements = document.querySelectorAll('.btnCta');

srcElements.forEach((element) => {  
  element.addEventListener('click', (event) => {
    
    event.preventDefault(); // Prevent the default behavior of anchor tags                
    
    let targetId;

    if (element.nodeName === 'A') {     
      var computedStyle = window.getComputedStyle(navToggle);

      var displayValue = computedStyle.getPropertyValue('display');

      if(displayValue === 'block') {
        hideMobileMenu();
      }
       
      // Get the target ID from the href attribute
      targetId = element.getAttribute('href').slice(1);
    } else {
      targetId = 'kontakt';
    }

    // Select the target element using its ID
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      scrollToElement(targetElement);
    }
  });
});


// Slider
const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  dots: false,
  slidesToShow: 1,
  responsive: {
    800: {
      slidesToShow: 2,
      arrows: true
    }
  }  
  // arrows: false,
  
});

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var menuButton = document.querySelector('[data-type="menu-cta"]');
  var logo = document.querySelector('.logo');

  if (window.scrollY > 50) {
    header.classList.add('sticking');
    menuButton.classList.add('menu-cta');
    logo.classList.add('logo-sticking');
  } else {
    header.classList.remove('sticking');
    menuButton.classList.remove('menu-cta');
    logo.classList.remove('logo-sticking');
  }
});
// const scrollWatcher = document.createElement("div");

// scrollWatcher.setAttribute("data-scroll-watcher", "");
// primaryHeader.before(scrollWatcher);

// const navObserver = new IntersectionObserver(
//   (entries) => {
//     primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
//   },
//   { rootMargin: "50px 0px 0px 0px" }
// );

// navObserver.observe(scrollWatcher);
