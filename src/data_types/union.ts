let code: string | number;
code = 123;
code = 'ABC';
//code = false;// Error

function displayType(code: string | number) {
    if (typeof code === 'number') {
        console.log('Code is number');
    } else if (typeof code === 'string') {
        console.log('Code is string');
    }
}
displayType('ABC');
displayType(123);

// displayType(true)// Error