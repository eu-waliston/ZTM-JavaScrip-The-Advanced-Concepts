// Async Error Handling 2
async function a() {
  try {
    await Promise.resolve("oopese");
    await Promise.reject("oopese");
  } catch (error) {
    console.log("is this till good?");
  }
};

a()