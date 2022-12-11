interface TIodo {
    title: string;
}

const singleTodo: Readonly<TIodo> = {
    title: 'Delete inactive users',
};
// singleTodo.title = "Change title" //Error
console.log(singleTodo);
