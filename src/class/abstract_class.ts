abstract class E {
    constructor(public firstName: string, public lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    abstract getSalary(): number;
}

class F extends E {
    constructor(public firstName: string, public lastName: string, public salary: number) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getSalary(): number {
        return this.salary;
    }
}

let john = new F('John', 'Doe', 12000);
console.log(john);
console.log(john.getSalary());


class Customer {
    isCreditAllowed(): boolean {
        return true;
    }
}

function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer;
}
