// Event Loop

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0); // Add log to end of Event Loop

// console.log("End");

// Server request

console.log("Request data...");

// Callback hell!

// setTimeout(() => {
//   console.log("Preparing data...");

//   const backendData = {
//     server: "aws",
//     port: "2000",
//     status: "working",
//   };

//   setTimeout(() => {
//     (backendData.modified = true), console.log("Data received", backendData);
//   }, 2000);
// }, 2000);

// Promise

const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Preparing data ...");
    const backendData = {
      server: "aws",
      port: "2000",
      status: "working",
    };
    resolve(backendData);
  }, 2000);
});

// Several requests from promises

p.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
      // reject(data); // error emulate
    }, 2000);
  });
})
  .then((data) => {
    data.fromPromise = true;
    return data;
  })
  .then((data) => {
    console.log("Data received", data);
  })
  .catch((err) => console.error("Error: ", err))
  .finally(() => console.log("Finally"));

// Usefull "sleep" method

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

sleep(5000).then(() => console.log("After 5 seconds"));
sleep(6000).then(() => console.log("After 6 seconds"));

// Combine all promises

Promise.all([sleep(2000), sleep(7000)]).then(() => {
  console.log("All promises complete!"); // when all promises complete
});

Promise.race([sleep(2000), sleep(7000)]).then(() => {
  console.log("Race promises"); // when first promise complete
});
