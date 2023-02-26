const express = require("express");
const server = express();
const port = 8000;
const cors = require("cors");
server.use(cors());
server.get("/", (req, res) => {
  res.send("Hello Express");
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
