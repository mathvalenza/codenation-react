'use strict';

const fibonacci = ({ fibonacciParam = [0, 1], maxValue = 350 } = {}) => {
    const fibonacciLength = fibonacciParam.length;

    const lastElement = fibonacciParam[fibonacciLength-1];
    const penultElement = fibonacciParam[fibonacciLength-2];
    
    const newElement = lastElement + penultElement;
    const newSequence = [...fibonacciParam, newElement];

    if (newElement > maxValue)
        return newSequence;

    return fibonacci({ fibonacciParam: newSequence });
}

const isFibonnaci = (num) => fibonacci({ maxValue: num }).includes(num);

console.log(fibonacci(450))

module.exports = {
    fibonacci,
    isFibonnaci
}
