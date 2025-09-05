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
            :product-id="product.id"
            :image-src="product.mainImage"
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
// 載入商品資料
import productsData from '~/data/products.json'

// 使用動態商品資料
const products = productsData
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
