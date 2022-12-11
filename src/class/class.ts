class Person1 {
    ssn: string;
    firstName: string;
    lastName: string;
    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.lastName = lastName;
        this.firstName = firstName;
    }
    getFullname(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
let person1 = new Person1('171280926', 'John', 'Doe');
console.log(person1);
