var answers = ["Yup!", "Fuhgeddaboudit", "Maybe",
        "Ask: what would you mother do?",
        "Ask: what would an Australian do, then do the opposite", "Na, fam"];

//Input a question from the user
function getInput() {
  var userInput = prompt("What is your question?");
  return userInput;
}

//Create a random number to select an answer
function getsRandomNum() {
  return Math.floor(Math.random() * 6);
}

//Output the question with random answers
function output(ans, input) {
  alert("You asked: " + input);
  alert(ans[getsRandomNum()]);
}

//Put answer and question in loop and stop when users enters "STOP"
function stop() {
  var input = getInput();
  var i = 0;

  while (input != "STOP") {
    if (i != 0) {
      input = getInput();
    }
    if (input === "STOP") {
      break;
    }
    output(answers, input)
    i++
  }
}
