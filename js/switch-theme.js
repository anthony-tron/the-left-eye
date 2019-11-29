var body = document.querySelector('body')
var switchButton = document.querySelector('.swich-theme')

switchButton.addEventListener('click', function(event) {
    body.classList.toggle('theme-b')
});