class Animal1 {
    leg: number;
    constructor(leg: number) {
        this.leg = leg;
    }
    public run(): string {
        return 'Running';
    }
    protected getLeg(): number {
        return this.leg;
    }
}
class Cat1 extends Animal1 {
    name: string;
    constructor(leg: number, name: string) {
        super(leg);
        this.name = name;
    }
    public run(): string {
        return this.name + ' ' + super.run();
    }
    public getLeg(): number {
        return super.getLeg();
    }
}

const cat1 = new Cat1(4, 'Cat');
console.log(cat1);
console.log(cat1.run());
console.log(cat1.getLeg());
