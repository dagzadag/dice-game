/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,activePlayer,dice,maxPlay;
maxPlay = 80;
activePlayer = 0;
scores = [0,0];

// function rool(){
// 	var currentValue = document.getElementById("current-"+activePlayer).textContent;
// 	var allScore = document.getElementById("score-"+activePlayer).textContent;
// 	if (parseInt(allScore ) > 80){
// 		dice = Math.floor(Math.random()*3)+1;
// 		document.getElementsByClassName('dice')[0].src = "dice-"+dice+".png";
// 	}else{
// 		dice = Math.floor(Math.random()*6)+1;
// 		document.getElementsByClassName('dice')[0].src = "dice-"+dice+".png";
// 	}
// 	if(dice == 1 ){

// 		changePlayer();
// 	}else{
// 		document.getElementById("current-"+activePlayer).textContent = parseInt(currentValue) + dice;
// 	}
	

// }
// function hold(){
// 	var currentValue = document.getElementById("current-"+activePlayer).textContent;
// 	var value = document.getElementById("score-"+activePlayer).textContent;
// 	document.getElementById("score-"+activePlayer).textContent = parseInt(value) + parseInt(currentValue);
// 	changePlayer();
// }
// function changePlayer(){
// 	document.getElementById("current-"+activePlayer).textContent = 0;
// 	if (activePlayer == 0){
// 		document.getElementsByClassName("player-0-panel")[0].classList.remove("active");
// 		document.getElementsByClassName("player-1-panel")[0].classList.add("active");
// 		activePlayer = 1;
// 	}else{
// 		document.getElementsByClassName("player-1-panel")[0].classList.remove("active");
// 		document.getElementsByClassName("player-0-panel")[0].classList.add("active");
// 		activePlayer = 0;
// 	}
// }
// function scooreChange(){
// 	document.getElementById("score-0").textContent = score[0]
// 	document.getElementById("score-1").textContent = score[1]
// }
 function roolDice(){
 	if (score[activePlayer] > maxPlay ) {
 		dice = Math.floor(Math.random()*3)+1;
 	}else{
 		dice = Math.floor(Math.random()*6)+1;
 	}
 	document.querySelector('.dice').src = "dice-"+dice+".png";
 }