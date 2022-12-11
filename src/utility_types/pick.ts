interface IITodo {
    title: string;
    desc: string;
    completed: boolean;
}

type TodoPreview = Pick<IITodo, 'title' | 'completed'>;
const td: TodoPreview = {
    title: 'Todo Preview',
    completed: false,
};
console.log(td);
