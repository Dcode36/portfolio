function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to update the active navigation link based on the current section
  function updateActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');

    for (const link of navLinks) {
      const section = document.querySelector(link.getAttribute('href'));
      if (isElementInViewport(section)) {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
        break; // Stop checking the rest of the links once an active link is found
      }
    }
  }

  // Event listener for scrolling
  window.addEventListener('scroll', updateActiveLink);

  // Event listener for click on navigation links (scroll to section)
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      // Check if the link is not the "about" section link
      if (link.getAttribute('href').startsWith('#')) {
        event.preventDefault();

        const targetSectionId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }

      navLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });

var typed = new Typed('.input', {
    strings: ["Developer.", "Designer.", "Freelancer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});



