const removeFromArray = function(arr, num) {
  let arg= arguments;
  let ar = arguments[0];
    for (let i = 0; i < arg.length; i++) {
        for (let index = 0; index < ar.length; index++) {
            if (ar[index]===arguments[i+1]) {
                //arr.splice(index,1);
                ar.splice(index,1);
                console.log(ar);   
            }
        }
    }
return ar;
};

// Do not edit below this line
module.exports = removeFromArray;
