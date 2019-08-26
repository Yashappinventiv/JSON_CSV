const express = require('express');
const app = express() ;
const {worksheet , workbook } = require('./workbook');

app.use(express.json());

app.post('/'  , (req,res) => {

   worksheet.addRow(req.body) ; 
   
   workbook.csv.writeFile('files.csv')
   .then( () => {
       res.status(200).json({
           status : 200 ,
           message : "added sucessfully"
          })
   } )
   .catch( (err) => {
    res.status(500).json({
        status : 500 ,
        message : "not added"
       })
   } )

})


app.listen(3000 , () => {
    console.log("connected");
})
