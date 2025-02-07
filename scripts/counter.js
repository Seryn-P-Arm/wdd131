// Count number of times user reviews/submits review of the products
document.addEventListener("DOMContentLoaded", function() {
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);

    document.getElementById("review-count").textContent = count;
});