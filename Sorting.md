Sorting a list of items into ascendening or descending order can help either a human or a computer find items on that list quickly, perhas using an algorithm like a binary search. JavaScript has built-in sorting method. It works on arrays of numbers, or even on arrays of strings.

Var animals = ["gnu", "zebra", "lion", "tiger", "OX", "Fox", "monkey"];
animals.sort();
println(animals);

Even though JS has a built-in sorthing method, sorting is a great example of how there may be many ways to think about the same problem, some perhaps better than others. Understanding sorting is a traditional first step towrads mastery of algorithms and computer science. 

You'll implement a particular sorting algorithm in a moment. But as a wramup, here is a sorting problem to play with. You can swap any pair of cards by clicking on one card, and then the other. Swap cards until the cards are sorted with smallest card on the left.

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex]
    array[firstIndex] = array[firstIndex]
    array[secondIndex] = temp;
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1)

println(testArray);

Program.assertEqual(testArray, [9, 7, 4]);

swap(testArray, 1, 2);
Program.assertEqual(testArray, [9, 4, 7]);

swap(testArray, 0, 2)
Program.assertEqual(testArray, [7, 4, 9]);

{Selection Sort}
There are many different ways to sort the cards. Here's a simple one, called 'Selection sort', possibly similar to how you sorted the cards above;
1- Find the smallest card. Swap it with the first card. 
2- Find the second-smallest card. Swap it with the second card.
3- Find the third-smallest card. Swap it with the third card.
4- Repeat finding the next-smallest card, and swapping it into the correct position untill the array is sorted.

This algorithm is called 'Selection sort' because it repeatedly selects the next-smallest element and swaps it into place.

One of the steps in selection sort is to find the next-smallest card to put into its correct location. For example, if the array initially has values [13, 19, 18, 4, 10], we first need to find the index of the smallest value in the array. Since 4 is the smallest value, the index of the smallest value is 3. 

Selection sort would wrap the value at index 3 with the value at index 0. Giving [4, 19, 18, 13, 10]. Now we need to find the index of the second-smallest value to swap into index 1.

It might be tricky to write code that found the index of the second-smallest value in an array. But there is a better way. Notice that since the smallest value has already been swapped into index 0, what we really want is to find the smallest value in the part of the array that start at index 1. We call a section of an array s subarray, so that in this case, we want the index of the smallest value in the subarray that starts at index 1. 
















