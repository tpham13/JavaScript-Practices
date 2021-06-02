
class Palindrome {
    solve(s) {
        let checkString = s.replace(/[^a-z]/g, '');
        let i = 0;
        let j = checkString.length - 1;
        while (i <= j) {
            if (checkString[i] === checkString[j]) {
                i += 1;
                j -= 1;
            } else {
                return false;
            }
        }
        return true;
    }
}
/* You are given a string s containing lowercase and uppercase 
alphabet characters as well as digits from "0" to "9". Return whether s 
is a palindrome if we only consider the lowercase alphabet characters.

Constraints

0 ≤ n ≤ 100,000 where n is the length of s 

example:
input: s = "a92bcbXa"
output: True

explanation: If we only consider the lowercase characters, then s is 
"abcba" which is a palindrome.*/