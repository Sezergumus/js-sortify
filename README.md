# `sortify-js` Library

This npm package includes various sorting algorithms. Users can sort an array by providing an array and a sorting order (ascending - "asc" or descending - "desc").

## Installation

```bash
    npm install sortify-js
    # or
    yarn add sortify-js
```

## Usage

1. **Importing the Library:**

   ```javascript
   const sortify = require("sortify-js");
   // or
   import { quickSort, isSorted } from "sortify-js";
   ```

2. **Example Usage:**

   ```javascript
   const sortedArray = sortify.quickSort(array, "asc");
   // or
   const sortedArray = quickSort(array, "asc");

   console.log(sortedArray);
   ```

## Supported Sorting Algorithms

All functions below returns the sorted array

1. `bubbleSort(array, sortOrder = 'asc')`
2. `insertionSort(array, sortOrder = 'asc')`
3. `selectionSort(array, sortOrder = 'asc')`
4. `mergeSort(array, sortOrder = 'asc')`
5. `quickSort(array, sortOrder = 'asc')`
6. `heapSort(array, sortOrder = 'asc')`
7. `radixSort(array, sortOrder = 'asc')`
8. `shellSort(array, sortOrder = 'asc')`
9. `cocktailSort(array, sortOrder = 'asc')`
10. `bogoSort(array, sortOrder = 'asc')`

## Helper Functions

1. `shuffle(array)`: Used to shuffle an array.
2. `isSorted(array, sortOrder)`: Checks if an array is sorted. (Returns `True` or `False`)

## Parameters

- array (Array)
- sortOrder (String) - `'asc'` or `'desc'` (`'asc'` by default)

## Contact

Feel free to reach out for any questions or suggestions.

- Email: [hello@sezergumus.dev](mailto:hello@sezergumus.dev)
