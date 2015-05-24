$(document).ready(function(){


	var page_intro = new Audio('assets/lib/sounds/pageintro.mp3');      // Music on pageLoad
	var start_game_music = new Audio('assets/lib/sounds/NHLintro.mp3'); //Start Game music
	var crowd_ambience = new Audio('assets/lib/sounds/crowd.mp3');	    // Crowd ambience music
	crowd_ambience.volume = 0.2;

	// Start game music
	page_intro.addEventListener('ended', function() {
	    this.currentTime = 0;
	    this.play();
	}, false);
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
			
			$('.modal-alert').css("display", "flex");
			$('.modal-box').css("transform", "scale(1)");
		
		}else{		

			$('.select-players').css("margin", "0 300px");
			$('.jumbotrone').css("top", "300px");
			$('#start-game').css("display", "none");

			// Pause intro music
			page_intro.pause();

			// // NHL intro sound starts
			start_game_music.play();

			crowd_ambience.addEventListener('ended', function() {
			    this.currentTime = 0;
			    this.play();
			}, false);
			crowd_ambience.play();
		}
	});


	// close modal
	$(".ok-button").click(function(){

		$('.modal-alert').css("display", "none");

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