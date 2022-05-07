const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
  fs.readFile("../data/book.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      const book = JSON.parse(data);
      let array = [];
      for (let i = 0; i < 10000; i++) {
        if (array.length < 3) {
          let arr = book.books[Math.floor(Math.random() * book.books.length)];
          if (!array.includes(arr)) {
            array.push(arr);
          }
        }
      }

      res.send(array);
    }
  });
});

app.listen(3004);
