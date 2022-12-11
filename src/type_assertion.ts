let id: any = 123;
let idCode = <number>a;
console.log(typeof idCode);

//Object

interface Person {
    id: number;
    name: string;
}

let ps = <Person>{};
ps.id = 1;
ps.name = 'Dung';

//add all field
let ps2: Person = {
    id: 2,
    name: 'Dung',
};

let data = code as number;
