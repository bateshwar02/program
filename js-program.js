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



// majority element of index

const maxElementFrequency=(arr, n)=>{

   const custObj={};
   arr.forEach((item, index)=>{
       if(index === 0 || custObj[item] === undefined){
           custObj[item]=1;
           return;
       }
     
       custObj[item]=custObj[item]+1;
   
  })

  const custArr = Object.values(custObj);
  const maxValue = Math.max(...custArr);

  Object.keys(custObj).forEach(item=>{
       if(maxValue === custObj[item]){
         if(custObj[item]> n/2){
               console.log(item);
            } else{
               console.log("No Majority Element");
            }
       }
       
  })
  
}



//  permutation programs

var permArr = [],
  usedChars = [];

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};


