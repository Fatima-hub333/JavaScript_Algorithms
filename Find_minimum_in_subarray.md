Finish writing the function {indexofMinimum}, which takes an array and a number {startIndex} and returns the index of the smallest value that occurs with index {startIndex} or greater. If this smallest value occurs more than once in this range, then return the index of the leftmost occurrence within this range.

Var indexOfMinimum = function(array, startIndex) {
  <!-- // set initial values for minValue and minIndex, -->
  based on the leftmost entry in the subarray;

  var minValue = array[startIndex];
  var minIndex = startIndex;

  <!-- // Loop over items starting with startIndex, -->
  <!-- // Updating minValue and minIndex as needed: -->
  for (var i = minIndex +1; i < array.length; i++) {
  if (array[i] < minValue) {
  minIndex = i;
  minValue = array[i];
  }
  }

  return minIndex;
  };

  var array = [18, 6, 66, 44, 9, 22, 14];
  var index = indexOfMinimum(array, 2);

  println("The index of the minimum value of the subarray starting at index 2 is " + index + ".");

  Program.assertEqual(index, 4);
  Program.assertEqual(indexOfMinimum(array, 3), 4);
  Program.assertEqual(indexOfMinimum(array, 0), 1);
}


var swap = function(array, firstIndex, secondIndex){
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
  var minValue = array[startIndex]
  var minIndex = startIndex;

  for(var i = minIndex + 1; i < array.length; i++){
    if(array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
}

var selectionSort = function(array) {
  var sortArray;
  for(var i = 0; i < array.length; i++){
    sortArray = indexOfMinimum(array, i);
    swap(array, i, sortArray);
  }
}

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting: " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var backward = [340, 250, 450, 500];
selectionSort(backward);
program.assertEqual(array, [250, 340, 450, 500]);

var samething = [250,250,300,200];
selectionSort(samething);
Program.assertEqual(samething, [200, 250, 250, 300]);

var loneStar = [150,110,200,201];
selectionSort(loneStar);
Program.assertEqual(loneStar, [110, 150, 200, 201, ]);


{Selection Sort Loop}
Selection sort loops over indices in the array; for each index, selection sort calls {indexOfMinimum} and {swap}. if the length of the array is n, there are (n) indices in the array.

Since each execution of the body of the loop runs two lines of code, you might think that 2n lines of code are executed by selection sort. But it's not true!. Remember that indexofMinimum and swap are functions: when either is called, some lines of code are executed.

How many lines are executed by a single call to {swap}? In the usual implementation, it's three lines, so that each call to swap takes Constant time.

How many lines of code are executed by a single call to {indexOfMinimum}? We have to account for the loop inside {indexofMinimum}. How many times does this loop execute in a given call to {indexOfMinimum}? It depends on the size of the subarray that it's iterating over. If the subArray is the whole array (as it is on the first step), the loop body runs (n) times. If the subarray is of size 6, then the loop body runs 6 times.

For example, lets say the whole array is of size 8 and think about how Selection sort works.

1- In the first call of {indexOfMinimum}, it has to look at every value in the array, and so the loop body in {indexOfMinimum} runs 8 times.

2- In the second call of {indexOfMinimum}, it has to look at every value in the subarray from indices 1 to 7, and so the loop body in {indexOfMinimum} runs 7 times.

3- In the third call, it looks at the subarray from indices 2 to 7; the loop body runs 6 times.

4- In the fourth call, it looks at the subarray from indices 3 to 7; the loop body runs 5 times.

5- .....................

6- In the eight and final call of indexofMinimum, the loop body runs just 1 time.

If we total up the number of times the loop body of {indexOfMinimum} runs, we get 8 + 7+ 6+ 5 + 4+ 3+ 2+ 1 = 36 times.

Arithmetic Series: The sum of the smallest and largest numbers is n + 1. (n + 1) (n/2)