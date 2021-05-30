/* Write a function that takes in a non-empty array of distinct ingegers 
and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, 
the function should return them in an array, in any order.
If no two numbers sum up to the target sum, the function should return 
an empty array. 
Note that the target sum has to be obtained by summing two different itegers in the array; 
you can't add a single integer to itself in order to obtain the target sum. 
You can assume that there will be at most one pair of numbers 
summing up to the target sum.*/

/* examp input: 
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10 
*/

// Solution 1: using two "for loop" to  sum all possible pairs of numbers in the input array. 
// O(n ^ 2) time | O(1) space
function twoNumberSum(array, targetSum){
    for (let i = 0; i < array.length - 1; i++) {
        const firstNum = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const secondNum = array[j];
            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum]
          	}
        }
    	}
    return [];
}

// Solution 2: Time O(n) b/c we tranverse through the array once, Space O(1)
function twoNumberSum(array, targetSum){
    const nums = {};
    for (const num of array) {
        const potentialMatch = targetSum - num; 
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        } else {
            nums[num] = true; 
        }
    }
    return [];
}

// Solution 3: Time O(nlog(n)), sort the array and create 2 pointers (left, right)
function twoNumberSum(array, targetSum){
    array.sort((a,b) => a - b); 
    let left = 0; 
    let right = array.length - 1;
    while (left < right) {
        currentSum = array[left] + array[right]
        if (currentSum === targetSum){
            return [array[left], array[right]];
        } else if (currentSum < targetSum) {
            left ++;
        } else if (currentSum > targetSum) {
            right++;
        }
    }
    return []
}