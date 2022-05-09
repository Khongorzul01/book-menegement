const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
  fs.readFile("../data/book.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      const date = JSON.parse(data);
       const mini= date.books.map(element => {
         return element
       })
       let min = mini[0]
       for(let i=0; i<mini.length; i++){
         if(mini[i].pages <= min.pages){
           min=mini[i]
         }
       }
       res.send(min);
        }
       }) 
      

});

app.listen(3002);

