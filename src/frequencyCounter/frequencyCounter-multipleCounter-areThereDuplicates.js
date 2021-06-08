/*
Implement a function called, areThereDuplicates which accepts a vaiable number of
arguments passed in. You can solve this using the frequency counter pattern OR
the multiple pointers pattern. 
*/

/*
for examples: 
areThereDuplicates(1,2,3) // false 
areThereDuplicates(1,2,2) //true 
areThereDuplicates('a', 'b', 'c', 'a') // true
*/

function areThereDuplicates(...arg) {
    // good luck. (supply any arguments you deem necessary.)
  
    let lookup = {}
    let newAug = [...arg]
    if (newAug.length === 0 ) return false;
  //   console.log(newAug)
  //   console.log(newAug.length)
    for (let i = 0; i <= newAug.length; i++){
        let random = newAug[i];
        console.log(lookup)
        lookup[random] ? lookup[random] +=1 : lookup[random] = 1;
        if (lookup[random] > 1){
            return true;
        }
    }
    return false;
  }
  