import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("www.thecocktaildb.com/api/json/v1/1/random.php");

        res.render("index.ejs", { 
            coctail: result.data.strDrink
         });
      } catch (error) {
        res.render("index.ejs", { coctail: JSON.stringify(error.response) });
      }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
