function sum1(a: number, b: number): number {
    return a + b;
}

let add: (a: number, b: number) => number;

add = function (a: number, b: number) {
    return a + b;
};

let add2: (a: number, b: number) => number = function (a: number, b: number) {
    return a + b;
};

//TypeScript Optional Parameters

function multiply(a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

//Default parameters

function applyDiscount(price: number, discount: number = 0.05) {
    return price * (1 - discount);
}

// function applyDiscount(price: number, discount: number = 0.05): number {
//     // ...
// }

// function applyDiscount(price: number, discount?: number): number {
//     // ...
// }

// => (price: number, discount?: number) => number

function addNumbers(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + b;
}

///Error
// function addNT(a: number | string, b: number | string): number | string {
//     if (typeof a === 'number' && typeof b === 'number') return a + b;

//     if (typeof a === 'string' && typeof b === 'string') return a + b;
// }

function addNT(a: number, b: number): number;
function addNT(a: string, b: string): string;
function addNT(a: any, b: any): any {
    return a + b;
}

const addNT1 = addNT(1, 2);
console.log(addNT1);

const addNT2 = addNT('1', '2');
console.log(addNT2);

//Method overloading

class Counter {
    private current: number = 1;
    count(): number;
    count(target: number): number;
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let i = this.current; i < target; i++) {
                values.push(i);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}
let counter = new Counter();
console.log(counter.count()); // return a number
console.log(counter.count(20));
