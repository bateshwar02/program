// HCF find out program

let hcf;
// take input
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);



// charector with frequeency 

const charWithFreq3=(str)=>{

   const arr = str.split('');
   const custObj={};
   const custArr=[];
   arr.forEach((item, index)=>{
       if(index === 0 || custObj[item] === undefined){
           custObj[item]=1;
           return;
       }
     
       custObj[item]=custObj[item]+1;
   
  })

  Object.keys(custObj).forEach(item=>{

    custArr.push(`${item}${custObj[item]}`);
  })
  
console.log('custArr ==============', custArr.join(" "));
}
