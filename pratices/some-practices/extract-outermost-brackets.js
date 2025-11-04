function extractOutermostBrackets(inputString) {
  const results = [];
  let nestingLevel = 0;
  let startIndex = -1; // Tracks the index of the '[' when nestingLevel was 0

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (char === "[") {
      // 1. Start of a new potential outermost pair
      if (nestingLevel === 0) {
        startIndex = i;
      }
      nestingLevel++;
    } else if (char === "]") {
      if (nestingLevel > 0) {
        nestingLevel--;

        // 2. End of a complete, valid outermost pair
        if (nestingLevel === 0) {
          // Extract the content from the saved start index up to the current index (inclusive)
          const content = inputString.substring(startIndex, i + 1);
          results.push(content);
          startIndex = -1; // Reset start index
        }
      }
      // 3. If nestingLevel is <= 0 here, it means the ']' is improperly matched
      // (either unmatched or closing an already closed valid pair), which is ignored.
    }
    // All other characters are ignored.
  }

  // Any remaining incomplete pair (nestingLevel > 0 at the end) is also ignored.

  return results;
}

// --- Test Cases for Verification ---

// Example 1: Multiple outermost pairs
const input1 = "This is [important information] and [another key point].";
console.log(extractOutermostBrackets(input1));
// Output: [ "[important information]", "[another key point]" ]

// Example 2: Nested pairs, only outermost extracted
const input2 = "Text with [nested [brackets] inside] and [this one.";
console.log(extractOutermostBrackets(input2));
// Output: [ "[nested [brackets] inside]" ]

// Example 3: Incomplete/Improperly matched
const input3 = "Start] [valid pair] [incomplete";
console.log(extractOutermostBrackets(input3));
// Output: [ "[valid pair]" ]

// Example 4: Empty input and no valid pairs
const input4 = "";
const input5 = "No brackets here.";
console.log(extractOutermostBrackets(input4)); // Output: []
console.log(extractOutermostBrackets(input5)); // Output: []
