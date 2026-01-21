const repeatString = function(str, numOfTimes) {

    if (numOfTimes < 0) {
        return ("ERROR")
    }

    let output = "";

    while (numOfTimes > 0){
     output += str;
    numOfTimes--;
}
return output;

};

// Do not edit below this line
module.exports = repeatString;
