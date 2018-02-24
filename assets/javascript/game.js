var randomNumber;
var losses = 0;
var wins = 0;
var counter = 0;

	
var resetAndStart = function () {

	//resetting crystal values
	$(".crystals").empty();

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
			
			//Adding crystal values to the DOM
			crystal.html(randomCrystalValue);

		//Adding crystals images to the DOM
		$(".crystals").append(crystal);
	}

}
//Allows the function to run when the page reloads
resetAndStart();

$(document).on('click', ".crystal", function () {
	var num = parseInt($(this).attr("data-random"));

	counter += num;
	console.log(counter);

	if(counter > randomNumber) {
		losses++;
		
		$("#losses").html("Losses: " + losses);

		counter = 0;

		//resets and starts the game
		resetAndStart();

		}

	else if(counter === randomNumber) {
		wins++;
		
		$("#wins").html("Wins: " + wins);

		counter = 0;

		//resets and starts the game
		resetAndStart();

		}
	
});







