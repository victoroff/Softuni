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

printLargestNum(-3,-5,-22.5);