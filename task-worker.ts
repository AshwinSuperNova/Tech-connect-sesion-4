// Define the Task interface
interface Task {
    id: number;
    description: string;
}

// Function to simulate task completion
const completeTask = (task: Task): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Completed ${task.description}`);
        }, Math.random() * 2000 + 1000); // Simulate variable task completion time
    });
};

// Listen for tasks from the parent process
process.on('message', async (msg) => {
    const receivedTask: Task = msg as any; // Add type assertion to specify the type of 'msg' as 'any'

    if (receivedTask.description === 'exit') { // Update the comparison to check the description property
        process.exit();
    }

    // Simulate task completion and send status back to the parent process
    const status = await completeTask(receivedTask);
    if (process.send) { // Add null check before invoking process.send()
        process.send({ status });
    }
});
