/*
Hash tables are great when you want quick access to certain values
A problem of hash tables that we discussed was the idea of no concept of order in arrays.
Hash tables are kind of placed all over the place.
*/

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // Private method to calculate a hash value for a given key.
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // Method to add a key-value pair to the hash table.
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } // O(1)

  // Method to retrieve the value for a given key.
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } // O(1)
    return undefined;
  }

  // Method to retrieve all keys in the hash table
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // console.log(this.data[i]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(500);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.set("apples", 54));
console.log(myHashTable.get("apples"));
console.log(myHashTable.set("oranges", 2));
console.log(myHashTable.keys());
