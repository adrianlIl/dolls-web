<template>
  <div class="products-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">全部商品</h1>
        <p class="product-count">17709 件商品</p>
      </div>
    </div>

    <!-- Filters and Sorting -->
    <div class="filters-section">
      <div class="container">
        <div class="filters-row">
          <div class="filter-group">
            <select class="filter-select">
              <option>上架時間</option>
              <option>價格</option>
              <option>熱門度</option>
            </select>
          </div>
          <div class="filter-group">
            <select class="filter-select">
              <option>最新到舊</option>
              <option>舊到新</option>
              <option>價格低到高</option>
              <option>價格高到低</option>
            </select>
          </div>
          <div class="filter-group">
            <select class="filter-select">
              <option>每頁顯示: 48</option>
              <option>每頁顯示: 24</option>
              <option>每頁顯示: 12</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="products-section">
      <div class="container">
        <div class="products-grid">
          <ProductCard 
            v-for="product in products" 
            :key="product.id"
            :title="product.title"
            :description="product.description"
            :price="product.price"
            :image-class="product.imageClass"
          />
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination-section">
      <div class="container">
        <div class="pagination">
          <button class="page-btn active">1</button>
          <button class="page-btn">2</button>
          <button class="page-btn">3</button>
          <button class="page-btn">4</button>
          <button class="page-btn next">→</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 全部商品頁面
const products = [
  {
    id: 1,
    title: "【框畫工作室現貨】H2",
    description: "《富岡義勇》裝飾畫 | 鬼滅之刃",
    price: "NT$ 1,230",
    imageClass: "giyu-tomioka"
  },
  {
    id: 2,
    title: "【限量版】炭治郎",
    description: "《竈門炭治郎》公仔 | 鬼滅之刃",
    price: "NT$ 2,580",
    imageClass: "tanjiro"
  },
  {
    id: 3,
    title: "【收藏版】禰豆子",
    description: "《竈門禰豆子》手辦 | 鬼滅之刃",
    price: "NT$ 3,200",
    imageClass: "nezuko"
  },
  {
    id: 4,
    title: "【限定版】善逸",
    description: "《我妻善逸》模型 | 鬼滅之刃",
    price: "NT$ 2,890",
    imageClass: "zenitsu"
  },
  {
    id: 5,
    title: "【特典版】伊之助",
    description: "《嘴平伊之助》雕像 | 鬼滅之刃",
    price: "NT$ 3,450",
    imageClass: "inosuke"
  },
  {
    id: 6,
    title: "【豪華版】煉獄杏壽郎",
    description: "《煉獄杏壽郎》手辦 | 鬼滅之刃",
    price: "NT$ 4,200",
    imageClass: "rengoku"
  },
  {
    id: 7,
    title: "【特別版】胡蝶忍",
    description: "《胡蝶忍》模型 | 鬼滅之刃",
    price: "NT$ 2,980",
    imageClass: "shinobu"
  },
  {
    id: 8,
    title: "【珍藏版】宇髄天元",
    description: "《宇髄天元》公仔 | 鬼滅之刃",
    price: "NT$ 3,680",
    imageClass: "uzui"
  },
  {
    id: 9,
    title: "【限定版】蝴蝶香奈惠",
    description: "《蝴蝶香奈惠》手辦 | 鬼滅之刃",
    price: "NT$ 3,120",
    imageClass: "kanae"
  },
  {
    id: 10,
    title: "【特典版】不死川實彌",
    description: "《不死川實彌》模型 | 鬼滅之刃",
    price: "NT$ 3,350",
    imageClass: "sanemi"
  },
  {
    id: 11,
    title: "【豪華版】富岡義勇",
    description: "《富岡義勇》雕像 | 鬼滅之刃",
    price: "NT$ 4,500",
    imageClass: "giyu-tomioka"
  },
  {
    id: 12,
    title: "【收藏版】栗花落香奈乎",
    description: "《栗花落香奈乎》手辦 | 鬼滅之刃",
    price: "NT$ 2,750",
    imageClass: "kanroji"
  },
  {
    id: 13,
    title: "【限量版】時透無一郎",
    description: "《時透無一郎》模型 | 鬼滅之刃",
    price: "NT$ 3,800",
    imageClass: "muichiro"
  },
  {
    id: 14,
    title: "【特別版】甘露寺蜜璃",
    description: "《甘露寺蜜璃》手辦 | 鬼滅之刃",
    price: "NT$ 3,100",
    imageClass: "mitsuri"
  },
  {
    id: 15,
    title: "【珍藏版】伊黑小芭內",
    description: "《伊黑小芭內》雕像 | 鬼滅之刃",
    price: "NT$ 3,600",
    imageClass: "iguro"
  },
  {
    id: 16,
    title: "【特典版】悲鳴嶼行冥",
    description: "《悲鳴嶼行冥》模型 | 鬼滅之刃",
    price: "NT$ 4,100",
    imageClass: "gyomei"
  },
  {
    id: 17,
    title: "【限定版】鬼舞辻無慘",
    description: "《鬼舞辻無慘》手辦 | 鬼滅之刃",
    price: "NT$ 4,800",
    imageClass: "muzan"
  },
  {
    id: 18,
    title: "【豪華版】猗窩座",
    description: "《猗窩座》雕像 | 鬼滅之刃",
    price: "NT$ 4,200",
    imageClass: "akaza"
  },
  {
    id: 19,
    title: "【收藏版】童磨",
    description: "《童磨》手辦 | 鬼滅之刃",
    price: "NT$ 3,900",
    imageClass: "doma"
  },
  {
    id: 20,
    title: "【特別版】妓夫太郎",
    description: "《妓夫太郎》模型 | 鬼滅之刃",
    price: "NT$ 3,400",
    imageClass: "gyutaro"
  },
  {
    id: 21,
    title: "【限量版】墮姬",
    description: "《墮姬》手辦 | 鬼滅之刃",
    price: "NT$ 3,200",
    imageClass: "daki"
  },
  {
    id: 22,
    title: "【特典版】半天狗",
    description: "《半天狗》雕像 | 鬼滅之刃",
    price: "NT$ 3,700",
    imageClass: "hantengu"
  },
  {
    id: 23,
    title: "【珍藏版】玉壺",
    description: "《玉壺》模型 | 鬼滅之刃",
    price: "NT$ 3,500",
    imageClass: "gyokko"
  },
  {
    id: 24,
    title: "【豪華版】黑死牟",
    description: "《黑死牟》手辦 | 鬼滅之刃",
    price: "NT$ 4,600",
    imageClass: "kokushibo"
  }
]
</script>

<style scoped>
.products-page {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Page Header */
.page-header {
  background: #f8f9fa;
  padding: 2rem 0;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 0.5rem 0;
}

.product-count {
  font-size: 1.1rem;
  color: #666;
  margin: 0;
}

/* Filters Section */
.filters-section {
  background: white;
  border-bottom: 1px solid #eee;
  padding: 1.5rem 0;
}

.filters-row {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
}

.filter-group {
  display: flex;
  align-items: center;
}

.filter-select {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: white;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
  transition: border-color 0.3s;
}

.filter-select:hover {
  border-color: #ff6b9d;
}

.filter-select:focus {
  outline: none;
  border-color: #ff6b9d;
  box-shadow: 0 0 0 2px rgba(255, 107, 157, 0.2);
}

/* Products Grid */
.products-section {
  padding: 2rem 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

/* Pagination */
.pagination-section {
  padding: 2rem 0;
  text-align: center;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
}

.page-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: white;
  color: #333;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;
  min-width: 40px;
}

.page-btn:hover {
  background: #f8f9fa;
  border-color: #ff6b9d;
}

.page-btn.active {
  background: #ff6b9d;
  color: white;
  border-color: #ff6b9d;
}

.page-btn.next {
  font-weight: bold;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .filters-row {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
  
  .filter-group {
    justify-content: center;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  
  .pagination {
    flex-wrap: wrap;
    gap: 0.3rem;
  }
  
  .page-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    min-width: 35px;
  }
}

@media (max-width: 480px) {
  .products-page {
    padding: 1rem 0;
  }
  
  .page-header {
    padding: 1.5rem 0;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
}
</style>
