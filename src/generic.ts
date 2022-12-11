function getRandomE<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let randomE = getRandomE<number>(nums);

console.log(randomE);
