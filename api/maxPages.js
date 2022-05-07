const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
  fs.readFile("../data/book.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      const date = JSON.parse(data);
       const maxes= date.books.map(element => {
         console.log(Math.max.apply(element.pages))
         return element.pages
       })
       
       res.send(maxes);
        }
       }) 
      

});

app.listen(3003);

