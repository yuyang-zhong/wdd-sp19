$(document).ready(function()  {

	// PART 1: YOUR CODE HERE

	for (let i = 1; i <= 6; i += 1) {
		$("#content").append(
			'<div class="fruit"><img src="assets/img/fruit.jpeg"></div>');
	}

	for (let i = 1; i <= 12; i += 1) {
		$("#content").append(
			'<div class="water"><img src="assets/img/water.jpeg"></div>');
	}

	for (let i = 1; i <= 8; i += 1) {
		$("#content").append(
			'<div class="bread"><img src="assets/img/bread.jpeg"></div>');
	}

	$(".nav-item").click(function() {

		let buttonName = $(this).text();
		let buttonActive = $(this).hasClass("active");

		// UNCOMMENT THE SECTION BELOW FOR PART 2
		
		// YOUR CODE HERE - PART 2.1

		if (!buttonActive) {
			$(this).addClass("active");
			$(this).removeClass("inactive");
			$("." + buttonName).show();

		} else {
			$(this).addClass("inactive");
			$(this).removeClass("active");
			$("." + buttonName).hide();
		} 
	})
})