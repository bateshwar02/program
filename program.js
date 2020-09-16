Qst 1:  Create an Array from 0...100 without using.

 Ans:  const arr = Array(101).fill().map((element, index) => index);
    
    //   output = [0,1,2......100]
       
       
       

Qst2:  Create an Array of only even numbers from the above array ( arr);

 const evenArray = arr.map((el, index)=>{
		    if(index>0 && index%2===0){
		       return index;
		    }
		}).filter(Number);




Question 3: create an array of even squares using the previous array

  // create a function which return promise of squre of even number

   const getEvenSqr = (input)=>{
   return new Promise((resolve, reject) => {
             try{
              if(input>0 && input%2===0){
                 resolve(input*input);
              }else{
                reject(0)
              }
             }catch(e){reject(0)}
           
        });
   }   

   const sqrArr = []
   evenArray.forEach(async (val)=>{
	await getSqr(val).then((res)=>{
		    sqrArr.push(res)
		})
	})
   
// Output  sqrArr= array of squre of even number.


Question 4: Sum of all the squares from the above array of Even Squares

  // create a function for sum of array
  
   const getSum = (total, num) => {
    return total + Math.round(num);
  }

   const arrSum = sqrArr.reduce(getSum, 0);



Question 5: Call the above square Promise function with all numbers from 0-100

   let noOfErr = 0;
   const finalSqrArr = []
  
   arr.forEach(async(val)=>{
   await getSqr(val).then((res)=>{
	   finalSqrArr.push(res)
       }).catch(err => noOfErr=noOfErr+1) 
   })
   
   // resultant Array = finalSqrArr
   // No of error = noOfErr
   // No Of Array Object = finalSqrArr.length
