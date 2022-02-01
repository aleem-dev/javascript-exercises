const leapYears = function(num) {
    if(num%4 === 0){
        if(num%100 === 0){
          if(num%100 === 0 && num%400 === 0){
            console.log('leap year');
            return true;
          }else{
          console.log('not a leap year');
          return false;
          }
        }else{
        console.log('leap year');
        return true;
        }
      }
      else{
        console.log('not a leap year');
        return false;
      }
};

// Do not edit below this line
module.exports = leapYears;
