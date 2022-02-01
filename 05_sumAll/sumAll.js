const sumAll = function(arg1, arg2) {
    let sum=0;
    let opp1=0;
    let opp2=0; 
    
    //if(!((isNaN(arg1))||(isNaN(arg2)))){ //this logic does not work with "90" test number 5
        if((Number.isInteger(arg1) && Number.isInteger(arg2))){
            if(arg1>=0 && arg2>=0){
                (arg1<arg2)?(opp1=arg1, opp2=arg2):(opp1=arg2, opp2=arg1);
                for (let index = opp1; index <= opp2; index++) {
                sum += index;
            }
            console.log(sum);
            return sum;     
            }else{
                console.log('ERROR');
                return 'ERROR';
            }
        }
    else{
        console.log('ERROR');
                return 'ERROR';
    }
}
// Do not edit below this line
module.exports = sumAll;
