const numbers: number[] = [1, 2, 3];
const fruits: Array<string> = ['Apple', 'Mango', 'Cherry'];
console.log(numbers.length);

const multipleType: (number | string)[] = [1, 'Apple'];

// Access element

for (let index in fruits) {
    console.log(fruits[index]);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log(fruits.push('Strawberry')); //4
console.log(fruits.indexOf('Apple')); //0
console.log(fruits.includes('Apple')); // true

console.log(fruits.splice(0, 1)); // [ 'Apple' ]
console.log(fruits.slice(0, 1)); //[ 'Mango' ]
console.log(fruits); //[ 'Mango', 'Cherry', 'Strawberry' ]

console.log(fruits.splice(1, 0, 'Apple')); //[]
console.log(fruits); //[ 'Mango', 'Apple', 'Cherry', 'Strawberry' ]
