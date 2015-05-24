$(document).ready(function(){

	var start_game_music = new Audio('assets/lib/sounds/NHLintro.mp3');
	var page_intro = new Audio('assets/lib/sounds/pageintro.mp3');

	// Start game music
	page_intro.play();


	// start first animation
	// make items appear
	$('.select-players').click(function(){

		$('.players').css("transform", "scale(1.4)");
		$('#start-game').css("display", "flex");

	});


	// Start game 
	// Jumbotrone appears
	$('#start-game').click(function(){

		// if one of inputs is empty Alert else send forward
		if($('#p1').val().length == 0 || $('#p2').val().length == 0){
			
			alert("Enter a playername");
		
		}else{		

			$('.select-players').css("margin", "0 300px");
			$('.jumbotrone').css("top", "300px");
			$('#start-game').css("display", "none");

			// Pause intro music
			page_intro.pause();

			// NHL intro sound starts
			start_game_music.play();
		}
	});


	// Control settings
	$('.control-btn').click(function(){

		if($('.controls').css("display") == "none"){

			$('.controls').css("display", "block");

		}else{

			$('.controls').css("display", "none");

		}
	});


});