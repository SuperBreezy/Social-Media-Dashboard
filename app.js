let checkbox = document.querySelector('input[name=theme]');
const currentTheme = localStorage.getItem('data-theme');

// check to see if the toggler is checked or not
checkbox.addEventListener('change', function() {
    // if checked, set the theme to dark
    // if not, set the theme to dark
    if(this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
    }
});


// create transition between the light and dark theme by adding a class "transition" to the body
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}