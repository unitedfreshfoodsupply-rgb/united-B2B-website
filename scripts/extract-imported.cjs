
const XLSX = require('xlsx');

try {
    const filePath = 'c:/Users/MOSTAFA AMIR/Downloads/اسما اصناف خضار - فاكهة (1).xlsx';
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    const importedFruits = [];

    data.forEach(row => {
        if (row && Array.isArray(row)) {
            const rowString = row.join(' ');
            if (rowString.includes('مستورد')) {
                importedFruits.push(row);
            }
        }
    });

    console.log(JSON.stringify(importedFruits, null, 2));
} catch (err) {
    console.error(err.message);
    process.exit(1);
}
