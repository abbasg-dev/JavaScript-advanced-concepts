// hello world  return wurld hillu

function transformString(str) {
  // Define a map to swap vowels
  const vowelMap = {
    a: "i",
    e: "i",
    i: "o",
    o: "u",
    u: "a",
    A: "I",
    E: "I",
    I: "O",
    O: "U",
    U: "A",
  };

  // Function to transform each word
  function transformWord(word) {
    let transformedWord = "";
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (vowelMap[char]) {
        transformedWord += vowelMap[char]; // Replace vowel based on the map
      } else {
        transformedWord += char; // Keep consonants the same
      }
    }
    return transformedWord;
  }

  // Split the string into words
  const words = str.split(" ");
  // Transform each word
  const transformedWords = words.map(transformWord);
  // Return the new string
  return transformedWords.reverse().join(" ");
}

console.log(transformString("hello world")); // wurld hillu
