import React, { useState, useEffect } from 'react';
import  './SortingVisualizer.css';
import { mergeSort } from "../sortingAlgorithm/mergeSort";
import {bubbleSort} from "../sortingAlgorithm/bubbleSort";
import {quickSort} from "../sortingAlgorithm/quickSort";
import {insertionSort} from "../sortingAlgorithm/insertionSort";
import {selectionSort} from "../sortingAlgorithm/selectionSort";

const SortingVisualizer = () => {
    const [ array, setArray ] = useState([]);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        await resetArray();
    }

    const resetArray = async () => {
        const array = [];
        for(let i = 0; i < 310; i++) {
            array.push(randomIntFromInterval(5, 650));
        }
        await setArray(array);
    };

    const mergeSortArray = async () => {
        const animations = mergeSort(array);
        for(let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color = i % 3 === 0 ? 'red' : 'green';
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * 5);
            } else {
                 setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 5);
            }
        }
    }

    const bubbleSortArray = () => {
        const animations = bubbleSort(array);
        for(let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [ count, barOneIdx, barTwoIdx ] = animations[i];
            const isColorChanging = count % 3 !== 2;
            if(isColorChanging) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = count === 0 ? 'red' : 'green';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 1);
            } else {
                setTimeout(() => {
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const barOneHeight = arrayBars[barOneIdx].style.height;
                    const barTwoHeight = arrayBars[barTwoIdx].style.height;

                    barOneStyle.height = `${parseInt(barTwoHeight)}px`;
                    barTwoStyle.height = `${parseInt(barOneHeight)}px`;
                }, i * 1);
            }
        }
    }

    const quickSortArray = () => {
        const animations = quickSort(array);
        for(let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [ count, barOneIdx, barTwoIdx ] = animations[i];
            const isColorChanging = (count === 0 || count === 1);
            if(isColorChanging) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = count === 0 ? 'red' : 'green';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 5);
            } else {
                setTimeout(() => {
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const barOneHeight = arrayBars[barOneIdx].style.height;
                    const barTwoHeight = arrayBars[barTwoIdx].style.height;

                    barOneStyle.height = `${parseInt(barTwoHeight)}px`;
                    barTwoStyle.height = `${parseInt(barOneHeight)}px`;
                }, i * 5);
            }
        }
    }

    const insertionSortArray = () => {
        const animations = insertionSort(array);
        for(let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [ count, barOneIdx, barTwoIdx ] = animations[i];
            const isColorChanging = (count === 0 || count === 1);
            if(isColorChanging) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = count === 0 ? 'red' : 'green';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 1);
            } else {
                setTimeout(() => {
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${parseInt(barTwoIdx)}px`;
                }, i * 1);
            }
        }
    }

    const selectionSortArray = () => {
        const animations = selectionSort(array);
        for(let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [ count, barOneIdx, barTwoIdx ] = animations[i];
            const isColorChanging = (count === 0 || count === 1);
            if(isColorChanging) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = count === 0 ? 'red' : 'green';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 1);
            } else {
                setTimeout(() => {
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const barOneHeight = arrayBars[barOneIdx].style.height;
                    const barTwoHeight = arrayBars[barTwoIdx].style.height;

                    barOneStyle.height = `${parseInt(barTwoHeight)}px`;
                    barTwoStyle.height = `${parseInt(barOneHeight)}px`;
                }, i * 1);
            }
        }
    }
    return (
        <div className="array-container">
            {array.map((value, idx) => (
                <div className="array-bar" key={idx} style={{height: `${value}px`}} />
            ))}
            <button onClick={()=>resetArray()}>Generate New Array</button>
            <button onClick={()=>mergeSortArray()}>Merge Sort</button>
            <button onClick={()=>quickSortArray()}>Quick Sort</button>
            <button onClick={()=>bubbleSortArray()}>Bubble Sort</button>
            <button onClick={()=>insertionSortArray()}>Insertion Sort</button>
            <button onClick={()=>selectionSortArray()}>Selection Sort</button>
        </div>
    )
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
