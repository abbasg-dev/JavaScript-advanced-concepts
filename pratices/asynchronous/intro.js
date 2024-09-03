// How does JavaScript actually works?
// Difference between Asynchronous and Synchronous
// JavaScript is a single threaded language that can be non-blocking

// Single-threaded language:
// JavaScript operates with only one call stack, executing one command at a time.
// Simplifies execution, as each statement is processed sequentially.

// Program Structure:
// Memory allocation: Enables storage of variables, files, etc., on the machine.
// Parsing and execution: Involves reading and running commands.

// JavaScript Engine (e.g., V8):
// Converts JavaScript code into machine-executable instructions for the browser.

// Composed of:
// Memory Heap: Where memory allocation occurs, though with limited capacity.
// Call Stack: Executes code in a First-In, Last-Out (FILO) order; memory leaks can occur if unused memory isn’t managed.

// Common Issues:
// Memory Leaks: Occur when unused memory isn't properly released.
// Stack Overflow: Happens when the call stack grows too large, often due to unbounded recursion.
// Multithreaded Environments: Can lead to deadlocks, but JavaScript avoids this by remaining single-threaded.

// Asynchronous Programming:
// Utilizes callback functions to perform non-blocking tasks.
// Callbacks run in the background, placed in the Callback Queue (Task Queue).
// The Event Loop moves callbacks from the queue to the Call Stack when the thread is free.

// JavaScript Runtime Environment:
// Web APIs: Includes DOM manipulation, AJAX (XMLHttpRequest), and setTimeout.
// Callback Queue: Holds events like onClick, onLoad, etc., until they can be processed.
// Event Loop: Monitors the Callback Queue and processes tasks to keep the main thread running smoothly. It's going to check the job queue first, make sure that that's empty before we start putting some of the callback queue functions on to the call stack.

// Synchronous vs. Asynchronous:
// Synchronous: Similar to calling a teacher and waiting on the line for a response before moving on.
// Asynchronous: Like sending a text and receiving a callback later, allowing you to perform other tasks in the meantime.

// Asynchronous Functions:
// Enable deferred execution, preventing the single thread from being blocked.
// Essential for improving performance in web applications.
