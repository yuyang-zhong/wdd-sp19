$(document).ready(function() {

	let currOutfitNum = "0";

	$(".outfit-selection").click(function(){
		$("#body").hide();
		$(`#o${currOutfitNum}`).hide();
		currOutfitNum = $(this).attr('id').slice(1);
		$(`#o${currOutfitNum}`).show();
	})

	$("#strip-button").click(function(){
		$(".outfit").fadeOut();
		$("#body").fadeIn();
	})

});