/* Write a function that takes in a non-empty array of integers 
that are sorted in ascending order and return a new array of the same 
length with the squares of the original integers also sorted in ascending order.*/

// sample: array =[1, 2, 3, 5, 6, 8, 9]
// sample output: [1, 4, 9, 25, 36, 64, 81]

/* first, sort the array in ascending order.
Then, square each element of the array. 
Then return a new a array. */ 
// solution 1: 
function sortedSquaredArray(array) {
    // create a new array that has the same length as the array, then set the indices to 0;
    const newArray = new Array(array.length).fill(0)
    console.log(newArray)
		for (let i = 0; i < array.length; i++) {
			const value = array[i];
			newArray[i] = value * value;		
		}
	newArray.sort((a, b)=> a - b);
	return newArray;
}