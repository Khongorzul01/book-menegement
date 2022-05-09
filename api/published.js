const { count } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
  fs.readFile("../data/book.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      const publisher = JSON.parse(data);
      const publishers = publisher.books.map((e)=>{
          return e
      })
      const counts={};
      publishers.forEach(e => {
          counts[e.publisher]=(counts[e.publisher]|| 0)+1
          
      });
      res.send(counts);
    }
  });
});

app.listen(3005);
