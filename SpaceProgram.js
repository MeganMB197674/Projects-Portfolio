//Megan Boyer
    
//Below, I have created a function attached to a button in the HTML that will disable the start button and enable the stop button.
//This function will also enable the data loader onclick.
function DisableStart() {  
  
document.getElementById("data").rows["seconds"].innerHTML = "Reading data...";

index = 0;

timer = setInterval(updateDisplay, time_interval);

//In this case, true means that the start button is in fact disabled.
document.getElementById("StartButton").disabled = true;

//In this case, false means that the stop button is not disabled.
document.getElementById("StopButton").disabled = false;
}
//Below, we have created a function attached to a button in the HTML that will disable the stop button and enable the start button.
function DisableStop() {

clearInterval(timer);

// In this case, true means that the stop button is in fact disabled.
document.getElementById("StopButton").disabled = true;

//In this case, false means that the start button is not disabled.
document.getElementById("StartButton").disabled = false;
}

//This function is attached to a button in the HTML and allows me to play my chosen sound onclick.
function PlayLostInSpace() {
    mySound = new sound("Lost In Space Theme Song.mp3");
    mySound.play();
}
//This is our library code that enables us to play specific mp3 files.
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
}