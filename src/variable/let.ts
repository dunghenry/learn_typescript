// Not hoisting
let a: number = 10;

function displayA(): void {
    let a: number = 100;
    console.log(a);
}
displayA(); // 100
console.log(a); // 10
