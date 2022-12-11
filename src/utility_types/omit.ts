interface Todo {
    title: string;
    desc: string;
    completed: boolean;
    createdAt: number;
}
type TodoPr = Omit<Todo, 'desc' | 'createdAt'>;

const tdo: TodoPr = {
    title: 'Oke',
    completed: false,
};
console.log(tdo);
