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
          if(e.publisher === e.publisher){

              console.log(e.publisher)
          }
          return e.publisher
      })
     
    //   console.log(publishers)
      let nopub = [...new Set(publishers)]
    //   console.log(nopub)
      res.send(nopub);
    }
  });
});

app.listen(3005);
