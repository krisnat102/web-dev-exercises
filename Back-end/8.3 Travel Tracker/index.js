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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let countries = [];

app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code FROM visited_countries");
  result.rows.forEach((row) => {
    countries.push(row.country_code);
  });
  console.log(result.rows);
  res.render("index.ejs", {
    countries: countries,
    total: result.rows.length,
  });
  console.log(countries.length);
});

app.post("/add", async (req, res) => {
  const countryInput = req.body["country"];

    const country = await db.query(
      "SELECT country_code FROM countries WHERE country_name = $1",
      [countryInput]
    );
    console.log(country.rows);
    
    if (country.rows.length !== 0) {
      console.log(countries);
      const countryCode = country.rows[0].country_code;
      try{
        await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
          countryCode,
        ]);
      }
      catch(error) {
        res.render("index.ejs", {
          countries: countries,
          total: countries.length,
          error: "Country has already been entered"
        });
      }
      
      console.log(1);
      res.redirect("/");
    }
    else if(country.rows.length == 0) {
    console.log(2);
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again."
    });
  }
  else{
    console.log(3);
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country has already been added."
    });
  }
 
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
