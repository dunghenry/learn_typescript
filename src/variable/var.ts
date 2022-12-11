console.log(x); // hoisting
var x;
x = 1;
function display(x: number): void {
    x++;
    console.log(x);
}
display(x);
