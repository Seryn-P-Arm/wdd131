// Get the current year
const currentYear = new Date().getFullYear();

// Update the first paragraph in the footer with the current year
document.getElementById("currentyear").textContent = currentYear;

// Get the document's last modified date
const lastModified = document.lastModified;

// Update the second paragraph in the footer with the last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// Funtion for Windchill Calculation
function calculateWindChill(temp, speed) {

    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// Function to update the Wind Chill
function updateWindChill() {
    const temp = 24;
    const speed = 15;

    let windChill = "N/A";
    if (temp <= 10 && speed > 4.8) {
        windChill = calculateWindChill(temp, speed);
    }
    document.getElementById("windChill").textContent = `${windChill} °C`;
}
// Call the update
updateWindChill();