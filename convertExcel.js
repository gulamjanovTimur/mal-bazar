const XLSX2JSON = require('xlsx-json-js');
const fs = require('fs');
const path = require('path');
const xlsx2json = new XLSX2JSON();
const xlsxPath = path.join('locale.xlsx');
const codes = ['ru', 'kg'];

const jsonData = xlsx2json.parse2json(xlsxPath);



//коды в xlsx файле должны быть: code ru/kg

jsonData.filter((element) => {
  codes.forEach((code) => {
    if (element.code === code) {
      const locale = fs.createWriteStream("src/i18n/" + code + '/excelTable.js');
      locale.write('export default' + ' ' + JSON.stringify(element, null, ' ').replace(/"(\w+)"\s*:/g, '$1:'));
      console.log('success')
    }
  })
});
