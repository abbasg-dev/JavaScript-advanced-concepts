// Hash tables, also called maps or dictionaries, are data structures that store key-value pairs, with JavaScript objects being a type of hash table.

/*
A hash function is a function that generates a fixed-length value (hash) for a given input.
Example: MD5, SHA-1, SHA-256, etc.

Key Characteristics:
One-way Function: It is practically impossible to determine the original input from the hash.
Deterministic: The same input always produces the same hash.
Sensitive to Input Changes: A small change in the input results in a completely different hash.

Idempotent: A hash function, given the same input, always returns the same output.

Use in Data Structures (Hash Tables):
Keys are hashed to generate a memory address for storing data.
Hash tables use keys to quickly locate data by mapping hashes to memory addresses.
Unlike arrays, hash tables don't rely on ordered indexes but use the hashed key to directly access memory.

Performance Considerations:
Hash functions for hash tables must be optimized for speed to ensure fast insertion and retrieval of data.
Commonly, hash table operations are assumed to have O(1) time complexity.

Cryptographic Hash Functions:
Functions like SHA-256 are slower and used for applications like cryptography, where complexity is desired for security.

Practical Insight:
Hashing frameworks/libraries in programming languages implement optimized hash functions for efficient performance.
*/

/*
Hash Function Operations and Performance:

Insertion:
Time complexity: O(1).
Hash the key and place it in the memory address generated by the hash function.

Lookup:
Time complexity: O(1).
Hash the key and go directly to the memory address to retrieve the value.

Deletion:
Time complexity: O(1).
Hash the key to find the memory address and delete the item without needing to shift indexes like in arrays.

Search:
Time complexity: O(1).
Easy and efficient—use the hash function with the key to locate the desired item.
*/

/*
Hash Table Collisions: Explanation and Challenges

Key Problem: Collision
Occurs when two different keys are hashed to the same memory address.

Why Collisions Happen:
Limited memory space allocated for the hash table.
Hash functions are designed to distribute data but aren't perfect.
With enough data, collisions are inevitable.

Effects of Collisions:
Multiple items share the same memory address, leading to slower access and insertion.
Instead of O(1) time, operations can degrade to O(n) in the worst case.

Handling Collisions:
Use a strategy to store multiple items in the same memory address.

Common methods:
Separate Chaining: Use a linked list to store multiple values at the same address.
Open Addressing: Find another available space in memory.
Other Methods: Robin Hood hashing, quadratic probing, etc.

Key Insights:
Collisions are unavoidable with limited memory and large data.
Proper collision resolution techniques minimize performance degradation.
Hash tables remain highly efficient for most operations, despite this challenge.
*/

/*
Hash Tables: Keys, Values, and Variations

Key-Value Flexibility:
Keys and values in hash tables can be any type of data structure (e.g., arrays, objects, functions).
Example: A value can be a function, object, or array, and sometimes keys can be more than just strings.

JavaScript Specifics:
In objects, keys are automatically stringified (e.g., numbers or functions as keys become strings).

With ES6 Maps:
Keys can be any data type (e.g., functions, arrays, numbers).
Maintains insertion order, unlike regular objects where order is not guaranteed.

Sets:
Similar to Maps but only stores keys, no associated values.

Differences Between Objects and Maps:

Objects:
Only allow string keys.
No guaranteed insertion order.

Maps:
Allow any data type as a key.
Maintain insertion order for looping or retrieval.

Cross-Language Implementation:
Different programming languages have unique versions of hash tables with pre-built features.
Despite variations, the underlying principles of hash tables remain the same.
*/

/*
Hash Tables: Key Takeaways

Usefulness and Popularity:
Hash tables are widely used and are a common interview topic.
Often used to optimize nested loops O(n^2) to linear time O(n).

Strengths:
Fast operations: O(1) for search, insertion, and deletion.
Flexible keys: Unlike arrays with numeric indexes, hash tables (e.g., JavaScript Maps) allow flexible key types.
Improve runtime by trading off space complexity (e.g., creating extra variables to store data).

Challenges:
Collisions: Can degrade performance to O(n) but are usually handled by the programming language (e.g., using linked lists or other methods).
Unordered structure: Hard to iterate over keys in order.
Slow key iteration: Iterating over all keys requires scanning the memory space.

Trade-offs:
Hash tables optimize time complexity at the cost of increased space complexity.
They are a good solution for improving code efficiency but may use more memory.

Common Patterns:
Hash tables are often used to solve problems requiring fast lookups or deduplication.
Example: Finding common items between two arrays using hash tables avoids nested loops.

Interview Tips:
Recognize patterns where hash tables can optimize performance.
Understand the trade-offs between time and space complexities.
Avoid O(n^2) operations when hash tables can achieve O(n).

Best Practices:
Modular and reusable code.
Use hash tables appropriately over other data structures like arrays when fast lookups are needed.

Heuristics:
Hash tables are a go-to solution for time complexity optimization.
They demonstrate the space-time tradeoff principle effectively.
*/

let user = {
  age: 28,
  name: "Abbas",
  magic: true,
  scream: function () {
    console.log("ahhhhhhh!");
  },
};

user.age; // O(1)
user.spell = "abra kadabra"; // O(1)
user.scream(); // O(1)

const a = new Map();
const b = new Set();
