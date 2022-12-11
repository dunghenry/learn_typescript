// Not hoisting
const str: string = 'Xin chao';
//str = 'Hehe'; // Cannot assign to 'str' because it is a constant
const employee: { name: string } = {
    name: 'TranDung',
};
employee.name = 'DungTran';
console.log(employee);
