const sumAll = function(num1, num2) {
    let sum = 0
    let firstNum = 0
    let secondNum = 0
    if (num1 < num2){
        firstNum += num1
        secondNum += num2
    } else {
        firstNum += num2
        secondNum += num1
    }
    for (let i = firstNum; i <= secondNum; i++ ) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
