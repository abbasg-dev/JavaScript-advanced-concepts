function mergeSortedArrays(array1, array2) {
  // Initialize an empty array to hold the merged sorted elements
  const mergedArray = [];

  // Get the first element of array1 and array2 for comparison
  let array1Item = array1[0];
  let array2Item = array2[0];

  // Initialize pointers to track positions in array1 and array2
  let i = 1; // Start from the second element of array1
  let j = 1; // Start from the second element of array2

  // Handle edge cases where one of the arrays is empty
  if (array1.length === 0) {
    return array2; // If array1 is empty, return array2 as is
  }
  if (array2.length === 0) {
    return array1; // If array2 is empty, return array1 as is
  }

  // Loop until all elements from both arrays are merged
  while (array1Item || array2Item) {
    // Check if array2 is exhausted or if array1Item is smaller
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item); // Add array1Item to mergedArray
      array1Item = array1[i]; // Move to the next item in array1
      i++; // Increment the pointer for array1
    } else {
      // Add array2Item to mergedArray if it's smaller or equal
      mergedArray.push(array2Item);
      array2Item = array2[j]; // Move to the next item in array2
      j++; // Increment the pointer for array2
    }
  }

  // Return the final merged and sorted array
  return mergedArray;
}

// Example usage
const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log(result); // Output: [0, 3, 4, 4, 6, 30, 31]
