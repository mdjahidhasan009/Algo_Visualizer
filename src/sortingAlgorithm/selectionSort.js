export const selectionSort = (array) => {
    let animations = [], minIdx = null, temp = null;
    let length = array.length;
    for(let i = 0; i < length - 1; i++) {
        minIdx = i;
        for(let j = i + 1; j < length; j++) {
            animations.push([0, j, minIdx]);
            animations.push([1, j, minIdx]);
            if(array[j] < array[minIdx]) minIdx = j;
        }
        animations.push([2, i, minIdx]);
        temp = array[minIdx];
        array[minIdx] = array[i];
        array[i] = temp;
    }
    return animations;
}
