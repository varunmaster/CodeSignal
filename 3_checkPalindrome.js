/*
Given the string, check if it is a palindrome.

Example

    For inputString = "aabaa", the output should be
    checkPalindrome(inputString) = true;
    For inputString = "abac", the output should be
    checkPalindrome(inputString) = false;
    For inputString = "a", the output should be
    checkPalindrome(inputString) = true.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] string inputString

    A non-empty string consisting of lowercase characters.

    Guaranteed constraints:
    1 ≤ inputString.length ≤ 105.

    [output] boolean

    true if inputString is a palindrome, false otherwise.
*/

function checkPalindrome(inputString) {
    if (inputString.length == 1) {
        return true;
    } else {
        let bool = false;
        for(var i = 0; i <= Math.ceil(inputString.length / 2); i++) {
            var len = inputString.length;
            var left = inputString[i];
            var right = inputString[len - i-1];
            if (left == right) {
                bool = true;
            } else {
                bool = false;
            }
        }
        return bool;
    }
}
