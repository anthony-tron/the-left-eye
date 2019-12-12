var audio = new Audio('../../../res/ask_your_mum.mp3')

function playAskYourMum() {
    if(!audio.paused)
        audio.currentTime = 0
    
    audio.play()
}