interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (a: number) => number;
    getManager(a: number): string;
}

interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = {
    key: 1,
    value: 'Reactjs',
};

interface KeyValueProcessor {
    (key: number, value: string): void;
}

function addKeyValue(key: number, value: string): void {
    console.log(`Add key ${key}, value ${value}`);
}

function updateKeyValue(key: number, value: string): void {
    console.log(`Update key ${key}, value ${value}`);
}
let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill');

kvp = updateKeyValue;

// Array
interface NumList {
    [index: number]: number;
}

let numArr: NumList = [1, 2, 3, 4, 5];
console.log(numArr);

interface IStringList {
    [index: string]: string;
}

let strArr: IStringList = {};
strArr['TS'] = 'TypeScript';
strArr['JST'] = 'JavaScript';
console.log(strArr);

interface Citizen {
    name: string;
    readonly SSN: number;
}

let personObj: Citizen = { SSN: 0, name: 'John' };
console.log(personObj);

// Extending Interface

interface IIPerson {
    name: string;
    gender: string;
}
interface IIEmployee extends IIPerson {
    empCode: number;
}

let employe: IIEmployee = {
    empCode: 11,
    name: 'Bill',
    gender: 'male',
};

console.log(employe);

//Implement interface

interface IPerson {
    name: string;
    age: number;
    getAge: (code: number) => number;
}

class Person implements IPerson {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getAge(): number {
        return this.age;
    }
}

let s: Person = new Person('Dung', 21);
console.log(s.getAge());


// class extends class implements interface