let something: any = 'Hello';
something = 123;
something = true;

let arr: any[] = ['John', 1, true];
let object: { id: number; name: string } = { id: 1, name: 'Nam' };
arr.push(object);
console.log(arr); //[ 'John', 1, true, { id: 1, name: 'Nam' } ]
