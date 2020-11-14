let array;
let animations = [];
export const quickSort = (providedArray) => {
    array = providedArray;
    quickSortHelper(0, providedArray.length - 1);
    return animations;
}

const quickSortHelper = (start, end) => {
    if(start >= end) return;
    let partitionIndex = partition(start, end);
    quickSortHelper(start, partitionIndex - 1);
    quickSortHelper(partitionIndex + 1, end);
}

const partition = (start, end) => {
    let pivot = array[end];
    let i = start - 1;
    let temp;
    for(let j = start; j <= end - 1; j++) {
        animations.push([0, j, end]);
        animations.push([1, j, end]);
        if(array[j] <= pivot) {
            i++;
            temp = array[j];
            array[j] = array[i];
            array[i] = temp;
            animations.push([2, i, j]);
        }
    }
    temp = array[i + 1];
    array[i + 1] = array[end];
    array[end] = temp;
    animations.push([2, i + 1, end]);
    return i + 1;
}
