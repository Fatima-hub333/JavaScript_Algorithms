We will see how to design an algorithm to solve a problem by solving a smaller instance of the same problem, unless the problem is so small that we can just solve it directly. We call this technique recursion.

Recursion has many, many applications. In this module, we'll see how to use recursion to compute the factorial function, to determine whether a word is a palindrome, to compute powers of a number, to draw a type of fractal, and to solve the ancient towers of Hanoi problem. 

{The Factorial Function}
For our first example of recursion, let's look at how to compute the factorial function. We indicate the factorial of (n) by (n!). It's just the product of the integers 1 through n. For example, 5! equals 1.2.3.4.5, or 120. 

Factorial function is very useful for when we're trying to count how many different orders there are for things or how many different ways we can combine things. For example, how many different ways can we arrange (n) things? We have (n) choices for the first thing. For each of these (n) choices, we are left with (n - 1) choices for the second thing, so that we have (n.(n - 1)) choices for the first two things, in order.

Now, for each of these first two choices, we have (n - 2) choices for the third thing, giving us (n.(n - 1). (n - 2)) choices for the first three things, in order. And so on, until we get down to just two things remaining, and then just one thing remaining.

Altogether, we have (n.(n - 1). (n - 2)....2.1) ways that we can order (n) things. And that product is just n!(n factorial), but with the product written going from (n) down to 1 rather than from 1 up to n.

Another use for the factorial function is to count how many ways you can choose things from a collection of things. For example, suppose you are going on a trip and you want to choose which T-shirts to take. Let's say that you own (n) T-shirts but you have room to pack only (k) of them. How many different ways can you choose (k) T-shirts from a collection of (n) T-shirts?The answer turns out to be (n!(k!.(n-k)!)).

The factorial function is defined for all positive integers, along with 0. What value should 0! have? It's the product of all integers greater than or equal to 1 and less than or equal to 0. But there are no such integers. Therefore, we define 0! to equal the identity for multiplication, which is 1. 

(n!/(n!.(n - n)!)) should equal 1. But (n - n)! equals to 0!.

n! is equals to 1 when (n = 0), and it equals 1.2...(n-1).n when (n) is positive.

var factorial = function(n) {
    var result = 1;
    for(var i = result; i <= n; i++>) {
        result = result*i;
    }
    return result;
}

println('The value of 5! should be  " + 5*2*3*2*1);
println("The value of 5! is " + factorial(5));
println("The value of 0! should be 1");
println("The value of 0! is " + factocial(0));

Program.assertEqual(factorial(5), 120);
Program.assertEqual(factorial(0), 1);
Program.assertEqual(factorial(1), 1);
Program.assertEqual(factorial(2), 2);

{Recursive Factorial}
For positive values of (n), let's write (n!) as we did before, as a product of numbers starting from (n) and going down to 1:n! = n.(n-1)...2.1. But notice that (n-1)....2.1 is another way of writing (n-1)!., and so we can say that n! = n.(n - 1)!. 

We wrote (n!) as a product in which one of the factors is (n -1)!. We say that you can compute (n!) by computing(n-1)! and then multilying the result of computing (n - 1)! by n. You can compute the factorial function on (n) by first computing the factorial function on (n -1). We say that computing (n-1)! is a subproblem that we solve to compute n!.

Lets look at an example: computing 5!.
- You can compute 5! as 5.4!.
- Now you need to solve the subproblem of computing 4!., which you can compute as 4.3!.
- Now You need to solve the subproblem of computing 3!. which you can compute as 3.2!.
- Now 2!, which is 2.1!.
- Now you need to compute 1!. You could say that 1! equals 1, because its the product of all the integers from 1 through 1. Or you can apply the formula that 1! = 1.0!. Lets do it by applying the formula.
- We defined 0! to equal 1.
- Now you can compute 1! = 1.0! = 1.
- Having computed 1! = 1, you can compute 2! = 2.1! =2.
- Having computed 2! = 2, you can compute 3! = 3.2! = 6.
- Having computed 3! = 6, you can compute 4! = 4.3! = 24.
- Finally,, having compputed 4! = 24,  you can finish up by computing 5! = 5.4! = 120.

So now we have another way of thinking about how to compute the value of n! for all non-negative integers n:
- if n = 0, then declare that n! = 1.
- Otherwise, (n) must be positive. Solve the subproblem of computing  (n-1)!, multiply this result by (n), and declare (n!) equal to the result of this product.

When we're computing (n!) in this way, we call the first case, where we immediately know the answer, the [base case], and we call the second case, where we have to compute the same function but on a different value, the [recursive case].

var factorial = function(n) {
    var result = n -1;
    <!-- //base case: -->
    if(n===0) {
        return 1;
    }
    <!-- //recursive case: -->
   else if(n >0) {
    for(var i = 1; i < n-1; i++) {
        result = result*i;
    }
    return n*result;
   }
}

var factorial = function(n) {
    var result = n -1;
    <!-- base case -->
    if (n === 0) {
        return 1;
    }
    <!-- recursive case -->
    return factorial(n-1)*n;
};

println("The value of 0! is " + factorial(0) + ".");
println('The value os 5! is  " + factorial(5) + ".");

Program.assertEqual(factorial(0), 1);
Program.assertEqual(factorial(5), 120);
Program.assertEqual(factorial(3), 6);
Program.assertEqual(factorial(4), 24);


Although JavaScript has a builtin (pow) function that computes powers of a number, you can write a similar function recursively, and it can be very effecient. The only hitch is that the exponent has to be an integer. 

Suppose you want to compute x(n), where (x) is any real number and (n) is any integer. It's easy if (n) is 0, since x(0) = 1.

1- The base case is when n = 0, and x(o)=1.
2- If (n) is positive and even, recursively compute y = x (n/2), and then x(n) = y.y. 

Recursion can be an elegant way to solve a problem, and many algorithms lend themselves to recursive solutions. However, recursive algorithms can be inefficient in terms of both time and space. We'll explore several techniques to improve their efficieny here.
We can use a technique called 'Memorization' to save the computer time when making identical function calls. Memorization (a form of coaching) remembers the result of a function call with particular inputs in a lookup table and returns that result when the function is called again with the same inputs.

If n =0, return 1.
Otherwise if n is in memo return the memo value for n
otherwise, 'calculate (n -1)! x n
store result in the memo
return result

Memorization makes a trade-off between time & space. As long as the lookup is efficient and the function is called repeatedly, the computer can save time at the cost of using memory to store the memo.

In the case of the factorial function, an algorithm only benefits from the optimization of memoriazation when a program makes repeated calls to the function during its execution. In some cases, however, memorization can save time even for a single call to a recursive function.

Let's look at a simple example, the algorithm for generating Fibonnaci numbers.
The Fibonnacci sequence is a famous series of numbers where the next number in the sequence is the sum of the previous 2 numbers. The first two numbers in the sequence are defined as 0 and 1. After that, the next number is 1 (from 0 +1) and the number after that is 2 (from 1 + 1) and so on.

The First 10 Fibonnaci numbers:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34

if n is 0 or 1, return n.
Otherwise, return fibonanci(n-1)+ fibonacci ( n - 2)

If n is 0 or 1, return n
Otherwise, if n is in the memo, return the memo's value for n
otherwise, 
Calculate fibonacci(n -1) + fibonacci (n-2)
Store result in memo
Return result

In the case of generating Fibonnaci numbers, an iterative technique called the "bottom-up Approach" can save us both time & space. When using a bottom-up approach, the computer solves the sub-problems first and uses the partial results to arrive at the final result.

A bottom-up approach to Fibonacci number generation looks like this:
if n is 0 or 1, return n
otherwise Create variable twoBehind to remember the result of (n-2) and initialize to 0.
Create variable OneBehind to remember the result of (n - 1) and initialize to 1.
Create variable result to store the final result and initialize to 0.
Repeat (n - 1) times;
Update result to the sum of twoBehind plus oneBehind
Update twoBehind to store the current value of OneBehind
Update oneBehind to store the current value of result
Return result

This approach never makes a recursive call; it instead uses iteration to sum up the partial results and calculate the number. The Bottom-up algorithm has the same O(n) time complexity as the memorized algorithm but it requires just O(1) space since it only remembers three numbers at a time.

{Dynamic Programming}
Memorization & bottom-up are both techniques from dynamic programming, a problem-solving strategy used in mathematics and computer science. Dynamic programming can be used when a problem has optimal substructure and overlapping subproblems. Optimal substructure means that the optimal solution to the problem can be created from optimal solutions of its subproblems. In other words, fib(5) can be solved with fib(4) and fib(3). Overlapping subproblems happen whenever a subproblem is solved multiple times, which we saw when fib(5) made multiple calls to the typically recursive fib(3) and fib(2).

Dynamic programming can be used for a range of problems and invloves techniques besides the ones we learned here. If you're working on a problem with optimal substructure and overlapping subproblems, consider whether a dynamic programming approach may work.















