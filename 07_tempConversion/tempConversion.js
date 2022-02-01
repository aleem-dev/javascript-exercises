const ftoc = function(f) {
  //let c = ((f-32)*(5/9)).toFixed(1);
  let c = Math.round(((f-32)*(5/9))*10)/10;
  console.log(`${f} f =  ${c} c`);
  return c;
};

const ctof = function(c) {
let f = Math.round(((c*(9/5))+32)*10)/10;
console.log(`${c} c = ${f} f`);
return f
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
