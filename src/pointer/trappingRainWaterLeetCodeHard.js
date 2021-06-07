/*Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining. 
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is 
represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 
6 units of rain water (blue section) are being trapped.

Input: height = [4,2,0,3,2,5]
Output: 9

https://leetcode.com/problems/trapping-rain-water/
*/

/* thought on solution: 
- edge cases: what if there's no wall height, then return 0. 
What if the wall height is all the same height and there's no space in between?, then return 0. 
 
- the max height of the water that can be filled cannot exceed the 
max height of the wall */
function trap(height){
    // edge case:
    if(!height.length) return 0;
    // initialize variables sum, wallHeight, maxHeight, heightIndex
    let sum = 0; 
    // wall height is the current height of of the wall
    let wallHeight = 0;
    let maxHeight = height[0];
    // we will set the heightIndex to the index of the max Height of the array
    let heightIndex = 0;
    // find the index of the highest height in heights 
    for (let i = 0; i < height.length; i++){
        // calculate the highest elevation of the array
        if (heigh[i] > maxHeight) {
            maxHeight = height[i];
            heightIndex = i
        }
    }
    // loop over heights until the highest index 
    // if current height is taller than wallHeightm wall height = current height
    // at each index, find the difference between the current height and the wall height
    
    return sum
}