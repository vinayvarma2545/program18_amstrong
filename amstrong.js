const number = 153;
const numberOfDigits = number.length;
let sum = 0;

let temp = number;

while (temp>0){
    let remainder = temp % 10;
    sum+=remainder*numberOfDigits;
    temp = parseInt(temp/10);    
}

if(sum==number){
    console.log(`yes`)
}

else{
    console.log(`no`)
}