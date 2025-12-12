export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

let todos: Todo[] = [];
let nextId = 1;

export const TodoModel = {
  getAll: () => todos,

  getById: (id: number) => todos.find(t => t.id === id),

  create: (title: string) => {
    const todo: Todo = { id: nextId++, title, completed: false };
    todos.push(todo);
    return todo;
  },

  update: (id: number, data: Partial<Todo>) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return null;

    Object.assign(todo, data);
    return todo;
  },

  delete: (id: number) => {
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) return false;

    todos.splice(index, 1);
    return true;
  }
};
