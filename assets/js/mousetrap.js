
// Change active user player1 / player2
Mousetrap.bind('k', changeActiveUser);

// Add a goal
Mousetrap.bind('g', goal);



// Change active user player1 / player2
// Change scoreboard, Home and away
function changeActiveUser(){

	if(document.getElementById('player-one').classList.contains('active')){

		document.getElementById('player-one').classList.remove('active');
		document.getElementById('player-two').classList.add('active');
		document.getElementById('home-score').classList.remove('score');
		document.getElementById('away-score').classList.add('score');

	}else{

		document.getElementById('player-two').classList.remove('active');
		document.getElementById('player-one').classList.add('active');
		document.getElementById('away-score').classList.remove('score');
		document.getElementById('home-score').classList.add('score');
	}
	
};




var homeGoals = 0;
var awayGoals = 0;
var audio = new Audio('assets/lib/sounds/goal.mp3');


// Update goals home and away 
// Add sound when goal scores
function goal(){

	if(document.getElementById('home-score').classList.contains('score')){

		homeGoals++;
		document.getElementById('home-score').innerHTML = homeGoals;
		audio.play();

	}else{

		awayGoals++;
		document.getElementById('away-score').innerHTML = awayGoals;
		audio.play();
	}

};


