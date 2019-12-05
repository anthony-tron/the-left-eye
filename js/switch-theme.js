var body = document.querySelector('body')
var switchButton = document.querySelector('.switch-theme')
var theme = localStorage.getItem("theme")

if (theme === 'theme-b') {
    body.classList.toggle('theme-b')
    switchButton.innerHTML = 'Dark theme'
} else {
    switchButton.innerHTML = 'Light theme'
}

switchButton.addEventListener('click', function(event) {
    body.classList.toggle('theme-b')

    if (body.classList.contains('theme-b')) {
        switchButton.innerHTML = 'Dark theme'
        localStorage.setItem('theme', 'theme-b')
    }
    else  {
        switchButton.innerHTML = 'Light theme'
        localStorage.setItem('theme', '')
    }
});