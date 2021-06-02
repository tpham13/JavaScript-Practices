
class Solution {
    solve(s) {
        let left = 0;
        let right = 0;
        let solution = 0;

        while (right < s.length) {
            solution += 1;
            if (left === right) {
                right++
            } else if (s[left] === s[right]) {
                solution += (right - left);
                right++;
            } else {
                right = right + 1;
                left = right - 1;
            }
        }

        return solution;

    }
}
/* Given a lowercase alphabet string s, 
return the total number of substrings that contain one unique character.

Constraints

n ≤ 10,000 where n is the length of s.

Example: 
Input: s = "aab"
output: 4

*/


// s ="aab"
// output = 4

// a => 1
// aa => 3
// aaa => 6
// sliding window pattern 