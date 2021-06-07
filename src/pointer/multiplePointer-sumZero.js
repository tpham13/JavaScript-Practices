/*Write a function called sumZero which accepts 
a sorted array of integers. The function should find the first pair 
where the sum is 0. Return an array that includes both values that 
sum to zero or undefined if a pair does not exist */

// Naive Solution: Time Complexity - O(n^2), Space Complexity - O(1)
function sumZero(arr){
    for( let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,3,5])

// Refactor solution: Time Complexity - O(n), Space Complexity - O(1)
function sumZero(arr){
    // lef start at the beginning of the array
    let left = 0;
    // right start at the end of the array
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
sumZero([-4,-3,-2,-1,0,1,2,3,5])