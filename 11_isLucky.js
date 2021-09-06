/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

    For n = 1230, the output should be
    isLucky(n) = true;
    For n = 239017, the output should be
    isLucky(n) = false.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] integer n

    A ticket number represented as a positive integer with an even number of digits.

    Guaranteed constraints:
    10 ≤ n < 106.

    [output] boolean

    true if n is a lucky ticket number, false otherwise.
*/
function isLucky(n) {
    //Convert to string to find the middle 
    let middle = n.toString().length/2;
        
    let leftSum = 0;
    let rightSum = 0;
    
    //Loop over the number (which is being converted to string) and then parseInt and add to
    //letfSum. For rightSum, we add var middle to i to get the right-hand side of the number
    //and then we to rightSum.
    for(let i = 0; i < middle; i++) {
        leftSum += parseInt(n.toString()[i]);
        rightSum += parseInt(n.toString()[i+middle]);
    }
    
    return (leftSum === rightSum);
}
