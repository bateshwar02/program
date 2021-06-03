* Add replaceAll=> 

A new replaceAll method has been added to the String prototype. 
The replaceAll method is a sequel to the String.replace method, which only replaces the first occurrence of the pattern with replacement.

const oldString = 'Bateshar|Nath|Mishra';

const newString = oldString.replaceAll(pattern, replacement);
const string = oldString.replaceAll('|', ' ');
// Bateshwar Nath Mishra


* Add Assignment Operator(??=, ||=, &&=)=>
    
 1-    if(sence === null || sence === undefined){
       sence = 'Learning Programing';
       }

       ??= used by  
       
         sence ??= 'Learning Programing'; 

2- let sence = 'Know Programing';
   
      if(sence){
         sence = 'Sencebale'
      }
 
     &&= used by 
     
     sence &&='Sencebale';

3-  
     
     if(!sence){
      sence = 'Learning Proraming';
     }  
     
     ||= used
    
    sence ||= 'Learning Programing';

Note:  "The important difference between ??= and ||= is that the initial one checks the value for both null or undefined the other one checks just for a falsy value."


------------------------------------------------------------------END ASSIGNMENT -----------------------------------------------------------------------------
  
  * Promise.any() => function Promise.any() which can help us to know which promise object got finished first.
    
    Promise.any() takes an array of promises as an argument. Of all the promises that are resolved, the one which gets resolved first will be returned by Promise.any() . If all the promises are rejected, you will get an error.
    In real life suppose you proposed 3 different people for a date and you want to know which one replied with an affirmative answer first.
    
    const prom1 = new Promise((resolve)=> setTimeOut((resolve)=> resolve, 7000, 'prom1 Said : Realy?');
    const prom2 = new Promise((resolve)=> setTimeOut((resolve)=> resolve, 3000, 'prom2 Said : Noup?');
    const prom3 = new Promise((resolve)=> setTimeOut((resolve)=> resolve, 1000, 'prom3 Said : Sure?');

    Promise.any([prom1, prom2, prom3]).then((values)=>{
       console.log('return key which promise exicute 1st =============', values);
    });


    Promise.any() returned the Kyle because it is the first that was resolved. If all the promises were rejected, we would get an AggregateError that contains the reasons for rejection.

----------------------------------------------------------------Summary-----------------------------------------------------------------------------------------------------------------------------------
  
  
  Summary =>
   
    ** replaceAll() takes two parameters: the character we want to replace and the character we want to replace it by.

    ** replaceAll()allows you to replace all the characters that you specify in a string without using a regex

    ** ES2021 has introduced three useful logical assignment operators: &&= , ||= , and ??=
      
    ** The logical assignment operator ??= checks if the first value is null or undefined. If it is, the second value is assigned to it.  
    
    ** The logical assignment operator ||= is also used between two values. If the first value is not truthy(falsie), the second value will be assigned to it.
    
    ** The logical assignment operator &&= is used between two values. If the first value is truthy, the second value will be assigned to it.

    ** The principal difference between ??= and ||= is that the first one checks the value for both null and undefined another one checks just for a falsy value.
    
    ** Underscores can be used as Numeric Separator.

    ** Promise.any() takes an array of promises as an argument. Of all the promises that are resolved, the one which gets resolved first will be returned by Promise.any() . If all the promises are rejected, you will get an error.




