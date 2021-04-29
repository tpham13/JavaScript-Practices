function sumNumbers(numbers=[1,3,4,5]) {
    let result = 0; 
    // for of loop

    for(const number of numbers){
       result += number;
    }
    return result
}
// T = 1 + 1 + 1 + n = 3 + n = 3 + 1*n
// T = 1*n
// T = n => 0(n) => Linear Time Complexity 
console.log(sumNumbers([1,2,3,4,6,10]))
