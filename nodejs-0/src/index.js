'use strict';

const fibonacci = ({ fibonacciParam = [0, 1], maxValue = 350 } = {}) => {
    const [penultElement, lastElement] = fibonacciParam.slice(-2);
    const newElement = lastElement + penultElement;

    if (newElement > maxValue)
        return [...fibonacciParam, newElement];

    return fibonacci({ fibonacciParam: [...fibonacciParam, newElement] });
}

const isFibonnaci = (num) => fibonacci({ maxValue: num }).includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
