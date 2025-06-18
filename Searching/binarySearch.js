function binarySearch(arr, key) {
  // Initialize pointers for the left and right boundaries of the search range
  let left = 0;
  let right = arr.length - 1;
  let mid;

  // Continue the search as long as the left boundary does not exceed the right boundary
  while (left <= right) {
    // Calculate the middle index of the current range
    mid = Math.floor((right + left) / 2);

    // Check if the middle element is the key we are searching for
    if (arr[mid] == key) {
      return mid; // Return the index of the found element
    }

    // If the key is smaller than the middle element, search in the left subarray
    if (arr[mid] > key) {
      right = mid - 1;
    } else {
      // If the key is larger than the middle element, search in the right subarray
      left = mid + 1;
    }
  }

  // If the loop ends without finding the key, return -1 to indicate not found
  return -1;
}

// Sample input array (sorted in ascending order)
let arr = [2, 3, 4, 10, 40];

// Key to be searched in the array
let key = 10;

// Call the binarySearch function and store the result
let result = binarySearch(arr, key);

// Print the result: whether the key is found and its position, or not found
(result == -1) ?
  console.log("Element is not present") :
  console.log("Element is present at index " + result);
