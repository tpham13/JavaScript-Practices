/* 
Write a function called averagePair. Given a sorted array of integers 
and a target average, determine if there is a pair of values in the 
array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.
*/

function averagePair(arr, targetSum){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) return false;
    let left = 0; 
    let right = arr.length - 1;
    
    
    while (left < right){
        let tempSum = (arr[left] + arr[right]) / 2;
        if (tempSum === targetSum){
            return true;
        } else if (tempSum > targetSum) {
            right--;
        } else {
            left++
        }
        
    }
    return false
  }
  // if array is empty, return false 
  // create 2 pointers
  //declare a targetSum variable
  // pointer1 start at index 0, pointer 2 starts at the last index
  // add i+j = tempSum
  //if tempSum is more than targetSum then move j, if smaller, then move i
  //if tempSum equal targetSum then return true
  // i   
  // 1,2,3
  //     j
  
  // (1+3) /2 = 2
  // (2+3)/2= 2.5
  
  //         i
  // 1,3,3,5,6,7,10,12,19
  //              j
  // (1+19)/2 = 10
  // (1+12)/2= 6
  // (3+12)/2 = 7
  // (3+12)/2=7
  // (5+12)/2 = 8.5
  // (5+10)/2 = 7.5
  // (6+10)/2 = 8 