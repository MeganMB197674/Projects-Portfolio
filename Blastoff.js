// Megan Boyer
function betterCountdown() {

    var currTime = 10;
    
    // Here, we are setting variable i equal to one and saying that if i is less than 11, we increment by 1.
    for (var i = 1; i <= 11; i++) {
    
        // Here, we are saying that if i is equal to 11, print "Blastoff!!!"
        if (i == 11) {
    
            setTimeout(function () {
    
                //code goes here for timer
    
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    
            }, 1000 * i);
    
            // Here, we are saying that if i is greater than 5 (halfway to 11), we would like to display a message and the time left.
        } else if (i > 5) {
    
            setTimeout(function () {
    
                document.getElementById("countdownTimer").innerHTML =
    
                    "Warning: Less than halfway to launch, time left: " + currTime;
    
                currTime = currTime - 1;
    
            }, 1000 * i);
    
            // Here, we are saying that if none of the conditions are met (i is not equal to 11 and i is not greater than 5), we want to display the time left.
        } else {
    
            setTimeout(function () {
    
                document.getElementById("countdownTimer").innerHTML = "The time left is " + currTime;
    
                currTime = currTime - 1;
    
            }, 1000 * i);
    
        }
    
    }
    
    }