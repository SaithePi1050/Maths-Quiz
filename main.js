function addUser() 
{
   var player1name = document.getElementById("player1nameinput").value;
   var player2name = document.getElementById("player2nameinput").value;

   localStorage.setItem ("player1name", player1name);
   localStorage.setItem ("player2name", player2name);
   
   window.location = "game.html";
}