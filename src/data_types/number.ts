let first: number = 123; //number
let second: number = 0x37cf; // hexadecimal
let third: number = 0o377; // octal
let fourth: number = 0b111001; // binary

console.log(first, second, third, fourth);
console.log(first.toExponential()); // 1.23e+2

console.log((10.156).toFixed(2)); // 10.16

let price = 1000250000;

console.log(price.toLocaleString('vn-VN')); // 1,000,250,000

console.log((10.5679).toPrecision(1)); //1e+1
console.log((10.5679).toPrecision(2)); // 11

console.log(typeof price.toString()); //string

let num = new Number(1);
console.log(typeof num);
console.log(num); //[Number: 1]
console.log(num.valueOf()); // 1


let bigint: bigint = 9007199254740991n;
