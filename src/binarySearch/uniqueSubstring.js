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

// another solution: calculateclass Solution {
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

// s ="aab"
// output = 4

// a => 1
// aa => 3
// aaa => 6
// sliding window pattern