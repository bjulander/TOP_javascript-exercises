const removeFromArray = function(someArray, singleElement) {
    let index = someArray.indexOf(singleElement)
    someArray.splice(index, 1)
    return someArray
};

// Do not edit below this line
module.exports = removeFromArray;
