<template>
  <div class="products-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <div class="section-divider">
          <span>全部商品</span>
        </div>
        <div class="product-count-section">
          <span class="product-count">20 件商品</span>
        </div>
      </div>
    </div>

    <!-- Filters and Sorting -->
    <div class="filters-section">
      <div class="container">
        <div class="filters-container">
          <div class="filter-tabs">
            <button class="filter-tab active">全部商品</button>
            <button class="filter-tab">精選商品</button>
            <button class="filter-tab">限量版</button>
            <button class="filter-tab">預購商品</button>
          </div>
          <div class="sort-controls">
            <div class="sort-group">
              <label class="sort-label">排序方式</label>
              <select class="sort-select">
                <option>最新上架</option>
                <option>價格由低到高</option>
                <option>價格由高到低</option>
                <option>熱門度</option>
              </select>
            </div>
            <div class="view-group">
              <label class="view-label">顯示數量</label>
              <select class="view-select">
                <option>12 件</option>
                <option>24 件</option>
                <option>36 件</option>
              </select>
            </div>
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
  background: transparent;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Page Header */
.page-header {
  background: transparent;
  padding: 2rem 0;
}

/* Section Divider - 與首頁統一 */
.section-divider {
  text-align: center;
  margin: 4rem 0 3rem;
  position: relative;
  z-index: 10;
}

.section-divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #ddd;
  z-index: 1;
}

.section-divider span {
  background: rgba(255, 255, 255, 0.9);
  padding: 0 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  position: relative;
  z-index: 2;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

/* Product Count Section */
.product-count-section {
  text-align: center;
  margin: 1rem 0 2rem;
}

.product-count {
  background: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 1.5rem;
  border-radius: 15px;
  display: inline-block;
  backdrop-filter: blur(10px);
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
}

/* Filters Section */
.filters-section {
  background: transparent;
  padding: 2rem 0;
}

.filters-container {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 1.5rem 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.filter-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 0.75rem 1.5rem;
  border: none;
  background: rgba(255, 255, 255, 0.7);
  color: #666;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
}

.filter-tab:hover {
  background: rgba(255, 107, 157, 0.1);
  color: #ff6b9d;
  transform: translateY(-2px);
}

.filter-tab.active {
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
  color: white;
  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
}

.sort-controls {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
}

.sort-group, .view-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sort-label, .view-label {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
  white-space: nowrap;
}

.sort-select, .view-select {
  padding: 0.5rem 1rem;
  border: 2px solid rgba(255, 107, 157, 0.2);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
}

.sort-select:hover, .view-select:hover {
  border-color: #ff6b9d;
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-1px);
}

.sort-select:focus, .view-select:focus {
  outline: none;
  border-color: #ff6b9d;
  box-shadow: 0 0 0 3px rgba(255, 107, 157, 0.2);
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
  .section-divider span {
    font-size: 1.3rem;
    padding: 0 1.5rem;
  }
  
  .product-count {
    font-size: 1rem;
    padding: 0.4rem 1.2rem;
  }
  
  .filters-container {
    padding: 1rem 1.5rem;
  }
  
  .filter-tabs {
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .filter-tab {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
  
  .sort-controls {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .sort-group, .view-group {
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
