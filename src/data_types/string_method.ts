const xinchao: string = 'Xin chao Dung';
const firstName: string = 'Dung';
console.log(xinchao.charAt(0));
console.log(xinchao.charAt(2));

const result = xinchao.concat(firstName);
console.log(result); //Xin chaoDung

console.log(result.indexOf('Dung')); // 8 index string "Dung"
console.log(result.indexOf('Nam')); // - 1 Not found
console.log(result.search('Dung')); // 8
console.log(result.search('Nam')); // -1

const replace = result.replace('Dung', 'TranDung');
console.log(replace); // Xin chaoTranDung
console.log(result.replace(/Dung/gi, 'TranDung')); //Xin chao TranDungTranDung
console.log(result.split(' ')); //[ 'Xin', 'chao', 'Dung' ]

console.log('hi'.repeat(10)); //hihihihihihihihihihi

console.log(result.includes('Xin chao')); // true
console.log(result.length);
