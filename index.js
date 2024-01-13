function bubbleSort(array, sortOrder = "asc") {
  if (sortOrder !== "asc" && sortOrder !== "desc") {
    throw new Error("Please provide 'asc' or 'desc' as sortOrder");
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (sortOrder === "asc") {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      } else {
        if (array[j] < array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }

  return array;
}

function insertionSort(array, sortOrder = "asc") {
  if (sortOrder !== "asc" && sortOrder !== "desc") {
    throw new Error("Please provide 'asc' or 'desc' as sortOrder");
  }

  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let temp = array[i];
    if (sortOrder === "asc") {
      while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j];
        j--;
      }
    } else {
      while (j >= 0 && array[j] < temp) {
        array[j + 1] = array[j];
        j--;
      }
    }
    array[j + 1] = temp;
  }

  return array;
}

function selectionSort(array, sortOrder = "asc") {
  if (sortOrder !== "asc" && sortOrder !== "desc") {
    throw new Error("Please provide 'asc' or 'desc' as sortOrder");
  }

  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (sortOrder === "asc") {
        if (array[j] < array[min]) {
          min = j;
        }
      } else {
        if (array[j] > array[min]) {
          min = j;
        }
      }
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }

  return array;
}

function mergeSort(array, sortOrder = "asc") {
  if (sortOrder !== "asc" && sortOrder !== "desc") {
    throw new Error("Please provide 'asc' or 'desc' as sortOrder");
  }

  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid), sortOrder);
  let right = mergeSort(array.slice(mid), sortOrder);

  return merge(left, right, sortOrder);
}

function merge(left, right, sortOrder) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (sortOrder === "asc") {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    } else {
      if (left[i] > right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

function quickSort(array, sortOrder = "asc") {
  if (sortOrder !== "asc" && sortOrder !== "desc") {
    throw new Error("Please provide 'asc' or 'desc' as sortOrder");
  }

  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (sortOrder === "asc") {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    } else {
      if (array[i] > pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  }

  return quickSort(left, sortOrder).concat(pivot, quickSort(right, sortOrder));
}

function heapSort(array, sortOrder = "asc") {
  if (sortOrder !== "asc" && sortOrder !== "desc") {
    throw new Error("Please provide 'asc' or 'desc' as sortOrder");
  }

  let length = array.length;
  let i = Math.floor(length / 2 - 1);
  let k = length - 1;

  while (i >= 0) {
    heapify(array, length, i, sortOrder);
    i--;
  }

  while (k >= 0) {
    let temp = array[0];
    array[0] = array[k];
    array[k] = temp;
    heapify(array, k, 0, sortOrder);
    k--;
  }

  return array;
}

function heapify(array, length, i, sortOrder) {
  let largest = i;
  let left = i * 2 + 1;
  let right = left + 1;

  if (sortOrder === "asc") {
    if (left < length && array[left] > array[largest]) {
      largest = left;
    }

    if (right < length && array[right] > array[largest]) {
      largest = right;
    }
  } else {
    if (left < length && array[left] < array[largest]) {
      largest = left;
    }

    if (right < length && array[right] < array[largest]) {
      largest = right;
    }
  }

  if (largest !== i) {
    let temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;
    heapify(array, length, largest, sortOrder);
  }
}

function radixSort(array, sortOrder = "asc") {
  if (sortOrder !== "asc" && sortOrder !== "desc") {
    throw new Error("Please provide 'asc' or 'desc' as sortOrder");
  }

  let max = Math.max(...array);
  let exp = 1;

  while (max / exp > 0) {
    countingSort(array, exp, sortOrder);
    exp *= 10;
  }

  return array;
}

function countingSort(array, exp, sortOrder) {
  let count = new Array(10).fill(0);
  let output = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    let index = Math.floor(array[i] / exp) % 10;
    count[index]++;
  }

  if (sortOrder === "asc") {
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i--) {
      let index = Math.floor(array[i] / exp) % 10;
      output[count[index] - 1] = array[i];
      count[index]--;
    }
  } else {
    for (let i = count.length - 2; i >= 0; i--) {
      count[i] += count[i + 1];
    }

    for (let i = 0; i < array.length; i++) {
      let index = Math.floor(array[i] / exp) % 10;
      output[count[index] - 1] = array[i];
      count[index]--;
    }
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = output[i];
  }
}

function shellSort(array, sortOrder = "asc") {
  if (sortOrder !== "asc" && sortOrder !== "desc") {
    throw new Error("Please provide 'asc' or 'desc' as sortOrder");
  }

  let gap = Math.floor(array.length / 2);

  while (gap > 0) {
    for (let i = gap; i < array.length; i++) {
      let temp = array[i];
      let j = i;
      if (sortOrder === "asc") {
        while (j >= gap && array[j - gap] > temp) {
          array[j] = array[j - gap];
          j -= gap;
        }
      } else {
        while (j >= gap && array[j - gap] < temp) {
          array[j] = array[j - gap];
          j -= gap;
        }
      }
      array[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return array;
}

function cocktailSort(array, sortOrder = "asc") {
  if (sortOrder !== "asc" && sortOrder !== "desc") {
    throw new Error("Please provide 'asc' or 'desc' as sortOrder");
  }

  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let swapped = false;
    for (let i = start; i < end; i++) {
      if (sortOrder === "asc") {
        if (array[i] > array[i + 1]) {
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      } else {
        if (array[i] < array[i + 1]) {
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
    }
    end--;
    for (let i = end; i > start; i--) {
      if (sortOrder === "asc") {
        if (array[i] < array[i - 1]) {
          let temp = array[i];
          array[i] = array[i - 1];
          array[i - 1] = temp;
          swapped = true;
        }
      } else {
        if (array[i] > array[i - 1]) {
          let temp = array[i];
          array[i] = array[i - 1];
          array[i - 1] = temp;
          swapped = true;
        }
      }
    }
    start++;
    if (!swapped) {
      break;
    }
  }

  return array;
}

function bogoSort(array, sortOrder = "asc") {
  if (sortOrder !== "asc" && sortOrder !== "desc") {
    throw new Error("Please provide 'asc' or 'desc' as sortOrder");
  }

  while (!isSorted(array, sortOrder)) {
    shuffle(array);
  }

  return array;
}

function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    let random = Math.floor(Math.random() * array.length);
    let temp = array[i];
    array[i] = array[random];
    array[random] = temp;
  }
}

function isSorted(array, sortOrder) {
  for (let i = 1; i < array.length; i++) {
    if (sortOrder === "asc") {
      if (array[i - 1] > array[i]) {
        return false;
      }
    } else {
      if (array[i - 1] < array[i]) {
        return false;
      }
    }
  }

  return true;
}

module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
  mergeSort,
  quickSort,
  heapSort,
  radixSort,
  shellSort,
  cocktailSort,
  bogoSort,
  shuffle,
  isSorted,
};
