const Excel = require('exceljs/modern.nodejs');
var workbook = new Excel.Workbook();

var worksheet = workbook.addWorksheet('POST data');

worksheet.columns = [
    { header: 'FirstName', key: 'firstname', width: 32 },
    { header: 'LastName', key: 'lastname', width: 32 },
    { header: 'Address', key: 'address', width: 64 } ,
    { header: 'Pincode', key: 'pincode', width: 32 } ,
    { header: 'MobileNo', key: 'mobile', width: 128 } ,
  ];



  module.exports = { worksheet , workbook }

