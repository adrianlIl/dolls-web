<template>
  <div class="search-page">
    <div class="container">
      <!-- 搜尋標題 -->
      <div class="search-header">
        <h1 class="search-title">商品搜尋</h1>
        <p class="search-subtitle" v-if="searchQuery">
          搜尋「{{ searchQuery }}」的結果
        </p>
        <p class="search-subtitle" v-else>
          請輸入關鍵字搜尋商品
        </p>
      </div>

      <!-- 搜尋結果統計 -->
      <div class="search-stats" v-if="searchQuery">
        <p class="results-count">
          找到 {{ filteredProducts.length }} 個商品
        </p>
      </div>

      <!-- 搜尋結果 -->
      <div class="search-results" v-if="searchQuery">
        <div v-if="filteredProducts.length > 0" class="products-grid">
          <ProductCard 
            v-for="product in filteredProducts"
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
        
        <!-- 無搜尋結果 -->
        <div v-else class="no-results">
          <div class="no-results-icon">🔍</div>
          <h3>找不到相關商品</h3>
          <p>請嘗試使用不同的關鍵字搜尋</p>
          <div class="search-suggestions">
            <h4>搜尋建議：</h4>
            <ul>
              <li>檢查拼字是否正確</li>
              <li>嘗試使用更通用的關鍵字</li>
              <li>使用商品名稱的一部分</li>
              <li>嘗試使用英文或中文關鍵字</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 熱門搜尋 -->
      <div class="popular-searches" v-if="!searchQuery">
        <h3>熱門搜尋</h3>
        <div class="popular-tags">
          <button 
            v-for="tag in popularTags" 
            :key="tag"
            class="tag-btn"
            @click="searchByTag(tag)"
          >
            {{ tag }}
          </button>
        </div>
      </div>

      <!-- 推薦商品 -->
      <div class="recommended-products" v-if="!searchQuery">
        <h3>推薦商品</h3>
        <div class="products-grid">
          <ProductCard 
            v-for="product in recommendedProducts"
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import productsData from '~/data/products.json'

// 獲取搜尋查詢參數
const route = useRoute()
const searchQuery = ref(route.query.q || '')

// 商品數據
const allProducts = ref(productsData)

// 熱門搜尋標籤
const popularTags = ref([
  '海賊王', '寶可夢', '火影忍者', '鬼滅之刃', 
  '預購', '現貨', '限量版', 'GK', '雕像'
])

// 搜尋結果
const filteredProducts = computed(() => {
  if (!searchQuery.value.trim()) {
    return []
  }
  
  const query = searchQuery.value.toLowerCase().trim()
  
  return allProducts.value.filter(product => {
    // 搜尋標題
    const titleMatch = product.title.toLowerCase().includes(query)
    
    // 搜尋描述
    const descMatch = product.description.toLowerCase().includes(query)
    
    // 搜尋價格
    const priceMatch = product.price.toLowerCase().includes(query)
    
    // 搜尋類別（根據標題判斷）
    const categoryMatch = product.title.includes(query)
    
    return titleMatch || descMatch || priceMatch || categoryMatch
  })
})

// 推薦商品（隨機選擇6個）
const recommendedProducts = computed(() => {
  const shuffled = [...allProducts.value].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 6)
})

// 根據標籤搜尋
const searchByTag = (tag) => {
  searchQuery.value = tag
  // 更新URL參數
  navigateTo(`/search?q=${encodeURIComponent(tag)}`)
}

// 頁面標題
useHead({
  title: searchQuery.value ? `搜尋「${searchQuery.value}」- 擊GK潮流公仔` : '商品搜尋 - 擊GK潮流公仔',
  meta: [
    {
      name: 'description',
      content: searchQuery.value 
        ? `搜尋「${searchQuery.value}」的相關商品，找到 ${filteredProducts.value.length} 個結果`
        : '搜尋您喜愛的公仔商品，海賊王、寶可夢、火影忍者等熱門動漫角色'
    }
  ]
})

// 監聽路由變化
watch(() => route.query.q, (newQuery) => {
  searchQuery.value = newQuery || ''
})
</script>

<style scoped>
.search-page {
  min-height: 100vh;
  padding-top: 100px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 20px;
}

.search-header {
  text-align: center;
  margin-bottom: 3rem;
}

.search-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ff6b9d, #ff8fab);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.search-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 0;
}

.search-stats {
  margin-bottom: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.results-count {
  font-size: 1.1rem;
  color: #2d3748;
  margin: 0;
  font-weight: 500;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.no-results {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.no-results-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.no-results h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.no-results p {
  color: #64748b;
  margin-bottom: 2rem;
}

.search-suggestions {
  text-align: left;
  max-width: 400px;
  margin: 0 auto;
}

.search-suggestions h4 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.search-suggestions ul {
  list-style: none;
  padding: 0;
}

.search-suggestions li {
  padding: 0.5rem 0;
  color: #64748b;
  border-bottom: 1px solid #e2e8f0;
}

.search-suggestions li:last-child {
  border-bottom: none;
}

.popular-searches {
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.popular-searches h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
}

.popular-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.tag-btn {
  background: linear-gradient(135deg, #ff6b9d, #ff8fab);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 107, 157, 0.3);
}

.tag-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.4);
}

.recommended-products {
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.recommended-products h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .search-page {
    padding-top: 80px;
  }
  
  .search-title {
    font-size: 2rem;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .popular-tags {
    gap: 0.5rem;
  }
  
  .tag-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
