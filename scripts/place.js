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
    const temp = 8; // in celsius
    const speed = 12.3; // in km/h

    let windChill = "N/A"; //default value if conditions are not met

    // Check conditions before calling calculateWindChill
    if (temp <= 10 && speed > 4.8) {
        windChill = calculateWindChill(temp, speed);
    }
    // Display wind chill or N/A
    document.getElementById("windChill").textContent = `${windChill} °C`;
}
// Call the updateWindChill to call the calculateWindChill
updateWindChill();