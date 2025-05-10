document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("active");
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navList.classList.remove("active");
    });
  });

  // Newsletter Form Validation
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector("input").value;
      if (email.includes("@")) {
        alert("Thanks for subscribing!");
        this.reset();
      } else {
        alert("Please enter a valid email address");
      }
    });
  }

  // Contact Form Validation
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      // Reset error messages
      document.querySelectorAll(".error-message").forEach((el) => {
        el.textContent = "";
      });

      // Validate name
      if (nameInput.value.trim() === "") {
        nameInput.nextElementSibling.textContent = "Name is required";
        isValid = false;
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() === "") {
        emailInput.nextElementSibling.textContent = "Email is required";
        isValid = false;
      } else if (!emailRegex.test(emailInput.value)) {
        emailInput.nextElementSibling.textContent =
          "Please enter a valid email";
        isValid = false;
      }

      // Validate message
      if (messageInput.value.trim() === "") {
        messageInput.nextElementSibling.textContent = "Message is required";
        isValid = false;
      }

      if (isValid) {
        contactForm.style.display = "none";
        document.getElementById("form-success").style.display = "block";
        contactForm.reset();
      }
    });
  }

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll(".faq-question");
  if (faqQuestions.length > 0) {
    faqQuestions.forEach((question) => {
      question.addEventListener("click", function () {
        this.classList.toggle("active");
        const answer = this.nextElementSibling;

        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
