const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`;
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`;
}

// sometimes we want to make sure that we do one thing first, then the next thing, then the third thing
// maybe they all depend on each other and we have to make sure that we have some sort of order
// wait for each one and do it sequentially
sequence().then(console.log); // sequence is done a b c

// do all the promises at the same time
parallel().then(console.log); // parallel is done: a b c

// Race between all these three promises and whichever one returns first, I want it to be the output1 and just log that and ignore all the other once
// Whatever is the fastest, just return
race().then(console.log); // race is done: a
