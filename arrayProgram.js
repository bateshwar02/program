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
