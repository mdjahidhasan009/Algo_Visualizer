export const insertionSort = (array) => {
    let animations = [], j, key;
    const length = array.length;
    for(let i = 1; i < length; i++) {
        key = array[i];
        j = i - 1;
        while(j >= 0 && array[j] > key) {
            animations.push([0, i, j]);
            animations.push([1, i, j]);
            animations.push([2, (j + 1), array[j]]);
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
        animations.push([3, (j + 1), key]);

    }
    console.log(array);
    return animations;
}
