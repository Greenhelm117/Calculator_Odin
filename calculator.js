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
        addNumbers(numberA, numberB);
    }
    else if(operator === 'subtract')
    {
        subtractNumbers(numberA, numberB);
    }
    else if(operator == 'multiply')
    {
        multiplyNumbers(numberA, numberB);
    }
    else if(operator == 'divide')
    {
        divideNumbers(numberA, numberB);
    }

}

///////////////

//Add Number to Screen Function
const divScreen = document.querySelector('.displayScreen');

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

const btnAdd = document.querySelector("#add");
const btnSubtract = document.querySelector("#subtract");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");
const btnEquals = document.querySelector("#equals");
const btnClear = document.querySelector("#clear");


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






