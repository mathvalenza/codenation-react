'use strict';

const fibonacci = ({ fibonacciParam = [0, 1], maxValue = 350 } = {}) => {
    const lastElement = fibonacciParam[fibonacciParam.length-1];
    const penultElement = fibonacciParam[fibonacciParam.length-2];

    const newSequence = [...fibonacciParam, lastElement + penultElement];

    if (newElement > maxValue)
        return newSequence;

    return fibonacci({ fibonacciParam: newSequence });
}

const isFibonnaci = (num) => fibonacci({ maxValue: num }).includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
};
