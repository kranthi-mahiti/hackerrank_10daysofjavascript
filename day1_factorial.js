// Objective

// Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

// Task

// Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

// Input Format

// Locked stub code in the editor reads a single integer, , from stdin and passes it to a function named factorial.

// Constraints
    // 1<=n<=10
// Output Format

// The function must return the value of n!.

// Sample Input 0
// 4
// Sample Output
// 24
// Explanation 0

// We return the value of 4!=4x3x2x1=24.

/*
 * Create the function factorial here
 */
function factorial(num) {
    var inputNum = this.num = num;
    if(inputNum <= 1) {
        return inputNum;
    } else {
        return inputNum * factorial(inputNum -1)
    }
}
factorial(4);


