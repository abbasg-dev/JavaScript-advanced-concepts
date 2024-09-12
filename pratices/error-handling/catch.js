// handle asynchronous errors using promises

Promise.resolve("asyncfail")
  .then((response) => {
    Promise.resolve()
      .then(() => {
        throw new Error("#3 fail");
      })
      .catch(console.log);
    return 5;
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log("final error", err);
  });
