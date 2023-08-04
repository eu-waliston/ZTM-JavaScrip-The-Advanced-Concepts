Promise.resolve("asyncfail")
  .then((response) => {
    Promise.resolve().then(() => {
      throw new Error("#3 fail");
    });
    return 5;
  })
  .then((resposne) => {
    console.log(resposne);
  })
  .catch((err) => {
    throw new Error("#2");
  })
  .then((resposne) => {
    console.log(resposne.message);
  })
  .catch((err) => {
    console.log("final error");
  });
