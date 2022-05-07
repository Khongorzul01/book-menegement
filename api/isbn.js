const express = require("express");
const app = express();
const fs = require("fs");

app.get("/book/:isbn", (req, res) => {
    fs.readFile("../data/book.json", (err, data) => {
      if (err) {
        throw err;
      } else {
        let datas = JSON.parse(data);
        let isbn = datas.books.filter((e) => {
            console.log(e)
          if (e.isbn == Number(req.params.isbn)) {
            return e;
          }
        });
        console.log(datas)
        res.send(isbn);
      }
    });
  });

app.listen(3007);