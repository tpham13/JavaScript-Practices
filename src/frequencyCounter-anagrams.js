/* Given two strings, 
write a function to determine if the second string is 
an anagram of the first. 
An anagram is a word, phrase, or name formed by 
rearranging the letters of another, such as cinema, formed from iceman. */
// Assume, they're all lowercase letter, not space, single word

// example
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

/* solve this using an OBJECT, then
construct it using a loop that's not nested to still
maintain O(n)
*/
// input: 2 strings
function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
  //   check if str1 has the same length as str2 & same characters
  if(str1.length !== str2.length){
      return false
  }
  // create an object call lookup
  let lookup = {}
//   construct the object first
  for (let i = 0; i < str1.length; i++){
      letter = str1[i]
    //if letter exits, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)
  for (let i = 0; i < str2.length; i++){
      let letter = second[i];
    //   can't find letter of letter is zero then it's not an anagram
      if (!lookup[letter]) {
          return false;
      } else {
          lookup[letter] -= 1;
      }
    return true;
  }
}

  validAnagram('anagram', 'nagaram') 

