<template>
  <div class="sale-page">
    <!-- Sale Banner -->
    <PageHero
      title="限時特惠"
      subtitle="精選商品9折起，錯過再等一年！"
      :badges="['限時搶購', '精選商品', '品質保證']"
      background="linear-gradient(135deg, #ff4757 0%, #ff6b9d 100%)"
    >
      <template #extra>
        <CountdownTimer :end-time="endTime" />
      </template>
    </PageHero>

    <!-- Sale Categories -->
    <section class="sale-categories">
      <div class="container">
        <SectionDivider title="特惠分類" />
        <FilterTabs 
          :categories="saleCategories"
          :current-filter="currentCategory"
          @filter-change="setCategory"
        />
      </div>
    </section>

    <!-- Sale Products -->
    <section class="products-section">
      <div class="container">
        <SectionDivider :title="currentCategoryName" />
        <div class="products-grid" :class="{ 'few-products': isFewProducts }">
          <div 
            v-for="product in paginatedProducts" 
            :key="product.id"
            class="sale-product-card"
          >
            <div class="product-image">
              <img :src="product.mainImage" :alt="product.title" />
              <div v-if="product.isOnSale" class="sale-badge">{{ product.discount }}折</div>
              <div class="quick-view" @click="quickView(product)">快速預覽</div>
            </div>
            <div class="product-info">
              <h3 class="product-title">{{ product.title }}</h3>
              <div class="price-section">
                <template v-if="product.isOnSale">
                  <span class="original-price">{{ product.originalPrice }}</span>
                  <span class="sale-price">{{ product.price }}</span>
                  <span class="savings">省 {{ product.savings }}</span>
                </template>
                <template v-else>
                  <span class="regular-price">{{ product.price }}</span>
                </template>
              </div>
              <div class="product-actions">
                <button class="contact-service" disabled>
                  <span class="service-icon">📞</span>
                  立即聯絡客服
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sale Features -->
    <section class="sale-features">
      <div class="container">
        <FeatureGrid 
          :features="saleFeatures"
          :columns="4"
        />
      </div>
    </section>

    <!-- Pagination -->
    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="goToPage"
    />
  </div>
</template>

<script setup>
// 限時特惠頁面
import { ref, computed, onMounted, onUnmounted } from 'vue'
import productsData from '~/data/products.json'

// 響應式數據
const currentCategory = ref('all')
const currentPage = ref(1)
const itemsPerPage = ref(12)


// 特惠分類
const saleCategories = [
  { id: 'all', name: '全部特惠', iconType: 'all', description: '所有9折起特惠商品' },
  { id: 'anime', name: '動漫手辦', iconType: 'anime', description: '海賊王、鬼滅等動漫角色' },
  { id: 'game', name: '遊戲周邊', iconType: 'game', description: '遊戲王、寶可夢等遊戲商品' },
  { id: 'limited', name: '限量商品', iconType: 'limited', description: '全球限量發售商品' },
  { id: 'premium', name: '高端收藏', iconType: 'collectibles', description: '萬元以上精品收藏' }
]

// 特惠特色
const saleFeatures = [
  {
    id: 'flash-sale',
    icon: '⚡',
    title: '限時搶購',
    description: '24小時內下單享受9折起特惠價格'
  },
  {
    id: 'curated',
    icon: '💰',
    title: '精選商品',
    description: '高品質商品'
  },
  {
    id: 'limited-supply',
    icon: '💎',
    title: '限量供應',
    description: '每款商品限量供應，先到先得'
  },
  {
    id: 'quality-guarantee',
    icon: '🛡️',
    title: '品質保證',
    description: '特惠不減品質，正版保證'
  }
]

// 倒計時結束時間
const endTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7天後

// 計算屬性
const currentCategoryName = computed(() => {
  const category = saleCategories.find(cat => cat.id === currentCategory.value)
  return category ? category.name : '全部特惠'
})

// 特惠商品（只有部分商品有特惠，且折扣不低於9折且價格不低於2000）
const saleProducts = computed(() => {
  return productsData
    .filter(product => {
      const originalPrice = parseFloat(product.price.replace(/[^\d.]/g, ''))
      return originalPrice >= 2000 // 價格不低於2000
    })
    .map(product => {
      const originalPrice = parseFloat(product.price.replace(/[^\d.]/g, ''))
      
      // 只有30%的商品有特惠（隨機決定）
      const hasSale = Math.random() < 0.3
      
      if (hasSale) {
        // 生成9折到9.9折的隨機折扣
        const discount = Math.floor(Math.random() * 10) + 90 // 90-99 (9折到9.9折)
        const salePrice = originalPrice * (discount / 100)
        const savings = originalPrice - salePrice
        
        return {
          ...product,
          isOnSale: true,
          discount: discount / 10, // 轉換為小數形式 (9.0-9.9)
          originalPrice: `NT$ ${Math.round(originalPrice).toLocaleString()}`,
          price: `NT$ ${Math.round(salePrice).toLocaleString()}`,
          savings: `NT$ ${Math.round(savings).toLocaleString()}`
        }
      } else {
        // 沒有特惠的商品
        return {
          ...product,
          isOnSale: false,
          discount: null,
          originalPrice: null,
          price: product.price, // 保持原價
          savings: null
        }
      }
    })
})

// 過濾商品
const filteredProducts = computed(() => {
  let filtered = [...saleProducts.value]
  
  // 根據分類過濾
  if (currentCategory.value !== 'all') {
    filtered = filtered.filter(product => {
      switch (currentCategory.value) {
        case 'anime':
          return product.title.includes('海賊王') || 
                 product.title.includes('鬼滅') ||
                 product.title.includes('間諜家家酒') ||
                 product.title.includes('進擊的巨人') ||
                 product.title.includes('火影忍者') ||
                 product.title.includes('七龍珠') ||
                 product.title.includes('死神') ||
                 product.title.includes('NANA')
        case 'game':
          return product.title.includes('遊戲王') || 
                 product.title.includes('寶可夢') ||
                 product.title.includes('尼爾') ||
                 product.title.includes('劍星') ||
                 product.title.includes('FF7') ||
                 product.title.includes('最終幻想') ||
                 product.title.includes('異塵餘生') ||
                 product.title.includes('輻射')
        case 'limited':
          return product.isLimited
        case 'premium':
          const price = parseFloat(product.price.replace(/[^\d.]/g, ''))
          return price >= 10000 // 高級特惠：價格不低於10000
        default:
          return true
      }
    })
  }
  
  // 只顯示有特惠的商品
  return filtered.filter(product => product.isOnSale)
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

// 移除倒計時功能，改用 CountdownTimer 組件

// 方法
const setCategory = (categoryId) => {
  currentCategory.value = categoryId
  currentPage.value = 1
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const quickView = (product) => {
  // 快速預覽功能
  console.log('Quick view:', product.title)
}

// 移除不再使用的方法

// 移除生命週期相關代碼，改用組件
</script>

<style scoped>
.sale-page {
  padding: 0;
  background: transparent;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Sale Banner */
.sale-banner {
  background: linear-gradient(135deg, #ff4757 0%, #ff6b9d 100%);
  padding: 4rem 0;
  color: white;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.banner-text {
  flex: 1;
}

/* 移除重複的樣式，使用 PageHero 和 CountdownTimer 組件 */

.banner-image {
  flex: 1;
  text-align: center;
}

.placeholder-banner {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #ff4757 0%, #ff6b9d 100%);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.banner-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.banner-text {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Section Divider */
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

/* Sale Categories */
.sale-categories {
  padding: 2rem 0;
  background: transparent;
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

.category-tabs {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.category-tab {
  background: white;
  border: 2px solid #f0f0f0;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  min-width: 120px;
}

.category-tab:hover {
  border-color: #ff6b9d;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 157, 0.2);
}

.category-tab.active {
  border-color: #ff6b9d;
  background: rgba(255, 107, 157, 0.05);
}

.tab-icon {
  font-size: 1.5rem;
}

.tab-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
}

.tab-description {
  font-size: 0.7rem;
  color: #666;
  font-weight: normal;
  text-align: center;
  line-height: 1.2;
}

/* Products Section */
.products-section {
  padding: 2rem 0;
  background: transparent;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  justify-items: center;
  max-width: 100%;
}

/* 當商品數量少時，使用居中佈局 */
.products-grid.few-products {
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.sale-product-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  max-width: 350px;
  width: 100%;
  aspect-ratio: 0.8;
  display: flex;
  flex-direction: column;
}

/* 移除 hover 效果 - sale 卡片不需要 hover 效果 */
/* .sale-product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
} */

.product-image {
  position: relative;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.sale-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff4757;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.quick-view {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
  backdrop-filter: blur(5px);
}

/* 移除 quick-view 的 hover 效果 */
/* .sale-product-card:hover .quick-view {
  opacity: 1;
} */

.product-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1.5rem 1.5rem;
  color: white;
  z-index: 2;
}

.product-title {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  height: 2.8em; /* 固定高度為2行 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.price-section {
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin-right: 10px;
}

.original-price {
  text-decoration: line-through;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.sale-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff6b9d;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
}

.savings {
  background: rgba(255, 71, 87, 0.9);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.regular-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff6b9d;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
}

.product-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.contact-service {
  width: 100%;
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: not-allowed;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: 0.7;
}

.contact-service:disabled {
  background: #6c757d;
  color: white;
  cursor: not-allowed;
  opacity: 0.7;
}

/* Sale Features */
.sale-features {
  padding: 4rem 0;
  background: #f8f9fa;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-item {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.feature-item p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* Pagination */
.pagination-section {
  padding: 2rem 0;
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
  .banner-content {
    flex-direction: column;
    text-align: center;
  }
  
  /* 移除重複的手機版樣式，使用組件的響應式設計 */
  
  .category-tabs {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .products-grid.few-products {
    grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
    max-width: 600px;
  }
  
  .sale-product-card {
    max-width: 300px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
