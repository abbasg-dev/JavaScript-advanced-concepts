class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return lastItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      // shifting items to the left
      this.data[i] = this.data[i + 1];
    }
    // delete last item
    delete this.data[this.length - 1];
    // decrement array length
    this.length--;
  }
}

const newArray = new MyArray();
//console.log(newArray); // MyArray { length: 0, data: {} }
//console.log(newArray.get(0)); // undefined
newArray.push("hi");
newArray.push("you");
newArray.push("!");
// newArray.pop();
// newArray.pop();
newArray.delete(0);
newArray.push("are");
newArray.push("nice");
newArray.delete(1);
console.log(newArray); // MyArray { length: 3, data: { '0': 'you', '1': 'are', '2': 'nice' } }
