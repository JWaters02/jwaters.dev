const theme = document.querySelector("#theme-link");
if (window.localStorage.getItem("theme") === "dark") {
    theme.href = "./CSS/light-theme.css";
} else if (window.localStorage.getItem("theme") === "light") {
    theme.href = "./CSS/dark-theme.css";
}