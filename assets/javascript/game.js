for(var i = 0; i < 4; i++) {

	var random = Math.floor(Math.random() * 11) + 1;
	console.log(random);
	
	var crystal = $("<div>");
		crystal.attr({
			"class": "crystal",
			"data-random" : random
			});

	$(".crystals").append(crystal);
		


}







