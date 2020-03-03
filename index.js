const express = require("express");
const routes = require("./src/routes");
const PORT = 3000;
const server = express();

server.use(express.json());

server.use(routes);

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
