player1_value = localStorage.getItem("player1-name");
player2_value = localStorage.getItem("player2-name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_value + " : ";
document.getElementById("player2_name").innerHTML = player2_value + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn= " + player1_value;
document.getElementById("player_answer").innerHTML = "Answer turn= " + player2_value;

function Send(){
}
