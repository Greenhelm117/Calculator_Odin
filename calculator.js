////////Main Functions

//Add Function

const addNumbers = function(numberA, numberB)
{
    let addedNumber = numberA + numberB;


    return addedNumber;
}

//Subtract Function

const subtractNumbers = function(numberA, numberB)
{
    let subtractedNumber = numberA - numberB;



    return subtractedNumber;
}

//Multiply Function

const multiplyNumbers = function(numberA, numberB)
{
    let multipliedNumber = numberA * numberB;



    return multipliedNumber;
}

//Divide Function

const divideNumbers = function(numberA, numberB)
{

    let dividedNumber = numberA / numberB;

    if(numberB == 0)
    {
        return "Please don't";
    }

    return dividedNumber;
}


//////////////////////

//Operate Function

const operateNumbers = function(operator, numberA, numberB)
{

    if(operator == 'add')
    {
        return addNumbers(numberA, numberB);
    }
    else if(operator === 'subtract')
    {
        return subtractNumbers(numberA, numberB);
    }
    else if(operator == 'multiply')
    {
        return multiplyNumbers(numberA, numberB);
    }
    else if(operator == 'divide')
    {
        return divideNumbers(numberA, numberB);
    }

}

///////////////

//Add Number to Screen Function
const divScreen = document.querySelector('.displayScreen');

//div display limit



////Buttons
const btn0 = document.querySelector("#zero");
const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");
const btn4 = document.querySelector("#four");
const btn5 = document.querySelector("#five");
const btn6 = document.querySelector("#six");
const btn7 = document.querySelector("#seven");
const btn8 = document.querySelector("#eight");
const btn9 = document.querySelector("#nine");

const btnAdd = document.querySelector(".addButton");
const btnSubtract = document.querySelector(".subtractButton");
const btnMultiply = document.querySelector(".multiplyButton");
const btnDivide = document.querySelector(".divideButton");
const btnEquals = document.querySelector(".equalsButton");
const btnClear = document.querySelector(".clearButton");



///////Button Listeners
const printNumber = function(number){

    if(equalsPressed == true)
    {
        divScreen.textContent = "";
        equalsPressed = false;
    }

    divScreen.textContent = divScreen.textContent + number;
    
    if(divScreen.textContent.length > 11)
    {
        displayText = divScreen.textContent;
        divScreen.textContent = displayText.substring(0,11);
    }
}


btn0.addEventListener("click", function () {

    printNumber(0);
});

btn1.addEventListener("click", function () {

    printNumber(1);
});

btn2.addEventListener("click", function () {

    printNumber(2);
});

btn3.addEventListener("click", function () {

    printNumber(3);
});

btn4.addEventListener("click", function () {

    printNumber(4);
});

btn5.addEventListener("click", function () {

    printNumber(5);
});

btn6.addEventListener("click", function () {

    printNumber(6);
});

btn7.addEventListener("click", function () {

    printNumber(7);
});

btn8.addEventListener("click", function () {

    printNumber(8);
});

btn9.addEventListener("click", function () {

    printNumber(9);
});


saveOperator = 0;
saveNumberOne = 0;
saveNumberTwo = 0;
operatorClicked = false;
equalsPressed = false;
//console.log(clicked);

///numbers show up when pressed, when operator pressed, save number, track operator, and clear/replace number 
///when operator pressed again, save number, calculate sum, display sum, put sum in firstnumber saved spot

//display only certain number of characters and round

btnAdd.addEventListener("click", function () {

    if(operatorClicked == true || equalsPressed == true) {
        saveNumberTwo = parseFloat(divScreen.textContent);
        equals();
        saveOperator = "add";
        //operatorClicked = false;
        //divScreen.textContent = "";
    }
    else
    {
        saveNumberOne = parseFloat(divScreen.textContent);
        equals();
        saveOperator = "add";
        operatorClicked = true;
        divScreen.textContent = "";
    }  
});

btnSubtract.addEventListener("click", function () {


    if(operatorClicked == true || equalsPressed == true) {
        saveNumberTwo = parseFloat(divScreen.textContent);
        equals();
        saveOperator = "subtract";
        //operatorClicked = false;
        //divScreen.textContent = "";
    }
    else
    {
        saveNumberOne = parseFloat(divScreen.textContent);
        equals();
        saveOperator = "subtract";
        operatorClicked = true;
        divScreen.textContent = "";
    }  
});

btnMultiply.addEventListener("click", function () {

   
    if(operatorClicked == true || equalsPressed == true) {
        saveNumberTwo = parseFloat(divScreen.textContent);
        equals();
        saveOperator = "multiply";
        //operatorClicked = false;
        //divScreen.textContent = "";
    }
    else
    {
        saveNumberOne = parseFloat(divScreen.textContent);
        equals();
        saveOperator = "multiply";
        operatorClicked = true;
        divScreen.textContent = "";
    }  
});

btnDivide.addEventListener("click", function () {

   
    if(operatorClicked == true || equalsPressed == true) {
        saveNumberTwo = parseFloat(divScreen.textContent);
        equals();
        saveOperator = "divide";
        //operatorClicked = false;
        //divScreen.textContent = "";
    }
    else
    {
        saveNumberOne = parseFloat(divScreen.textContent);
        equals();
        saveOperator = "divide";
        operatorClicked = true;
        divScreen.textContent = "";
    }  
});

btnEquals.addEventListener("click", function () {

    equals();
});

btnClear.addEventListener("click", function () {

    saveNumberOne = 0;
    saveNumberTwo = 0;
    saveOperator = 0;

    divScreen.textContent = "";
});

const equals = function()
{
    if(saveOperator != 0)
    {
        equalsPressed = true;
        if(operatorClicked == false){
            saveNumberTwo = parseFloat(divScreen.textContent);
        }
        //operatorClicked = false;
        finalNumber = operateNumbers(saveOperator, parseFloat(saveNumberOne), parseFloat(saveNumberTwo));
        divScreen.textContent = parseFloat(finalNumber.toFixed(9).substring(0,11));
        saveNumberOne = parseFloat(divScreen.textContent);
        //displayText = divScreen.textContent;
        //divScreen.textContent = displayText.substring(0,11);
        saveOperator = 0;
    }
}



///22 is in savenumberone
//when operator is called, numberOne is overwritten