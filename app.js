const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./src/router/user.route");

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
