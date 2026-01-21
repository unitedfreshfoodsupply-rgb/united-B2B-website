
import openpyxl
import json
import sys

def main():
    try:
        file_path = r'c:\Users\MOSTAFA AMIR\Downloads\اسما اصناف خضار - فاكهة (1).xlsx'
        workbook = openpyxl.load_workbook(file_path, data_only=True)
        sheet = workbook.active
        
        catalog = {
            "vegetables": [],
            "herbs": [],
            "local_fruits": [],
            "imported_fruits": []
        }
        
        # Iterate through rows, skipping header if necessary (assuming row 1 is header)
        for i, row in enumerate(sheet.iter_rows(values_only=True)):
            if i == 0: continue
            
            # Col 1: Vegetables
            if len(row) > 1 and row[1]:
                name = str(row[1]).strip()
                if name and name.upper() != "NONE":
                    catalog["vegetables"].append(name)
            
            # Col 2: Herbs/Greens
            if len(row) > 2 and row[2]:
                name = str(row[2]).strip()
                if name and name.upper() != "NONE":
                    catalog["herbs"].append(name)
                    
            # Col 3: Local Fruits
            if len(row) > 3 and row[3]:
                name = str(row[3]).strip()
                if name and name.upper() != "NONE":
                    catalog["local_fruits"].append(name)
                    
            # Col 4: Imported Fruits
            if len(row) > 4 and row[4]:
                name = str(row[4]).strip()
                if name and name.upper() != "NONE":
                    catalog["imported_fruits"].append(name)
        
        output_path = 'data-extracted.json'
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(catalog, f, ensure_ascii=False, indent=2)
        
        print(f"Successfully extracted {sum(len(v) for v in catalog.values())} products to {output_path}")
        
    except Exception as e:
        print(f"Error: {str(e)}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
