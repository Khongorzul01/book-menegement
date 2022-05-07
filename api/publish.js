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
          return e.publisher
      })
      res.send(publishers);
    }
  });
});

app.listen(3005);
