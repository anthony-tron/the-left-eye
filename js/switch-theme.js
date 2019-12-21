var switchButton = document.querySelector('.switch-theme')
var theme = localStorage.getItem("theme")
var styleLink = document.getElementById('style-link')


if (theme === 'dark-theme') {
    styleLink.rel = 'stylesheet'
    switchButton.innerHTML = 'Dark theme'
} else {
    styleLink.rel = 'preload'
    switchButton.innerHTML = 'Light theme'
}


switchButton.addEventListener('click', function(event) {
    if (localStorage.getItem("theme") === 'dark-theme') {
        styleLink.rel = 'preload'
        switchButton.innerHTML = 'Light theme'
        localStorage.setItem('theme', '')
    }
    else  {
        styleLink.rel = 'stylesheet'
        switchButton.innerHTML = 'Dark theme'
        localStorage.setItem('theme', 'dark-theme')
    }
});