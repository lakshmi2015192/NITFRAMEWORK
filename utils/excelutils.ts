//Reading the data from excel

import xlsx from 'xlsx'

export class ExcelUtils {

// which excel file you need to read -- filepath 

// which sheet from the excel you need to read --- sheetname

static getExcelData(filepath:string , sheetname:string){

try{

// readfile method present inside the excel read the file 

// and it will return the value in workbook formet. 

// workbook formet is nothing but having sheetname and value

const wb = xlsx.readFile(filepath)

const sheet = wb.Sheets[sheetname]

const data = xlsx.utils.sheet_to_json(sheet)

return data

}

catch(error){

    console.log(error);

}

}

}