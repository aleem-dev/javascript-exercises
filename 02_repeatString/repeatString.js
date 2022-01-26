const repeatString = function(str, repeatation) {
let text='';
if(repeatation<0){
    return 'ERROR';
}
for (let index = 0; index < repeatation; index++) {
    text += str;
}
return text;
};

// Do not edit below this line
module.exports = repeatString;
