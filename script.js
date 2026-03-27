const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const yearNode = document.querySelector("#year");
const contactForm = document.querySelector(".contact-form");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = contactForm.querySelector("button[type='submit']");
    if (submitButton) {
      submitButton.textContent = "Message Ready to Send";
    }

    const existingMessage = contactForm.querySelector(".form-success");
    if (existingMessage) {
      return;
    }

    const message = document.createElement("p");
    message.className = "form-success";
    message.textContent = "Thank you. Please call the office or use your preferred email service to follow up on your appointment request.";
    contactForm.appendChild(message);
  });
}
