const express = require("express");
const app = express();
const fs = require("fs");

app.get("search?title=:title", (req, res) => {
    fs.readFile("../data/book.json", (err, data) => {
      if (err) {
        throw err;
      } else {
        let datas = JSON.parse(data);
        let title = datas.books.filter((e) => {
            console.log(e)
          if (e.title == req.params.title) {
            return e;
          }
        });
        console.log(datas)
        res.send(title);
      }
    });
  });

app.listen(3009);