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

function rearrange(input){

  const dataArr = input.split('');
  const customArr = [];
  let expression = new RegExp('[A-Za-z0-9]');
  
  dataArr.forEach((item, index)=>{
      
     if(!expression.test(item)){
       customArr.splice(index, 0, item)
       return;
     } 
     
     if(!expression.test(dataArr[dataArr.length - (index+1)])){
       customArr.splice((dataArr.length - (index+1)), 0, item)
       return
     }
     customArr.push(dataArr[dataArr.length - (index+1)])
  })
  
  return customArr.join("");
}


console.log(rearrange("$abc&fds*"))  
//$sdf&cba*

//expected output = "$sdf&cba*"


console.log(rearrange("*bcd$db&$sd"))

----------------------------------------------------------------------------------------------------------------------------------------------------------
