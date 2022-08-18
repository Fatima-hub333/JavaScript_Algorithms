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
















