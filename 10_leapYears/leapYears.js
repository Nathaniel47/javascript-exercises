const leapYears = function(YEAR) {
  if (YEAR % 400 == 0 ){
    return true;
  }
  else if(YEAR % 100 == 0){
    return false
  }
  else if (YEAR % 4 == 0){
    return true
  }
  else {
    return false
  }
};

// Do not edit below this line
module.exports = leapYears;
