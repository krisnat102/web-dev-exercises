import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var letters;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", 
    {
      titleText: "Enter your name below👇"
    }
  );
});

app.post("/submit", (req, res) => {
  letters = req.body["lName"].length + req.body["fName"].length;
  console.log(letters);

  res.render("index.ejs", 
    {
      titleText: `There are ${letters} letters in your name.`
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
