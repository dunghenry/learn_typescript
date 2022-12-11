let user: [string, number] = ['Dung', 21];
console.log(user); //[ 'Dung', 21 ]
console.log(typeof user); //object
console.log(user.length); //2
user.push('Mai', 22);
console.log(user.length); // 4
let users: [string, number][];
users = [['Nam', 1]];
users.push(['Dung', 2]);
console.log(users); // [ [ 'Nam', 1 ], [ 'Dung', 2 ] ]
console.log(users.length); //2
