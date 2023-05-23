var randomNumber =Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById("guessBtn").addEventListener("click",function(){
var guess=parseInt(document.getElementById("guessInput").value);
attempts++;
if(guess === randomNumber){
    displayMessage("congratulations! you guessed the number in "+attempts);
    document.getElementById("guessBtn").disabled=true;
}
else if(guess<randomNumber){
    displayMessage("too low! try a higher number.");
}
else{
    displayMessage("too high! try a lower number.");
}
});

function displayMessage(message){
    document.getElementById("message").textContent=message;
}