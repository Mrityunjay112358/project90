function addUser(){
    player1_name = document.getElementById("text_input_1").value;
player2_name = document.getElementById("text_input_2").value;

localStorage.setItem("player1-name",player1_name);
localStorage.setItem("player2-name",player2_name);

window.location="game_mane_page.html";
}
