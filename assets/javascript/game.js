$(document).ready(function() {
});	

 
// Here we establish the "targetNumber" (set to 50 in this example).
var targetNumber = 50;

// Here we set the "number-to-guess" header to match the "targetNumber".
$("#number-to-guess").text(targetNumber);

//Created a test counter to track the user's total.
var counter = 0;
$(".crystal").on("click", function() {

	// This time we increase the counter by *10* each time the user clicks.
 	counter += 10;

	// We then output the new counter value each time the crystal is clicked.
	alert("New score: " + counter);

    // Checking if the click counter matches the targetNumber.
    if (counter === targetNumber) {

      // If the numbers match the player wins.
      alert("You win!");
    }

	// If the user's counter  xceeds the targetNumber...
    else if (counter >= targetNumber) {

      // The player loses.
      alert("You lose!!");
    }

});	


