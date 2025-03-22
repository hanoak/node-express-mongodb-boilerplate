import express from "express";

const PORT = 5000;
const app = express();

app.use("/", (req, res) => {
  res.status(200).send({ msg: "Hello, world!" });
});

app.listen(PORT, () => {
  console.info(`Serve started at port: ${PORT}`);
});
