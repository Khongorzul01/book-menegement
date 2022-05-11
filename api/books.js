const express = require("express");
const app = express();
const fs = require("fs"); 
// const { body, validationResult } = require("express-validator");

app.use(express.json());
app.use(express.static('../public'))
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });

app.get("/", function (req, res) {
  fs.readFile("../data/book.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      const data1 = JSON.parse(data);
      res.render("addedbook", { books: data1 });
    }
  });
});

app.listen(3005);
