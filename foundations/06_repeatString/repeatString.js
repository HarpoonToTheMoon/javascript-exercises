const repeatString = function(text = '', num = 0) {
    let message = text;

    if (num < 0)
        return 'ERROR';

    if (num === 0)
        return "";

    for (let i = 1; i < num; i++) {
        text = text.concat(message);
    }

    return text;
};

// Do not edit below this line
module.exports = repeatString;
