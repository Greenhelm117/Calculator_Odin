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

