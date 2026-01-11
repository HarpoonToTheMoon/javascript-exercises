const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    if (num1 > num2) {
        bigger = num1;
        smaller = num2;
    }
    else {
        bigger = num2;
        smaller = num1;
    }

    let answer = 0;
    for (let i = smaller; i <= bigger; i++) {
        answer += i;
    }

    return answer;
};

// Do not edit below this line
module.exports = sumAll;
