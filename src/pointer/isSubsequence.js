/*
Write afunction called isSubsequence which takes in two strings
 and checks whether the characters in the first string form a 
 subsequence of the characters in the second string. In other words, 
 the function should check whether the characters in the first string 
 appear somewhere in the second string, without their order changing.
*/

/*
Example: 
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true 
isSubsequence('abc', 'abracadabra');// true 
isSubsequence('abc', 'acb'); //false (order matters)
*/

/*
Solution MUST have AT LEAST  the following complexities:
Time: O(N+M)
Space: O(1)
*/

// solution 1: This solution passed the test but did not return accurate value 
function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    if (str2.length < str1.length) return false;
    
    let j = 0;
    
    for (let i = 0; i <= str2.length; i++){
        if (str1[i] !== str2[j]) {
            j++;
        }
    }
    return true
  }

// solution 2: iterative

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

// solution 3: recursive bu tnot O(1) space 

function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }