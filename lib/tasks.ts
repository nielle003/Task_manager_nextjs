type Task = { id: string; title: string };
let tasks: Task[] = [
    { id: '1', title: 'Learn Next.js' },
    { id: '2', title: 'Build a project' }
];

export function getTasks(): Task[] {
    return tasks;
}

export function getTask(id: string): Task | undefined {
    return tasks.find(task => task.id === id);
}

export function addTask(title: string) {
    const id = (Math.random() * 100000).toString();
    tasks.push({ id, title });
}

export function updateTask(id: string, title: string) {
    const task = tasks.find(t => t.id === id);
    if (task) task.title = title;
}

export function deleteTask(id: string) {
    tasks = tasks.filter(t => t.id !== id);
}