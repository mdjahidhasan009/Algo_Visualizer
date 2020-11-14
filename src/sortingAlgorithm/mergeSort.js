export function mergeSort(array) {
    const animations = [];
    if(array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

//Will overwrite mainArray with help of auxiliaryArray
function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if(startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(mainArray, startIdx, middleIdx, auxiliaryArray, animations);
    mergeSortHelper(mainArray, middleIdx + 1, endIdx, auxiliaryArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, animations);
}

// function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
function doMerge(mainArray, startIdx, middleIdx, endIdx, animations) {
    let auxiliaryArray = mainArray.slice();
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while(i <= middleIdx && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);
        if(auxiliaryArray[i] <= auxiliaryArray[j]) {
            mainArray[k++] = auxiliaryArray[i++];
            animations.push([k - 1, auxiliaryArray[i - 1]]);
        } else {
            mainArray[k++] = auxiliaryArray[j++];
            animations.push([k - 1, auxiliaryArray[j - 1]]);
        }
    }
    while(i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        mainArray[k++] = auxiliaryArray[i++];
        animations.push([k - 1, auxiliaryArray[i - 1]]);
    }
    while(j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        mainArray[k++] = auxiliaryArray[j++];
        animations.push([k - 1, auxiliaryArray[j - 1]]);
    }
}
