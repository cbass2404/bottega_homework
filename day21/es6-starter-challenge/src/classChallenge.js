export default function(text) {
    return `<div>${text}</div>`;
};

export let greeting = () => 'welcome';

export let arraySum = (arrays) => arrays.reduce((total, array) => total + array, 0);