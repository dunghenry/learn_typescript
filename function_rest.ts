let array = (a: number, ...b: number[]) => {
    console.log(a, b);
};

array(1, 2, 3, 4);

//Arguments

function number(a: number, b: number, c: number, d: number) {
    console.log(arguments[0]);
    let rs = Array.from(arguments);
    // console.log(a, b, c, d);
    console.log(rs);
}

number(1, 2, 3, 4);
