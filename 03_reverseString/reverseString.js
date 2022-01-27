const reverseString = function(str) {
    let buff = '';
    for (let index = str.length; index >= 1; index--) {
    buff += str.slice((index-1),index);    
        }
  return buff;
};

// Do not edit below this line
module.exports = reverseString;
