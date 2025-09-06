<template>
  <div class="products-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <SectionDivider :title="currentCategory" />
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

    <!-- Products Grid -->
    <div class="products-section">
      <div class="container">
        <div class="products-grid">
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
// 全部商品頁面
import { ref, computed, watch } from 'vue'
import productsData from '~/data/products.json'

// 響應式數據
const currentFilter = ref('all')
const sortBy = ref('newest')
const itemsPerPage = ref(12)
const currentPage = ref(1)

// 分類選項
const categories = [
  { label: '全部商品', value: 'all', iconType: 'all' },
  { label: '精選商品', value: 'featured', iconType: 'anime' },
  { label: '限量版', value: 'limited', iconType: 'limited' },
  { label: '預購商品', value: 'preorder', iconType: 'preorder' }
]

// 計算屬性
const currentCategory = computed(() => {
  const category = categories.find(cat => cat.value === currentFilter.value)
  return category ? category.label : '全部商品'
})

// 過濾商品
const filteredProducts = computed(() => {
  let filtered = [...productsData]
  
  // 根據分類過濾（按照主頁的分類邏輯）
  if (currentFilter.value !== 'all') {
    filtered = filtered.filter(product => {
      switch (currentFilter.value) {
        case 'featured':
          // 精選商品：非限量版的一般商品（前8個）
          return !product.isLimited
        case 'limited':
          // 限量版：isLimited 為 true 的商品
          return product.isLimited
        case 'preorder':
          // 預購商品：標題包含「預購」的商品
          return product.title.includes('預購')
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
      filtered.sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0))
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

/* 移除已組件化的樣式 */

/* Products Grid */
.products-section {
  padding: 2rem 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin: 1rem 0 3rem 0;
}

/* 移除已組件化的樣式 */

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
    padding: 0.8rem 1rem;
    min-height: 60px;
    gap: 1rem;
  }
  
  .filter-tabs {
    justify-content: flex-start;
    margin-bottom: 0;
    flex: 1;
  }
  
  .sort-controls {
    flex-shrink: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .filter-tab {
    font-size: 0.85rem;
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
  
  .filters-container {
    padding: 0.6rem 0.8rem;
    min-height: 50px;
    gap: 0.8rem;
    flex-direction: column;
    align-items: stretch;
  }
  
  .filter-tabs {
    order: 1;
  }
  
  .sort-controls {
    order: 2;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
}
</style>
