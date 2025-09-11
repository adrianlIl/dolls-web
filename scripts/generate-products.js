import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 生成所有商品資訊的腳本
function generateProducts() {
  const products = [];
  
  for (let i = 1; i <= 20; i++) {
    const commodityPath = path.join(__dirname, '../public/commodity', i.toString());
    const textPath = path.join(commodityPath, 'text');
    const imagesPath = path.join(commodityPath, 'images');
    
    try {
      // 讀取文字資訊
      const title = fs.readFileSync(path.join(textPath, 'title.txt'), 'utf8').trim();
      const content = fs.readFileSync(path.join(textPath, 'content.txt'), 'utf8').trim();
      const price = fs.readFileSync(path.join(textPath, 'price.txt'), 'utf8').trim();
      
      // 檢查圖片存在性
      const images = {
        home: fs.existsSync(path.join(imagesPath, 'Home.webp')),
        one: fs.existsSync(path.join(imagesPath, 'one.webp')),
        two: fs.existsSync(path.join(imagesPath, 'two.webp'))
      };
      
      // 生成縮圖陣列
      const thumbnails = [];
      if (images.home) thumbnails.push(`/commodity/${i}/images/Home.webp`);
      if (images.one) thumbnails.push(`/commodity/${i}/images/one.webp`);
      if (images.two) thumbnails.push(`/commodity/${i}/images/two.webp`);
      
      // 從 content.txt 中提取商品名稱作為描述
      let description = '';
      const contentLines = content.split('\n');
      
      // 先嘗試找「商品名稱：」或「商品名稱」
      for (const line of contentLines) {
        if (line.includes('商品名稱：')) {
          description = line.replace(/⫸\s*商品名稱：/, '').trim();
          break;
        } else if (line.includes('商品名稱')) {
          description = line.replace(/⫸商品名稱：/, '').trim();
          break;
        }
      }
      
      // 如果找不到商品名稱，使用第一行作為描述（移除⫸符號）
      if (!description) {
        description = contentLines[0] ? contentLines[0].replace(/^⫸\s*/, '').trim() : '商品描述';
      }
      
      products.push({
        id: i,
        title: title,
        description: description,
        price: price,
        mainImage: `/commodity/${i}/images/Home.webp`,
        thumbnails: thumbnails,
        imageClass: `product-${i}`,
        isLimited: i === 18 || i === 20
      });
      
    } catch (error) {
      console.log(`商品 ${i} 資訊讀取失敗:`, error.message);
    }
  }
  
  return products;
}

// 生成並輸出
const products = generateProducts();
console.log('生成的商品數量:', products.length);
console.log('限量版商品:', products.filter(p => p.isLimited).map(p => p.id));

// 輸出到檔案
fs.writeFileSync(
  path.join(__dirname, '../data/products.json'), 
  JSON.stringify(products, null, 2)
);

export { generateProducts };
