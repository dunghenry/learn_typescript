interface Todo {
    title: string;
    desc: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo: Todo = {
    title: 'organize desk',
    desc: 'clear clutter',
};

const todo2 = updateTodo(todo, {
    desc: 'throw out trash',
});
console.log(todo2);
