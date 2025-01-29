// Get the current year
const currentYear = new Date().getFullYear();

// Update the first paragraph in the footer with the current year
document.getElementById("currentyear").textContent = currentYear;

// Get the document's last modified date
const lastModified = document.lastModified;

// Update the second paragraph in the footer with the last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// Add animation to header and footer icons
document.querySelectorAll(".header-icon, .footer-icon").forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        icon.style.transition = "transform 0.3s ease-in-out";
        icon.style.transform = "translateY(-10px)";
    });
    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "translateY(0)";
    });
});

// Add animation to the "Find Out More" button
const aboutUsButton = document.getElementById("about-us-button");
if (aboutUsButton) {
    aboutUsButton.addEventListener("mouseenter", () => {
        aboutUsButton.style.transition = "transform 0.3s ease-in-out";
        aboutUsButton.style.transform = "scale(1.1)";
    });
    aboutUsButton.addEventListener("mouseleave", () => {
        aboutUsButton.style.transform = "scale(1)";
    });
}

// Add animation to navigation links
document.querySelectorAll("header nav a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transition = "color 0.3s ease-in-out, transform 0.3s ease-in-out";
        link.style.color = "var(--secondary-color)";
        link.style.transform = "scale(1.1)";
    });
    link.addEventListener("mouseleave", () => {
        link.style.color = "#000";
        link.style.transform = "scale(1)";
    });
});