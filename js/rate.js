rateParagraph = document.getElementById('rate')
rateSlider = document.getElementById('rate-slider')

rateSlider.addEventListener('input', function(event) {
    rateParagraph.innerHTML = rateSlider.value + "/" + rateSlider.max
});