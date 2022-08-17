There are many different ways to sort. As selection sort runs, the subarray at the beginning of the array is sorted, but the subarray at the end is not. Selection sort scans the unsorted subarray for the next element to include in the sorted subarray.

Here's another way to think about sorting. Imagine that you are playing a card game. You're holding the cards in your hand, and these cards are sorted. The dealer hands you exactly one new card. You hav eto ut it into the correct place so that the the cards you're holding are still sorted. 

In selection sort, each element that you add to the sorted subarray is no smaller than the elements already in the sorted subarray. But in our card example, the new card could be smaller than some of the cards you're already holding, and so you go down the line, comparing the new card against each card in your hand, until you find the place to put it. You insert the new card in the right place, and once again, your hand holds fully sorted cards. Then the dealer gives you another card, and you repeat the same procedure. Then another card, and another card, and so on, until the dealer stops giving you cards.

This is the idea behind {insertion sort}. Loop over positions in the array, starting with index 1. Each new position is like the new card handed to you by the dealer and you need to insert it into the correct place in the sorted subarray to the left of that position. 

In terms of arrays, imagine that the subarray from index 0 through index 5 is already sorted, and we want to insert the element currently in index 6 into this sorted subarray, so that the subarray from index 0 through index 6 is sorted. 

To insert the element in position 6 into the sorted subarray to its left, we repeatedlly compare it with elements to its left, going right to left. Let's call the element in position 6 the {key}. Each time we find that the key is less than an element to its left, we slide that element one position to the right, since we know that the key will have to go to that element's left. We'll need to do two things to make this idea work: we need to have a slide opeartion that slides an element one position to the right, and we need to save the value of the key in a seperate place (so that it doesn't get overridden by the element to its immediate left). In our example lets pull the element at index 6 into a variable called key.


var insert = function(array, rightIndex, value) {
    for(var i = rightIndex; i >= 0 && array[i] > value; i--) {
        array[i + 1] = array[i];
    }
    array[i + 1] = value;
};

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
println("Array after inserting 2:   " + array);
Program.assertEqual(array, [2, 3, 5, 7, 11, 13, 9, 6]);

insert(array, 5, 9);
println("Array after inserting 9:  " + array);
Program.assertEqual(array, [2, 3, 5, 7, 9, 11, 13, 6]);

insert(array, 6, 6);
println("Array after inserting 6:  " + array);
Program.assertEqual(array, [2, 3, 5, 6, 7, 9, 11, 13]);

{Insertion Pseudocode}
1- Call {insert} to insert the element that starts at index 1 into the sorted subarray in index 0.
2- Call {insert} to insert the element that starts at index 2 into the sorted subarray in indices 0 through 1.
3- Call {insert} to insert the element that starts at index 3 into the sorted subarray in indices 0 through 2.
4- ........
5. Finally, call {insert} to insert the element that starts at index n - 1 into the sorted subarray in indices 0 through n-2.


var insert = function(array, rightIndex, value){
    for(var j = rightIndex; j >=0 && array[j]>value; j--) {
        array[j + 1] = array[j];
    }
    array[j+1] = value;
};

var insertionSort = function(array) {
for(var i = 1; i < array.length; i++){
    insert(array, i-1, this.array[i]);
}
};

var array=[22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array=[89, 56, 87, 28, 10, 46, 33];
insertionSort(array);
Program.assertEqual(array, [10, 28, 33, 46, 56, 87, 89]);

{Analysis of Insertion Sort}
Like selection sort, insertion sort loops over the indices of the array. It just calls {insert} on the elements at indices 1, 2, 3, .... , n - 1. Just as each call to {indexOfMinimum} took an amount of time that depended on the size of the sorted subarray, so does each call to {insert}. Actually, the word "does" in the previous sentence sholud be "can" and we'll see why. 









