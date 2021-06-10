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

// solution 1: brute force approach 
function water(height){
    total = 0; 
    //for every element of the array, except the first and last element
    for (let i = 1; i < height.length - 1; i++){
        //find the max left height
        let maxLeft = height[i];
        for (let j = 0; j < i; j++ ){
            maxLeft = Math.max(maxLeft, height[j])
        }
        //find the max right height
        let maxRight = height[i]
        for (let j = i + 1; j < height.length; j++){
            maxRight = Math.max(maxRight, height[j])
        }
        //update total water value 
        total += Math.min(maxLeft, maxRight) - height[i];
        console.log(maxLeft, height[i], maxRight)

    }
    return total;

}
    

water([0,1,0,2,1,0,1,3,2,1,2,1])
//----------------------------------------------------------------

//solution 2: using pointer
//space is O(n) because we store the leftWall
function waterTrapper(height){
    let leftWall = [0]; //0 is account for that number to the left of the first index that is not in the array
    let rightWall = 0; //calculate in real time
    let totalWater = 0;

    //loop through the array to get the leftWall max height

    for (let i = 1; i < height.length; i++){
        //pushing at every iteration  the max last wall height that we see
        leftWall.push(Math.max(leftWall[i-1], height[i-1]));
//         console.log(`left: ${leftWall[i-1]}, height: ${height[i-1]}`)
    }
    //loop through the array to get the rightWall max height 
    //start at the second to the last index of the array height
    for (let j = height.length - 2; j >= 0; j--){
        //get the max wall height to the right calculate with rightWall and the current height to the right
        rightWall = Math.max(rightWall, height[j+1]);
//         console.log(rightWall)
        let sum = Math.min(rightWall, leftWall[j]) - height[j]
        if (sum > 0) totalWater += sum; 
    }


    return totalWater;
}

waterTrapper([0,1,0,2,1,0,1,3,2,1,2,1])
// waterTrapper([4,2,0,3,2,5])