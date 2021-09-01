/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

    For year = 1905, the output should be
    centuryFromYear(year) = 20;
    For year = 1700, the output should be
    centuryFromYear(year) = 17.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] integer year

    A positive integer, designating the year.

    Guaranteed constraints:
    1 ≤ year ≤ 2005.

    [output] integer

    The number of the century the year is in.
*/
function centuryFromYear(year) {
    while (year <= 2005 && year >= 1) {
        if (year % 100 > 0) {
            return Math.floor((year/100)+1);
        } else {
            return Math.floor((year/100));
        }
    }
}