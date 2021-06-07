/* Write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits. 
Your solution MUST have the following complexities: 
Time: O(n) 
sample input: 
sameFrequency(182, 183) //true
sameFrequency(34, 14) //false
sameFrequency(3589578, 5879385) //true 
sameFrequency(22, 222)// false */



function sameFrequency(first, second){
    // good luck. Add any arguments you deem necessary.
    let num1 = first.toString();
    let num2 = second.toString();
    
    if(num1.length !== num2.length) return false;
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {}; 
    
    for (let value of num1){
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }
    for (let value of num2){
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
    }
    
    for (let key in frequencyCounter1){
        
         if(!(key in frequencyCounter2)){
              return false
          }
        if(frequencyCounter2[key] !==frequencyCounter1[key]){
            return false;
        }
    }
    return true
  }

 
// Using for loops
  function sameFrequency(first, second){
    // good luck. Add any arguments you deem necessary.
    let num1 = first.toString();
    let num2 = second.toString();
    
    if(num1.length !== num2.length) return false;
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {}; 
    
    for(let i = 0; i < strNum1.length; i++){
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    for(let j = 0; j < strNum1.length; j++){
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for (let key in frequencyCounter1){
        
         if(!(key in frequencyCounter2)){
              return false
          }
        if(frequencyCounter2[key] !==frequencyCounter1[key]){
            return false;
        }
    }
    return true
  }
 
 