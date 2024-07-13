import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "alekozila",
  port: 5432,
});

db.connect();

let rawCountries = [];

db.query("SELECT country_code FROM visited_countries", (err, res) => {
  if(err){
    console.log(err.stack);
  }
  else{
    rawCountries = res.rows;
  }
  db.end();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.render("index.ejs", { 
    total: rawCountries.length,
    countries: ["BG", "TR", "GR"]
   });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});