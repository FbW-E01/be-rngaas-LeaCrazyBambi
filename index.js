import http from "http";

const theMath = Math.floor(Math.random() * 10);

const server = http.createServer((req, res) => {
  res.end(`Your random number is ${theMath}`);
});

server.listen(8081);

/* OR
Joels example result

function requestHandler(req, res) {
  const randomNumber = Math.random();
  res.end(randomNumber.toString())
}

const myServer = http.createServer(requestHandler);

myServer.listen(8081)

*/
