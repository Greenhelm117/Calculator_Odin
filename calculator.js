////////Main Functions

//Add Function

const addNumbers = function(numberA, numberB)
{
    let addedNumber = numberA + numberB;

    console.log(addedNumber);

    return addedNumber;
}

//Subtract Function

const subtractNumbers = function(numberA, numberB)
{
    let subtractedNumber = numberA - numberB;

    console.log(subtractedNumber);

    return subtractedNumber;
}

//Multiply Function

const multiplyNumbers = function(numberA, numberB)
{
    let multipliedNumber = numberA * numberB;

    console.log(multipliedNumber);

    return multipliedNumber;
}

//Divide Function

const divideNumbers = function(numberA, numberB)
{
    let dividedNumber = numberA / numberB;

    console.log(dividedNumber);

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
btn0.addEventListener("click", function () {

    divScreen.textContent = divScreen.textContent + "0";
});

btn1.addEventListener("click", function () {

    divScreen.textContent = divScreen.textContent + "1";
});

btn2.addEventListener("click", function () {

    divScreen.textContent = divScreen.textContent + "2";
});

btn3.addEventListener("click", function () {

    divScreen.textContent = divScreen.textContent + "3";
});

btn4.addEventListener("click", function () {

    divScreen.textContent = divScreen.textContent + "4";
});

btn5.addEventListener("click", function () {

    divScreen.textContent = divScreen.textContent + "5";
});

btn6.addEventListener("click", function () {

    divScreen.textContent = divScreen.textContent + "6";
});

btn7.addEventListener("click", function () {

    divScreen.textContent = divScreen.textContent + "7";
});

btn8.addEventListener("click", function () {

    divScreen.textContent = divScreen.textContent + "8";
});

btn9.addEventListener("click", function () {

    divScreen.textContent = divScreen.textContent + "9";
});





btnAdd.addEventListener("click", function () {

    saveNumberOne = parseFloat(divScreen.textContent);
    saveOperator = "add";
    divScreen.textContent = "";
});

btnSubtract.addEventListener("click", function () {

    saveNumberOne = parseFloat(divScreen.textContent);
    saveOperator = "subtract";
    divScreen.textContent = "";
});

btnMultiply.addEventListener("click", function () {

    saveNumberOne = parseFloat(divScreen.textContent);
    saveOperator = "multiply";
    divScreen.textContent = "";
});

btnDivide.addEventListener("click", function () {

    saveNumberOne = parseFloat(divScreen.textContent);
    saveOperator = "divide";
    divScreen.textContent = "";
});

btnEquals.addEventListener("click", function () {

    saveNumberTwo = parseFloat(divScreen.textContent);

    divScreen.textContent = "";

    finalNumber = operateNumbers(saveOperator, saveNumberOne, saveNumberTwo);

    console.log(finalNumber);

    divScreen.textContent = divScreen.textContent + finalNumber;
});

btnClear.addEventListener("click", function () {

    divScreen.textContent = "";
});



