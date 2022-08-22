Here is the basic idea behind recurcive algorithms;
"To solve a problem, solve a subproblem that is smaller instance of the same problem, and then use the solution to that smaller instance to solve the original problem.

When computing (n!). We solved the problem of computing (n!) (the original problem) by solving the subproblem of computing the factorial of a smaller number, that is, computing (n -1)! (the smaller instance of the same problem), and then using the solution to the subproblem to compute the value of n!.

In order for a recursive algorithm to work, the smaller subproblems must eventually arrive at the base case. When computing (n!) the subproblems get smaller and smaller untill we compute 0!. You must make sure that eventually, you hit the base case.

For example, what if we tried to compute the factorial of a negative number using our recursive method? To compute (-1)!, you would first try to compute (-2)!, so that you could multiply the result by -1. But to comute (-2)!, you would first try to compute (-3)! so that you could multiply the result by -2. And then you would try to compute (-3)! and so on,the numbers are getting smaller, but they are also getting farther & farther away from the base case of comuting (0!). You would never get an answer.

n! = n.(n-1)!

{Palindrome}
A palindrome is a word that is spelled the same backward & forward. For example, Rotor is a Palindrome but Motor is not.

1- If the string is made of no letters or just one letter, then it is a palindrome.
2- Otherwise, compare the first and last letters of the string.
3- If the first & last letters differ, then the string is not a palindrome.
4- Otherwise, the first and last letters are the same, Strip them from the string, and determine whether the string that remains is a palindrome. Take the answer for this smaller string and use it as the answer for the original string.

<!-- Returns the first character of the string -->
var firstCharacter = function(str) {
    return str.slice(0, 1);
}

<!-- Returns the last character of the string -->
var lastCharacter = function(str) {
    return str.slice(-1);
}

<!-- Returns the string that results from removing the first and last characters from str -->
var middleCharacters = function(str) {
    return str.slice(1, -1);
}
var isPalindrome = functuion (str) {
    if (str.length <=1) {
        return true;
    }
    if (firstCharacter(str) !== lasCharacter(str)) {
        return false;
    }
    return true;
}

checkPalindrome("a");
