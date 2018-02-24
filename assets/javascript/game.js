	var randomNumber;
	var lost = 0;
	var win = 0;
	var counter = 0;

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

	//Adding crystals images to the DOM
	$(".crystals").append(crystal);

}


	$(".crystal").on('click', function () {
		var num = parseInt($(this).attr("data-random"));

		counter += num;

		console.log(counter);

	
});







