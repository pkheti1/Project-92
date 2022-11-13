function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
  
      localStorage.setItem("player1_name", player1_name);
      localStorage.setItem("player2_name", player2_name);
  
      window.location = "game_page.html";
  }
  score = 0;

function updateScore()
{
    score = score + 1;
    document.getElementById("score").innerHTML = "score: " + score;
}
function saveScore()
{
    localStorage.setItem("score" ,score);
}

function nextPage() {
    window.location = "activity2.html";
}function addUser() {
	player1_name = document.getElementById("player1_name_input").value;
	player2_name = document.getElementById("player2_name_input").value;
  
	  localStorage.setItem("player1_name", player1_name);
	  localStorage.setItem("player2_name", player2_name);
  
	  window.location = "game_page.html";
  }
   
  player1_name = localStorage.getItem("player1_name");
  player2_name = localStorage.getItem("player2_name")

  player1_score = 0;
  player2_score = 0;

  document.getElementById("player1_name"). innerHTML =  player1_name + " : ";
  document.getElementById("player2_name"). innerHTML = player2_name + " : ";

  document.getElementById("player1_score"). innerHTML = player1_score ;
  document.getElementById("player2_score").innerHTML = player2_score ; 

  document.getElementById("player_question"). innerHTML = "Question Turn - " + player1_name;
  document.getElementById("player_answer"). innerHTML = "Answer Turn - " + palyer2_name;

  function send() {
	get_word = document.getElementById("word").value;
	word = get_word. toLowerCase () ;
	console.log("word in lowerCase = " + word);

	charAt1 = word. charAt (1);
	console.log(charAt1);

	length_divide_2 = Math.floor(word.length/2);
	charAt2 = word.charAt_(length_divide_2);
	console.log(charAt2);

	length_minus_1 = word.length - 1;
	charAt3 = word.charAt(length_minus_1);
	console.log(charAt3);

	remove
  }