// remove array duplicate values

const array = [1,2,3,1,1,1,2,2,3,3,4,4,5,6]

1- using set methods

  const uniqueSet = new Set(array);
  // set {1,2,3,4,5,6}
  const uniqueArray = [...uniqueSet];

OR ||
  
  const uniqueArray = Array.form(new Set(array))
 // [1,2,3,4,5,6]

2- Using Filter 

  const uniqueArr =array.filter((item, index)=> array.indexOf(item) === index );
   

3- Using reduce 

const uniqueArr = array.reduce((unique, item)=>{
     // item = array elelmet
     // unique = unique array
  
    retuen unique.includes(item) ? unique : [...unique, item]
}
                               
-------------------------------------------------------- End Unique Array --------------------------------------------------------------------                               

                               
 // Array Sort decending order

const sortDesc=(arr)=>{
  const customArr=[];
   arr.forEach((item, index)=>{
      const maxElementIndex = customArr.indexOf(Math.max(...customArr));
      if(index === 0 || customArr[index-1]>item){
         customArr.push(item);
         return;
      }
      if(Number(customArr[maxElementIndex]) < Number(item)){
         customArr.splice(maxElementIndex, 0, item);
      } else {
         customArr.forEach((item1, index1)=>{
             if(item>item1 && !customArr.includes(item)){
               customArr.splice(index1, 0, item);
             }
         })
      }
   });
  return customArr;
}                              
                               
----------------------------------------------------------------------------------------------------------------------------------------------------------

// rearrange function


function rearrange(input){

  const dataArr = input.split('');
  const customArr = [];
  const customArr1 = [];
  const customArr2 = [];
  let expression = new RegExp('[A-Za-z0-9]');
  
  dataArr.forEach((item, index)=>{
      
     if(!expression.test(item)){
       customArr1[index]=item
     } else{
       customArr2.push(item)
     }
  })
  
  for(var i=0 ; i<dataArr.length; i++){
    if( customArr1[i] !== undefined){
      customArr.push(customArr1[i]);
    }else{
      customArr.push(customArr2[customArr2.length-1])
      customArr2.pop();
    }
  }
  
  return customArr.join("");
}

console.log(rearrange("*bcd$db&$sd"))
console.log(rearrange("$abc&fds*"))  

----------------------------------------------------------------------------------------------------------------------------------------------------------
