// Megan Boyer
function EscapeRoom() {
// This will generate random numbers for dice one and two.
var die1=Math.floor(Math.random()*6);
var die2=Math.floor(Math.random()*6);
// Below we have the sum of dice one and two, which will decide whether the players win the game.
var sum= die1+die2;
// Below we have the random number that the players dice roll needs to match.
var DoorLock=Math.floor(Math.random()*12);
// Below we have the code that gets the die results from our HTML file.
document.getElementById("Die1Results").innerHTML="die1=" + die1;
document.getElementById("Die2Results").innerHTML="die2=" + die2;
document.getElementById("SumResults").innerHTML="Sum="+ sum;
document.getElementById("DoorLockResults").innerHTML="DoorLock="+ DoorLock;
// Below, we are stating that if the sum of a player's dice is equal to the random number generated by our variable "DoorLock," the player escapes.
if (sum==DoorLock){
    document.getElementById("FinalResults").innerHTML="Run, you're free!";
}
// Below, we are saying that if the sum of a player's dice is not equal to our "DoorLock" variable, the player does not win.
if (sum!=DoorLock){
document.getElementById("FinalResults").innerHTML= "You're going to be in here forever..";
}
}