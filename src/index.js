function sumNumbers(numbers) {
    let result = 0; //run 1
    // for of loop

    for(const number of numbers){ //run 1
       result += number; //run as many time as n
    }
    return result //run 1 
}
// T = 1 + 1 + 1 + n = 3 + n = 3 + 1*n
// T = 1*n
// T = n => 0(n) => Linear Time Complexity 
console.log(sumNumbers([1,2,3,4,6,10]))


// Can we do better? 

function sum(num) {
    return num.reduce((result, curNum) => sum + curNum, 0) //reduce will always gives you linear time complexity
}

console.log(sumNumbers([1,2,3,4,6,10]))
