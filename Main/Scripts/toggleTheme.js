const toggleThemeBtn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
toggleThemeBtn.addEventListener("click", function() {
    console.log("button clicked");
    if (theme.getAttribute("href") === "./CSS/dark-theme.css") {
        console.log("change to light theme");
        window.localStorage.setItem("theme", "light");
    } else {
        console.log("change to dark theme");
        window.localStorage.setItem("theme", "dark");
    }
});

window.onstorage = () => {
    const currentTheme = window.localStorage.getItem("theme");
    const isDarkTheme = currentTheme === "dark";

    console.log("on storage called");
    const themeCSS = isDarkTheme ? 
        "./CSS/light-theme.css" :
        "./CSS/dark-theme.css"

    document.querySelector("#theme-link").href = themeCSS;
};