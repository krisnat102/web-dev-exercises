import express from "express";

const app = express();
const port = 3000;

var weekend;
const currentDate = new Date();

app.get("/", (req, res) => {
    if(currentDate.getDay() == 0 || currentDate.getDay() == 6){
        weekend = true;
    }
    else {
        weekend = false;
    }
    
    res.render("index.ejs",
        { weekend: weekend}
    )
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });