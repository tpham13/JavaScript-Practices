 function solution(S){
    //  construct an object:
    let lookup = {}
    // first loop: loop through the key & if the key is there, then add 1 
    for(i = 0; i < S.length; i++){
         let letter = S[i];
         lookup[letter] ? lookup[letter] +=1 :lookup[letter] = 1;

         }
         console.log(lookup)
    }
     
    // if the key not there, set key = 0 
    // if key is more than 1, return that key character
 }

 solution("abacdefg")

 countTwice = {
     a: 2,
     b: 1,
     c: 1,
     d: 1,
     f: 1,
     g: 1

 }