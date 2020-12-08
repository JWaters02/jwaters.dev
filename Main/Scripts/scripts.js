const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");

btn.addEventListener("click", function() {
    // Swap out the URL for the different stylesheets
    if (theme.getAttribute("href") == "./CSS/dark-theme.css") {
        theme.href = "./CSS/light-theme.css";
    } else {
        theme.href = "./CSS/dark-theme.css";
    }
});