const arr = [6, 1, 3, 5, 8];

const delayArrVal = (val, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("val:", val);
      resolve();
    }, delay * 1000);
  });
};

arr.reduce((prevPromise, val) => {
  return prevPromise.then(() => delayArrVal(val, val));
}, Promise.resolve());

// val: 6
// val: 1
// val: 3
// val: 5
// val: 8
