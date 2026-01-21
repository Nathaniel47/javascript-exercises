const reverseString = function(str) {
    let arr = str.split('');
    let reversedArr = arr.reverse();
    let reversedStr = reversedArr.join('')

    return reversedStr

};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
