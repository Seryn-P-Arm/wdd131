// Get the current year
const currentYear = new Date().getFullYear();

// Update the first paragraph in the footer with the current year
document.getElementById("currentyear").textContent = currentYear;

// Get the document's last modified date
const lastModified = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("main img");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // Stop observing once loaded
            }
        });
    }, { threshold: 0.1 });

    images.forEach(img => observer.observe(img));

    // Update Footer Info
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});