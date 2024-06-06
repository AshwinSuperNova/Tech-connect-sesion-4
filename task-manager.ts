import { fork, ChildProcess } from 'child_process';

// Define the Task interface
interface Task {
    id: number;
    description: string;
}

// Fork the child process
const child: ChildProcess = fork('./task-worker');

// Define some tasks
const tasks: Task[] = [
    { id: 1, description: 'Task 1: Clean the house' },
    { id: 2, description: 'Task 2: Do the laundry' },
    { id: 3, description: 'Task 3: Prepare dinner' },
    { id: 4, description: 'Task 4: Write a report' }
];

// Send tasks to the child process at intervals
let taskIndex = 0;
const sendTask = () => {
    if (taskIndex < tasks.length) {
        console.log(`Parent: Assigning ${tasks[taskIndex].description}`);
        child.send({ task: tasks[taskIndex] });
        taskIndex++;
    } else {
        // End communication
        child.send({ task: 'exit' });
        clearInterval(interval);
    }
};

// Listen for status updates from the child process
child.on('message', (msg) => {
    if ((msg as { status: string }).status) {
        console.log(`Child: ${(msg as { status: string }).status}`);
    }
});

// Assign a new task every 3 seconds
const interval = setInterval(sendTask, 3000);
