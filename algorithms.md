What is Algorithm?
Algorithm is a set of steps to accomplish a task. In Computer science an algorithm is a set of steps for a computer program to accomplish a task. Algorithms put the science in computer science. 
Finding good algorithms & knowing when to apply them will allow you to write interesting and important programs. 

audio & video compression algorithms
route finding algorithms
randering algorithms
optimization & scheduling algorithms. 
efficient algorithms 

What makes a good algorithm?
1- Correctness
        vs.
2- Efficiency

computer scientist use a technique called asymptotic analysis. Which allowed algorithms to compare independently of a particular programming language or hardware so that we can conclusively say that yes, some algorithms are more effecient than others.

Binary Search: is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you are narrowed down the possible locations to just one. One of the most common ways to use binary search is to find an item in an array. 

The main idea of binary search is to keep track of the current range of reasonable guesses. 
min - minimum reasonable guess
max - maximum reasonable guess
n - number

let min = 1 and max = n.
Guess the average of (max) and (min), rouded down so that it is an integer.
If you guessed the number, stop. You found it. 
If the guess was too low, set (min) to be one larger than the guess
If the guess was too high, set the (max) to be one smaller than the guess.
Go back to step two.

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 31, 37, 41, 43, 47, 53, 59, 61, 71, 73, 79, 83, 89, 97]

we want to know whether the number 67 is prime? if 67 is in the array, then it's prime.
we also want to know how many primes are smaller than 67. 

Let min =0 and max = 24
(0+24)/2 = 12 
is 12 index equal to 67? no its index is 41.
min = 12+1 = 13 and max =24
(13+24)/2 = 18.5

inputs = array
number = n
the number being searched for = target

Pseudocode of Binary Search Algorithm

1- Let min = 0  and max = n-1
2- Compute [guess] as the average of (max) and (min), rounded down (so that its is an integer)
3- If array[guess] equals target, then stop.You found it. Return guess. 
4- If the guess was too low, that is array[guess] < target, then set (min) = guess+1
5- Otherwise, the guess was too high. Set (max) = guess - 1.
6- Go back to step 2.

1- Let min=0 and max=n-1.
2- If max < min, then stop: target is not present in the array. Return -1.
3- Compute guess as the average of max and main, rounded down(so that it is an integer)
4- If array[guess] equals target, then stop. You found it.! Return guess. 
5- If the guess was too low, that is array[guess] < target, then set (min) - guess + 1.
6- Otherwise, the guess was too high. Set max = guess -1.
7- Go back to step 2.

Complete the doSearch function so that it implements a binary search, following the pseudo-code below (this pseudo-code was described in the previous article):
1. Let min = 0 and max = n-1.
2. If max < min, then stop: target is not present in array. Return -1.
3. Compute guess as the average of max and min, rounded down (so that it is an integer).
4. If array[guess] equals target, then stop. You found it! Return guess.
5. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
6. Otherwise, the guess was too high. Set max = guess - 1.
7. Go back to step 2.

var doSearch(array, targetValue){

var min = 0;
var max = array.length-1;
var guess;

while(max >= min){
  guess = floor((max+min)/2);
  if(array[guess]===targetValue){
    return guess;
  }
  else if (array[guess] < targetValue){
    min = guess + 1;
  } 
  else {
    max = guess - 1;
  }
}
return -1;
}

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var resule = doSearch(primes, 73)
println("Found prime at index " + result);


var min =0;
var max =0;
var guess;

while (max >= min){
  guess = floor((max+min)/2)
  if(array[guess] === targetValue){
    return guess;
  } else if(array[guess] < targetValue){
    min = guess + 1;
  } else {
    max = guess + 1;
  }
}

the base 2 logrithm of n (log 2 n)

{Big Omega Notation}
Sometimes we want to say that an algorithm takes at least a certain amount of time, without providing an upper bound. We use big omega notation, that is Greek letter "omega".

If a running time is omega(f(n)), then for large enough n, the running time is at least k.f(n) for some constant k. 

we say that the running time is "big-omega of f(n)." We use big-omega notation for asymptotic lower bounds. So it bounds the growth of the running time from below for large enough input sizes. 

Just as Theta(f(n)) automatically implies O(f(n)), it also automatically implies Omega(f(n)). So we can say that the worst-case running time of binary search is Omega(base 2 lograthim n).

We can also make correct, but imprecise, statments using big-Omega notation. For example, if you really do have a million dollars in your pocket, you can truthfully say"I have an amount of money in my pocket, and it's at leas 10 dollars." That is correct, but certainely not very precise. Similarly, we can correctly but imprecisely say that the worst-case running time of binary search is Omega-1, because we know that it takes at least constant time.

Of course, typically, when we are talking about algorithms, we try to describe their running time as precisely as possible. We provide the examples of the imprecise statements here to help you better understand big-Omega, big-O and big-theta.














































