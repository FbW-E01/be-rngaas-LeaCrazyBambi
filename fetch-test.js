import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log("Oh no, an error", err));

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => console.log(response.data))
  .catch((err) => console.error("Oh no", err));
