export const bubbleSort = (array) => {
    const newArray = array.slice();
    const animations = [];
    const arrayLength = array.length;
    let isSwapped = false;
    for(let i = 0; i < arrayLength - 1; i++) {
        isSwapped = false;
        for(let j = 0; j < arrayLength - i - 1; j++) {
            animations.push([0, j, j + 1]);
            animations.push([1, j, j + 1]);
            if(newArray[j] > newArray[j + 1]) {
                animations.push([2, j, j + 1]);
                isSwapped = true;
                let swap = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = swap;
            }
        }
        if(!isSwapped) break;
    }
    return animations;
}
