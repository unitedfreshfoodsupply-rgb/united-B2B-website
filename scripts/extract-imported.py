
import openpyxl
import json
import sys

def main():
    try:
        file_path = r'c:\Users\MOSTAFA AMIR\Downloads\اسما اصناف خضار - فاكهة (1).xlsx'
        workbook = openpyxl.load_workbook(file_path, data_only=True)
        sheet = workbook.active
        
        imported_products = []
        
        # We start from row 2 (index 1) to skip headers if any
        for row in sheet.iter_rows(values_only=True):
            if len(row) > 4:
                item = row[4]
                if item and isinstance(item, str) and item.strip() and item != "NONE" and item != "None":
                    # Clean the name (remove "مستورد" if present for cleaner imaging)
                    clean_name = item.replace("مستورد", "").strip()
                    imported_products.append({
                        "original_name": item,
                        "clean_name_ar": clean_name,
                        "category": "imported_fruits"
                    })
        
        # Filter out headers if they are in the list (e.g. "فاكهة مستوردة")
        imported_products = [p for p in imported_products if "اسم الصنف" not in p["original_name"] and "فاكهة مستورد" not in p["original_name"]]
        
        print(json.dumps(imported_products, ensure_ascii=False, indent=2))
        
    except Exception as e:
        print(str(e), file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
