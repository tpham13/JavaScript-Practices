/* Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has 
it's corresponding value squared in the second array. 
The frequency of values must be the same.*/

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// A NAIVE SOLUTION, Time Complexity - N^2
function same(arr1, arr2){
    // check to see if both array has the same length(same amount of element)
    if(arr1.length !==arr2.length){
        // if both array are not the same length, return false and done
        return false; 
    }
    // check each index of arr1, then loop through each index in arr2
    // to see if any index in arr2 is a square of an index in arr1
    for(let i = 0; i < arr1.length; i++){
        /*The indexOf() method returns the first index 
        at which a given element can be found in the array, 
        or -1 if it is not present.*/
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // if the index is not in arr2, then return false
        if(correctIndex === -1) {
            return false; 
        }
        console.log(arr2)
        // if the index is there, then we use slice and remove 1 element at index correctIndex, 
        // and loop to the next index

        arr2.splice(correctIndex, 1)
    }
    return true;
}

console.log(same([1,2,3,2], [9,1,4,4])) //true