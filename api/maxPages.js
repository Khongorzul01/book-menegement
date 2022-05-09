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
         return element
       })
       let max = maxes[0]
       for(let i=0; i<maxes.length; i++){
         if(maxes[i].pages>=max.pages){
           max=maxes[i]
         }
       }
       res.send(max);
        }
       }) 
      

});

app.listen(3003);

