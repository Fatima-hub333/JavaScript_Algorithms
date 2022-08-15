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

{Big O Notation}
We use Big-O Notation to asymptotically bound the growth of a running time to within constant factors above and below. Sometimes we want to bound from only above. 

For example, although the worst-case running time of binary search is O(log2 n), it would be incorrect to say that binary search runs in O(log2 n) time in all cases. What if we find the target value upon the first guess? Then it runs in O(1) time. The running time of binary search is never worse than O(log2 n), but it's sometimes better.

It would be convenient to have a form of asymptotic notation that means"the running time grows at most this much, but it could grow more slowly." We use "big-O"notation for just such occasions.

If a running time is O(f(n)), then for large enough n, the running time is at most k.f(n) for some constant k. 

We say that the running time is "big-O of f(n)" or just "O of f(n)". We use big-O notation for asymptotic upper bounds, since it bounds the growth of the running time from above for large enough input sizes.

Now we have a way to characterize the running time of binary search in all cases. We can say that the running time of binary search is always O(log2 n). We can make a stronger statement about the worst-case running time: it's Theta(log2 n). But for a blanket statement that covers all cases, the strongest statement we can make is that binary serch runs in O(log2 n) time.

If you go back to the definition of big-theta notation, you will notice that it looks a lot like big-O notation, except that big-Theta notation bounds the running time from both above and below, rather than just from above. If we say that a running time is Theta(f(n)) in a particular situation, then it's also O (f(n)). For example, we can say that because the worst-case running time of binary search is Theta(log2 n), it's also O(log2 n).

The converse is not necessarily true: as we've seen, we can say that binary search always runs in O(log2 n) time but not that it always runs in Theta(log2 n) time. 

Because big-O notation gives only an asymptotic upper bound, and not an asymptotically tight bound,we can make statements that at first glance seem incorrect, but are technically correct. For examples, it is absolutely correct to say that binary search runs in O(n) time. That's because the running time grows faster than a constant times n. In fact, it grows slower. 

Think of it this way. Suppose you have 10 dollars in your pocket. You go up to your friend and say "I have an amount of money in my pocket and I guarantee that it's no more than one million dollars." Your statement is absolutely true, though not terribly precise. 

One million dollar is an upper bound on 10 dollars, just as O(n) is an upper bound on the running time of binary search. Other, imprecise, upper bounds on binary search would be O(n2), O(n3) and O(2n). But none of theta(n), theta(n2), Theta(n3), and theta(2n) wolud be correct to describe the running time of binary search in any scase.

































































