// Scroll to section when a navigation link is clicked
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(e.target.hash);
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
// IMAGE SLIDE SHOW
    var slideIndex = 0;
    slideshow();

    function slideshow() {
      var i;
      var slides = document.getElementsByClassName("slide");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(slideshow, 3000); // Change slide every 3 seconds
    }

    // Login form submission
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Perform login validation here
      if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        loginForm.reset();
      } else {
        alert('Invalid username or password. Please try again.');
      }
    });
  });
  