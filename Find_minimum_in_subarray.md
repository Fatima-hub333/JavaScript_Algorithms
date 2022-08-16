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