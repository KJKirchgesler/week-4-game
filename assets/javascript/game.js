$(document).ready(function() {


 //Created a test counter to track the user's total.
 var counter = 0;
 $(".crystal").on("click", function() {

// This time we increase the counter by *10* each time the user clicks.
 counter += 10;

// We then output the new counter value each time the crystal is clicked.
alert("Your new score is: " + counter);

});	

});	
