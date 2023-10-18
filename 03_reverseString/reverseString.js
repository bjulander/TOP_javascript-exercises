const reverseString = function(newString) {
    let reverseWord = ""
for (let i = newString.length - 1; i >= 0; i--){
    reverseWord += newString[i]
}
return reverseWord
};

// Do not edit below this line
module.exports = reverseString;
