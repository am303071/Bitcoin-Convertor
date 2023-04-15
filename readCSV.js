const fs = require("fs");
const { parse } = require("csv-parse");
var BTCpricearray = new Array();

 fs.createReadStream("./bitcoinhistory.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
   })
 
  .on("end",function(){
    console.log("Reading Data is Finished...");
  });
  


