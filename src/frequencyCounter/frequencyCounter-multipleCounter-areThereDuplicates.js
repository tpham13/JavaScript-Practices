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

//solution 1: Using Frequency Counter pattern
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
  
  //solution 2: Using Frequency Counter
  function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }

  //solution 3: multiple  pointers
  function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

  //solution 4: One linear solution
  function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }