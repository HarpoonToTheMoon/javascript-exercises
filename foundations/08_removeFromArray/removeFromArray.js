const removeFromArray = function(array, ...theArgs) {
    for (const arg of theArgs) {
        array = array.filter( arr => arr !== arg)
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
