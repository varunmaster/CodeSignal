/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.string inputArray

    A non-empty array.

    Guaranteed constraints:
    1 ≤ inputArray.length ≤ 10,
    1 ≤ inputArray[i].length ≤ 10.

    [output] array.string

    Array of the longest strings, stored in the same order as in the inputArray.
*/
function allLongestStrings(inputArray) {
    // let longestStringLen = 0;
    // let longestStrings = [];
    
    // for(var i = 0; i < inputArray.length; i++) {
    //     if (inputArray[i].length >= longestStringLen) {
    //         longestStringLen = inputArray[i].length;
    //     }
    // }
    
    // for(var i = 0; i < inputArray.length; i++) {
    //     if (inputArray[i].length === longestStringLen) {
    //         longestStrings.push(inputArray[i]);
    //     }
    // }
    let longestWord = inputArray.sort((a, b) => {
        return b.length - a.length;
    })[0];
    
    let longestStrings = [];
    
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === longestWord.length) {
            longestStrings.push(inputArray[i]);
        }
    }
    
    return longestStrings;
}
