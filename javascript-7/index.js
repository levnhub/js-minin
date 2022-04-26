// Simple delay function

const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};

delay(2000).then(() => console.log("2 sec"));

// Fake API url

const url = "https://jsonplaceholder.typicode.com/todos";

// Promise methods

// function fetchTodos() {
//   console.log("Fetch todo started");
//   return delay(2000)
//     .then(() => {
//       // fetch(url).then(response => response.json()) // don't need, we in promise now, can use next then
//       return fetch(url);
//     })
//     .then((response) => response.json());
// }

// fetchTodos()
//   .then((data) => {
//     console.log("Data:", data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Async/await methods

async function fetchAsyncTodos() {
  console.log("Fetch todo started");
  try {
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Fetch todo ended");
  }
}

fetchAsyncTodos();
