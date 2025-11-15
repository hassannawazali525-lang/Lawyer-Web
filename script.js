// script.js

// 🔹 Highlight active nav link
document.querySelectorAll("nav ul li a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// 🔹 Smooth scroll for internal links (#sections)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 🔹 Simple form validation (for Contact page)
const form = document.querySelector(".contact-form form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Thank you! Your message has been submitted.");
    form.reset();
  });
}

// 🔹 Team Page: Show bio popup (example)
const teamCards = document.querySelectorAll(".team-card");
teamCards.forEach(card => {
  card.addEventListener("click", () => {
    const name = card.querySelector("h3").textContent;
    alert(`👨‍⚖️ More info about ${name} coming soon...`);
  });
});

// 🔹 Services Page: Toggle details
const serviceItems = document.querySelectorAll(".service-item h3");
serviceItems.forEach(item => {
  item.addEventListener("click", () => {
    const details = item.nextElementSibling;
    details.style.display = details.style.display === "block" ? "none" : "block";
  });
});
// script.js

// Create modal dynamically
const modal = document.createElement("div");
modal.id = "teamModal";
modal.className = "modal";
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2 id="modalName"></h2>
    <p id="modalRole"></p>
    <p id="modalBio"></p>
  </div>
`;
document.body.appendChild(modal);

const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalBio = document.getElementById("modalBio");
const closeModal = modal.querySelector(".close");

// Grab team cards
const teamCards = document.querySelectorAll(".team-card");

// Add click events
teamCards.forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalName.textContent = card.querySelector("h3").textContent;
    modalRole.textContent = card.querySelector(".role").textContent;
    modalBio.textContent = card.querySelectorAll("p")[1].textContent;
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
