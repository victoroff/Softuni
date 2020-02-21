// Lab - syntax, functions and statements

//ex. String Length
function sumLength(firstWord,secondWord,thirdWord){
    let sum = firstWord.length + secondWord.length + thirdWord.length;
    console.log(sum);

    let avgSUm = Math.floor(sum/3);
    console.log(avgSUm);
}

// 02. math operations
function calculateTwoNums(num1,num2,command){
    let result = 0;
    switch (command) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
        default:
            throw 'bad command';
            break;
    }
    console.log(result);
}

//03. Sum of Numbers N…M
function sumRange(n,m){
    let result = 0;
    for (let i = Number(n) ; i <= Number(m) ; i++){
        result += i;        
    }
    return result;
}


//04. Largest number

function printLargestNum(num1,num2,num3){
    let largestNum =0;
   
    if (num1 > num2 && num1 > num3) {
        leargestNum = num1;
    }
    if (num2 > num1 & num2 > num3) {
        leargestNum = num2;
    }
    if (num3 > num1 && num3> num1) {
        leargestNum = num3;
    }
    console.log(`The largest number is ${leargestNum}.`);
}

//printLargestNum(-3,-5,-22.5);

//05. Circle Area
function CalculateCircleArea(argument){
    if (typeof(argument) === "number") {
        var circleArea = Math.PI * argument * argument;
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(argument)}.`);
    }
    
}

//CalculateCircleArea(5);

//06.Square of Stars
function printStarSquare(size){
    if (size == 0 || size == '' || size == undefined || size == null) {
        size = 5;
    }
    let sqr ='';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            sqr+='* ';
            
        }
        sqr += '\n';
    }
    console.log(sqr);
}
//printStarSquare(20);

//07. Day of Week
function printDayIndex(day){
    switch (day) {
        case 'Monday':
            console.log(1);
            break;
        
        case 'Tuesday':
        console.log(2);
        break;

        case 'Wednesday':
            console.log(3);
            break;

        case 'Thursday':
            console.log(4);
            break;

        case 'Friday':
            console.log(5);
            break;   

        case 'Saturday':
        console.log(6);
        break;   

        case 'Sunday':
        console.log(7);
        break;          
        default:
            console.log('error');
            break;
    }
}

//08 Aggregate Elements
function aggregateElems(arr){

    let sum = 0;
    let invSum = 0;
    let concNums = '';
    for (let i = 0; i < arr.length; i++) {
      //Sum(ai) - calculates the sum all elements from the input array
      sum += Number(arr[i]);
      //Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
      invSum += 1/Number(arr[i]);
      //Concat(ai) - concatenates the string representations of all elements from the array
      concNums += arr[i];
    }
    console.log(sum);
    console.log(invSum);
    console.log(concNums);

}

//aggregateElems([1, 2, 3]);

//09.Words Uppercase
function extractAllWords(str){
    str = str.toUpperCase();
    
    const reg = /[a-zA-Z]+/g;
    const words = str.match(reg);

    let wordsFrm = '';

    for (let i = 0; i < words.length; i++) {
        wordsFrm += words[i];
        if (i != words.length - 1) {
            wordsFrm += ', ';
        }

        
    }
    console.log(wordsFrm);
}

//extractAllWords('hello');

// Lab: Arrays and Matrices

//1.	Sum First Last
function sumFirstAndLast(elements){
    return Number(elements[0]) + Number(elements[elements.length - 1]);
}
//console.log(sumFirstAndLast(['20', '30', '40']));

//2.	Even Position Element
function printOnEvenPositions(elements){
    let result = '';
    for (let i = 0; i < elements.length; i += 2) {
        if (i != elements.length - 1) {
            result += elements[i] + ' ';    
        }else{
            result += elements[i];
        }
    }
    return result;    
}

//console.log(printOnEvenPositions(['20', '30', '40']));

//3.	Negative / Positive Numbers
function sortArray(array){
    let sortedArr = [];
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (number >= 0) {
            sortedArr.push(number);
        } else {
            sortedArr.unshift(number);
        }
    }
    for (let i = 0; i < sortedArr.length; i++) {
        console.log(sortedArr[i]);
    }
}

sortArray([7, -2, 8, 9]);