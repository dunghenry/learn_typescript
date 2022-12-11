function displays(id: number, name: string): void {
    console.log(`Id = ${id}, name = ${name}`);
}

displays(1, 'Dung');

let person: {
    id: number;
    name: string;
    age: number;
};
person = {
    id: 2,
    name: 'John',
    age: 32,
};
console.log(person);
