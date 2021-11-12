const onThemeUpdated = (theme) => {
    let root = document.documentElement;
    if (theme === 'dark') {
        // Change to light theme vars
        root.style.setProperty('--button-colour', '#45641f')
        root.style.setProperty('--nav-colour', '#26282a')
        root.style.setProperty('--border-colour', '#26282a')
        root.style.setProperty('--hero-text-colour', '#26282a')
        root.style.setProperty('--text-colour', '#fff')
        root.style.setProperty('--link-colour', '#fff')
        root.style.setProperty('--background-colour', '#f4ffec')
        root.style.setProperty('--flex-background-colour', '#45641f')
        root.style.setProperty('--table-zebra-colour', '#354b1b')
        root.style.setProperty('--button-text-colour', '#fff')
        root.style.setProperty('--blockquote-colour', '#26282a')
        root.style.setProperty('--nav-hover-colour', '#1b1e20')
        root.style.setProperty('--nav-test-colour', '#92b976')
        root.style.setProperty('--footer-colour', '#26282a')

        if (document.title == 'Bobiied') {
            root.style.setProperty('--hero-image-background', 'url("../Images/bobiied2.png")')
        } else {
            root.style.setProperty('--hero-image-background', 'url("../Images/websitebackgroundlight2.png")')
        }
    } else {
        // Change to dark theme vars
        root.style.setProperty('--button-colour', '#61892f')
        root.style.setProperty('--nav-colour', '#26282a')
        root.style.setProperty('--border-colour', '#517428')
        root.style.setProperty('--hero-text-colour', '#86c232')
        root.style.setProperty('--text-colour', '#7ca361')
        root.style.setProperty('--link-colour', '#92b976')
        root.style.setProperty('--background-colour', '#1b1e20')
        root.style.setProperty('--flex-background-colour', '#26282a')
        root.style.setProperty('--table-zebra-colour', '#1b1e20')
        root.style.setProperty('--button-text-colour', '#fff')
        root.style.setProperty('--blockquote-colour', '#1b1e20')
        root.style.setProperty('--nav-hover-colour', '#1b1e20')
        root.style.setProperty('--nav-test-colour', '#92b976')
        root.style.setProperty('--footer-colour', '#26282a')
        
        if (document.title == 'Bobiied') {
            root.style.setProperty('--hero-image-background', 'linear-gradient(var(--hero-image-top-gradient), var(--hero-image-bottom-gradient)), url("../Images/bobiied2.png")')
        } else {
            root.style.setProperty('--hero-image-background', 'linear-gradient(var(--hero-image-top-gradient), var(--hero-image-bottom-gradient)), url("../Images/websitebackground.png")')
        }
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