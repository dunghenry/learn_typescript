interface Ps {
    name: string;
}

interface Epl {
    id: number;
    salary: number;
}
interface Developer extends Ps, Epl {
    language: string;
}

let dev: Developer = {
    id: 1,
    name: 'Tom',
    salary: 100,
    language: 'TypeScript',
};
console.log(dev);

type Dev2 = Ps & Epl;

const dev2: Dev2 = {
    id: 2,
    name: 'John',
    salary: 100,
};

console.log(dev2);