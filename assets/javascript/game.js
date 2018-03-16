var secretNum = 0;
var message = '';
var count = 0;

function generateRandomNum(){
  secretNum = Math.round(Math.random()*100);
  count = 0;
}
generateRandomNum();

function aGuess(){
  var num = document.getElementById('inputGuess').value;
  if (num < secretNum){
    //you are too low//
    message='Not in this life ' + num + ' is too low. Try again.';
  } else if (num > secretNum){
    //you are too high//
    message='Ha! Ha! Sucka ' + num + ' is too high. Try again.';
  } else if (num == secretNum){
    //you are correct//
    message='Finally! ' + num + ' is my number. I know you did not cheat, because it took you ' + count + ' tries.';
  }
  alertResult(message);
  count++;
}

function alertResult(){
  console.log(message + ' ' + secretNum);
  
  //display message in html//
  var results = document.getElementById('results');
  results.innerHTML = '<p>' + message + '</p>';
}

//var submitButton = document.getElementById("submit");//
//submitButton.addEventListener("click", aGuess);//