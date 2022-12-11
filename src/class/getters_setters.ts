class Animal {
    public name: string;
    public age: number;
    public leg: number;
    constructor(name: string, age: number, leg: number) {
        this.name = name;
        this.age = age;
        this.leg = leg;
    }
    public get getName(): string {
        return this.name;
    }
    public set setName(value: string) {
        this.name = value;
    }
}
const husky = new Animal('Husky', 1, 4);
console.log(husky);
husky.setName = 'Baby Husky';
console.log(husky);
console.log(husky instanceof Animal); //true
