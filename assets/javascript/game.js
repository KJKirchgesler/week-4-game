var randomNumber;
var losses = 0;
var wins = 0;
var counter = 0;

	
var resetAndStart = function () {

	//resetting crystal values
	$(".crystals").empty();

	var images = [
		'assets/images/crystals/red.png', 
		'assets/images/crystals/blue.png', 
		'assets/images/crystals/yellow.png', 
		'assets/images/crystals/green.png',
		];

	//Generating a new random number between 19 and 120
	randomNumber = Math.floor(Math.random() * 101 ) + 19; 

	//Adding the random number to the DOM
	$("#number-to-match").html("Random Number: " + randomNumber);

	//Looping 4 times to create random numbers for crystals
	for(var i = 0; i < 4; i++) {

		//Creating random numbers for each crystal
		var randomCrystalValue = Math.floor(Math.random() * 11) + 1;
		//console.log(randomCrystalValue);
	
		//Creating the div for the crystals
		var crystal = $("<div>");
		
			//Assigning a class and random data values to each crystal
			crystal.attr({
				"class": "crystal",
				"data-random" : randomCrystalValue
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"
			});
			
			//Adding crystal values to the DOM
			//crystal.html(randomCrystalValue);

		//Adding crystals images to the DOM
		$(".crystals").append(crystal);

	}

	$("#counter").html("Total Score: " + counter);
}
//Allows the function to run when the page reloads
resetAndStart();

//Changes the random crystal value generated when 
	//the crystal is clicked from a string 
	//to a number
$(document).on('click', ".crystal", function () {
	
	var num = parseInt($(this).attr("data-random"));

	counter += num;
	
	$("#counter").html("Total Score: " + counter);

	console.log(counter);

	//comparing previous to random result
	//player loses if previous exceeds random number
	if (counter > randomNumber) {
		
		losses++;
		
		$("#losses").html("Losses: " + losses);

		 counter = 0;

		 //resets and starts the game
		resetAndStart();
	} 

	//player wins if previous matches random number
	else if (counter === randomNumber) {
		
		wins++;
		
		$("#wins").html("Wins: " + wins);

		counter = 0;

		//reusable function - resets and starts game
		resetAndStart();
	}

 
});







