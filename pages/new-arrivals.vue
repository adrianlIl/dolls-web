<template>
  <div class="new-arrivals-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <SectionDivider title="最新上架" />
        <div class="product-count-section">
        </div>
      </div>
    </div>

    <!-- Filters and Sorting -->
    <div class="filters-section">
      <div class="container">
        <div class="filters-container">
          <FilterTabs 
            :categories="categories"
            :current-filter="currentFilter"
            @filter-change="setFilter"
          />
          <SortControls 
            :sort-by="sortBy"
            :items-per-page="itemsPerPage"
            @sort-change="applySorting"
            @pagination-change="applyPagination"
          />
        </div>
      </div>
    </div>

    <!-- New Arrivals Grid -->
    <div class="products-section">
      <div class="container">
        <div class="products-grid" :class="{ 'few-products': isFewProducts }">
          <ProductCard 
            v-for="product in paginatedProducts" 
            :key="product.id"
            :title="product.title"
            :description="product.description"
            :price="product.price"
            :image-class="product.imageClass"
            :product-id="product.id"
            :image-src="product.mainImage"
            :is-sold-out="product.isSoldOut || false"
          />
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="goToPage"
    />
  </div>
</template>

<script setup>
// 最新上架頁面
import { ref, computed, watch } from 'vue'
import productsData from '~/data/products.json'

// 響應式數據
const currentFilter = ref('all')
const sortBy = ref('newest')
const itemsPerPage = ref(12)
const currentPage = ref(1)

// 分類選項
const categories = [
  { label: '全部新品', value: 'all', iconType: 'all' },
  { label: 'GK模型', value: 'gk', iconType: 'gk' },
  { label: 'PVC手辦', value: 'pvc', iconType: 'pvc' },
  { label: '限定版', value: 'exclusive', iconType: 'limited' }
]

// 計算屬性
const currentCategory = computed(() => {
  const category = categories.find(cat => cat.value === currentFilter.value)
  return category ? category.label : '全部新品'
})

// 最新上架商品（模擬最近30天內上架的商品）
const newArrivals = computed(() => {
  // 這裡可以根據實際的日期字段來過濾，目前顯示所有商品
  return productsData
})

// 過濾商品
const filteredProducts = computed(() => {
  let filtered = [...newArrivals.value]
  
  // 根據分類過濾
  if (currentFilter.value !== 'all') {
    filtered = filtered.filter(product => {
      switch (currentFilter.value) {
        case 'gk':
          return product.title.includes('GK')
        case 'pvc':
          return product.title.includes('PVC') || product.description.includes('PVC')
        case 'exclusive':
          return product.title.includes('限定') || product.title.includes('限量') || product.isLimited
        default:
          return true
      }
    })
  }
  
  // 排序
  switch (sortBy.value) {
    case 'price-low':
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''))
        const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''))
        return priceA - priceB
      })
      break
    case 'price-high':
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''))
        const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''))
        return priceB - priceA
      })
      break
    case 'popular':
      filtered.sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
      break
    case 'newest':
    default:
      // 保持原始順序（最新上架）
      break
  }
  
  return filtered
})

// 分頁計算
const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage.value))

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredProducts.value.slice(start, end)
})

// 商品數量少時的佈局調整
const isFewProducts = computed(() => paginatedProducts.value.length <= 3)

const visiblePages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value
  
  if (total <= 5) {
    for (let i = 2; i <= total; i++) {
      pages.push(i)
    }
  } else {
    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
  }
  
  return pages
})

// 方法
const setFilter = (filter) => {
  currentFilter.value = filter
  currentPage.value = 1
}

const applySorting = (newSortBy) => {
  sortBy.value = newSortBy
  currentPage.value = 1
}

const applyPagination = (newItemsPerPage) => {
  itemsPerPage.value = newItemsPerPage
  currentPage.value = 1
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

// 監聽過濾器變化，重置到第一頁
watch(currentFilter, () => {
  currentPage.value = 1
})
</script>

<style scoped>
.new-arrivals-page {
  padding: 2rem 0 6rem 0; /* 增加底部 padding */
  background: transparent;
  min-height: 100vh; /* 確保頁面有最小高度 */
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  min-height: 80px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 107, 157, 0.1);
  position: relative;
  margin: 1rem 0 2rem 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.filters-container:hover {
  border-color: rgba(255, 107, 157, 0.2);
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.filters-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ff6b9d, #ff8fab);
  border-radius: 0 0 3px 3px;
  opacity: 0.6;
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
  background: #ff6b9d;
  color: white;
  box-shadow: 0 2px 8px rgba(255, 107, 157, 0.3);
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
}

.sort-select, .view-select {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  color: #333;
  font-size: 0.9rem;
  cursor: pointer;
}

.sort-select:focus, .view-select:focus {
  outline: none;
  border-color: #ff6b9d;
  box-shadow: 0 0 0 2px rgba(255, 107, 157, 0.2);
}

/* Products Section */
.products-section {
  padding: 2rem 0 4rem 0; /* 增加底部 padding */
  background: transparent;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 3rem; /* 為底部卡片留出額外空間 */
  justify-items: center;
  max-width: 100%;
  padding-bottom: 2rem; /* 額外的底部 padding */
}

/* 當商品數量少時，使用居中佈局 */
.products-grid.few-products {
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, 350px));
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

/* Pagination */
.pagination-section {
  padding: 3rem 0 4rem 0; /* 增加上下 padding */
  background: transparent;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.page-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: white;
  color: #666;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.page-btn:hover {
  background: #f8f9fa;
  border-color: #ff6b9d;
  color: #ff6b9d;
}

.page-btn.active {
  background: #ff6b9d;
  color: white;
  border-color: #ff6b9d;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 響應式設計 */
@media (max-width: 768px) {
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
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .products-grid.few-products {
    grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
    max-width: 800px;
  }
  
  .pagination {
    gap: 0.25rem;
  }
  
  .page-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}
</style>
