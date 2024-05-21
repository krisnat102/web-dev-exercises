import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
})

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Chris</p>");
})

app.get("/contact", (req, res) => {
  res.send("<h1>Contact me</h1><p>0894458676</p>");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
