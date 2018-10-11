var displayVal = "0";
var currentOperator;

function addition(a, b){
  return a + b;
};

function substraction(a, b){
  return a - b;
};

function multiplication(a, b){
  return a * b;
};

function division(a, b){
  return a/b;
};

function operate(operator, a, b){
  if(operator === "+"){
     showSolution(addition(a, b));
  }
  else if(operator === "-"){
    showSolution(substraction(a, b));

  }else if(operator === "*"){
    showSolution(multiplication(a, b));

  }else if (operator === "/") {
    showSolution(division(a, b));
  }
  else{
    console.log("This is not an operator!")
  }

};

function clearScreen(){
  displayVal = "";
  putOnDisplay();
};

function backButton(){
  var length = displayVal.length;
  displayVal = displayVal.slice(0, -1);
  putOnDisplay();
};

function posNeg(){
  if(displayVal.includes("-")){
    var length = displayVal.length;
    displayVal = displayVal.substr(1);
  }else{
    displayVal = "-" + displayVal;
  }
  putOnDisplay();
};

function addNumber(id){
  if(displayVal.indexOf("0") == 1){
    var length = displayVal.length;
    displayVal = displayVal.subString(1, length+1);
  }
  var number = document.getElementById(id).firstChild.nodeValue;
  displayVal = displayVal + number;
  putOnDisplay();

};

function addOperator(operator){
  currentOperator = document.getElementById(operator).firstChild.nodeValue;
  displayVal = displayVal + currentOperator;
  putOnDisplay();
};

function addDecimal(){
  displayVal = displayVal + ".";
  putOnDisplay();
};

function eq(){
  displayVal = displayVal.split(currentOperator);
  var firstNumber = displayVal[0];
  var secondNumber = displayVal[1];
  operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));
};

function putOnDisplay(){
  var fieldNameElement = document.getElementById('displayText');
  fieldNameElement.innerHTML = displayVal;
};

function showSolution(number){
  var fieldNameElement = document.getElementById('displayText');
  fieldNameElement.innerHTML = number;
  currentOperator = undefined;
  displayVal = "";
}

$(document).ready(function() {
    clearScreen();
});
