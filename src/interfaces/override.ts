interface Animal {
    id: number;
}

interface Dog {
    name: string;
    leg: number;
}

interface BabyDog extends Animal, Omit<Dog, 'leg'> {
    leg: string;
}
const dog: BabyDog = {
    id: 1,
    name: 'Bayby Dog',
    leg: 'four',
};

interface BabyDog2 extends Animal, Omit<Dog, 'leg' | 'name'> {
    leg: string;
    name: number;
}
const babydog2: BabyDog2 = {
    id: 1,
    name: 2,
    leg: 'four',
};
console.log(babydog2);
interface Cat {
    name: string;
    leg: number | string;
}

interface BabyCat extends Cat, Animal {
    leg: string;
}
const cat: BabyCat = {
    id: 1,
    name: 'Baby cat 1',
    leg: 'four',
};
