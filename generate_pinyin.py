import json
from pypinyin import lazy_pinyin

with open('products_data.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

for product in products:
    name = product.get('产品名称', '')
    if name:
        pinyin = lazy_pinyin(name)
        first_letter = pinyin[0][0].upper() if pinyin else ''
        product['first_letter'] = first_letter
        product['pinyin'] = ''.join(pinyin)
    else:
        product['first_letter'] = ''
        product['pinyin'] = ''

with open('products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print("Generated products.json with pinyin data")
for p in products[:5]:
    print(f"{p['产品名称']} -> {p['first_letter']} ({p['pinyin']})")
