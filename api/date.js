const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
  fs.readFile("../data/book.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      const date = JSON.parse(data);
      const ele = date.books.map((e)=>{ 
          return e
        })
        const dates = ele.sort(function(a,b){
          return parseFloat(b.published) - parseFloat(a.published)
        })
       
          res.send(dates);
      
    }
  });
});

app.listen(3002);