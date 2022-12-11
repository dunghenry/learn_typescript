// private
class Ps {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }
    getId(): number {
        return this.id;
    }
}

const person2 = new Ps(1);
console.log(person2.getId());
// console.log(person2.id) // Error

//public
class Ps1 {
    public id: number;
    constructor(id: number) {
        this.id = id;
    }
    getId(): number {
        return this.id;
    }
}

const person3 = new Ps1(1);
console.log(person3.getId());
console.log(person3.id);

// protected
// protected modifier allows access within the same class and subclasses.
