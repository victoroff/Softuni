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

CalculateCircleArea(5);

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


//Exercise: Syntax, Functions and Statements

//1.	Fruit
function calculateFruitCost(fruit,weight,priceKilo){
    let totalPrice = (weight/1000) * priceKilo;
    let weightKilos = weight/1000;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightKilos.toFixed(2)} kilograms ${fruit}.`);
}
//calculateFruitCost('orange', 2500, 1.80);

// 2.	Greatest Common Divisor - GCD
function computeGCD(x,y){
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        let divisor = y;
        y = x % y;
        x = divisor;
    }
    console.log(x);
}

//computeGCD(15,5);

//3.	Same Numbers
function printSumOfDigits(num){
    let snum = num.toString();
    let digits = snum.split('');
    let sum = 0;
    let allSame = true;

    for (let i = 0; i < digits.length; i++) {
        if (Number(digits[i]) !== Number(digits[i+1]) && i < digits.length-1) {
            allSame = false;
        }
        sum += Number(digits[i]);
    }
    console.log(allSame);
    console.log(sum);
}
//printSumOfDigits(2222222);
//printSumOfDigits(1234);

// 4.	Time to Walk
function calculateTimeToUni(steps,footprint,speed){
    //steps - number of steps
    // footprint in meters
    // speed of student in km/h

    //Every 500 meters the students a rest and takes a 1 minute break.
    let distance = steps * footprint;
    speed = speed / 3.6;

    let rest = Math.floor(distance / 500);
    
    //t = s/v;
    let time = distance / speed;

    let timeMin = Math.floor(time /60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600); 
    //time format 'hours:minutes:seconds'.
    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
    
}

//4000, 0.60, 5
//calculateTimeToUni(2564, 0.70,5.5);

//5.	Calorie Object
function orderFoodByCalories(foodData){
    let foodCatalog = '';

    for (let i = 0; i < foodData.length - 1; i+=1) {
        let foodCatLine = '';
        if (i == 0 ) {
            foodCatLine = '{ ';
        }
        if (i % 2 === 0) {
            
            foodCatLine += foodData[i] + ': ' + foodData[i+1];
            
            if (i < foodData.length - 2) {
                foodCatLine += ', ';
            }else{
                foodCatLine += ' }';
            } 

            foodCatalog += foodCatLine;
        }
        
    }
    console.log(foodCatalog);
}

orderFoodByCalories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);