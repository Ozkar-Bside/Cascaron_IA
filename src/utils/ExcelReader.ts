
import * as XLSX from 'xlsx';
export class ExcelReader {
  static readExcel(filePath: string) {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    return XLSX.utils.sheet_to_json(sheet);
  }
}
