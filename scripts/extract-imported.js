
import * as XLSX from 'xlsx';
import { readFile } from 'fs/promises';

async function main() {
    try {
        const filePath = 'c:/Users/MOSTAFA AMIR/Downloads/اسما اصناف خضار - فاكهة (1).xlsx';
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const importedFruits = [];

        // Based on the prompt, we look for "فاكهة مستورد" (Imported Fruits)
        // We'll iterate through rows and look for this category

        data.forEach(row => {
            const rowString = JSON.stringify(row);
            if (rowString.includes('مستورد')) {
                // This row or section is likely imported. 
                // We'll need to parse it more carefully.
                importedFruits.push(row);
            }
        });

        console.log(JSON.stringify(importedFruits, null, 2));
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

main();
