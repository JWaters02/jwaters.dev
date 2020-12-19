const onThemeUpdated = (theme) => {
	console.log('Updated theme to: ${theme}');
    const themes = document.querySelector("#theme-link");
    if (theme === 'dark') {
        themes.href = "./CSS/light-theme.css"
    } else {
        themes.href = "./CSS/dark-theme.css"
    }
    const rootElement = document.getElementById('root');
    rootElement.className = theme;
};
const updateTheme = (theme) => {
    if (theme !== 'dark' && theme !== 'light') {
        console.error('Tried to update theme, but did not recognise ${theme} theme.');
        return;
    }
    window.localStorage.setItem('theme', theme);
    onThemeUpdated(theme);
};
const getTheme = () => window.localStorage.getItem('theme');
const toggleTheme = () => {
	const theme = getTheme();
    const updatedTheme = theme === 'dark' ? 
        'light' : 
        'dark';
        
    updateTheme(updatedTheme);
};

document.addEventListener('DOMContentLoaded', () => {
	const theme = getTheme();
    updateTheme(theme);
});