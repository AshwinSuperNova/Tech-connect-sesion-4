# IPC Task Manager Example

This project demonstrates Inter-Process Communication (IPC) in Node.js using TypeScript. The example simulates a simple task management system where a parent process assigns tasks to a child process and receives status updates as tasks are completed.

## Scenario

In this example, we have two processes:
1. **Parent Process**: The parent process is responsible for assigning tasks to the child process. It forks a child process and sends tasks to it at regular intervals. The parent process also listens for status updates from the child process.
2. **Child Process**: The child process receives tasks from the parent process, simulates task completion, and sends status updates back to the parent process.

The tasks are predefined and include:
- Cleaning the house
- Doing the laundry
- Preparing dinner
- Writing a report

The parent process assigns these tasks to the child process, which then completes them and sends completion messages back to the parent process.



