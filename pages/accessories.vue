<template>
  <div class="accessories-page">
    <!-- Hero Section -->
    <PageHero
      title="公仔周邊"
      subtitle="精選優質周邊商品，讓您的收藏更加完整"
      :stats="heroStats"
      background="linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)"
    />

    <!-- Category Navigation -->
    <section class="category-nav">
      <div class="container">
        <FilterTabs 
          :categories="accessoriesCategories"
          :current-filter="currentCategory"
          @filter-change="setCategory"
        />
      </div>
    </section>

    <!-- Accessories Grid -->
    <section class="accessories-section">
      <div class="container">
        <SectionDivider :title="currentCategoryName" />
        <div class="accessories-grid">
          <div 
            v-for="accessory in paginatedAccessories" 
            :key="accessory.id"
            class="accessory-card"
          >
            <div class="accessory-image">
              <img :src="accessory.image" :alt="accessory.name" />
              <div class="accessory-badge" v-if="accessory.badge">{{ accessory.badge }}</div>
            </div>
            <div class="accessory-info">
              <h3 class="accessory-name">{{ accessory.name }}</h3>
              <p class="accessory-description">{{ accessory.description }}</p>
              <div class="accessory-meta">
                <span class="accessory-brand">{{ accessory.brand }}</span>
                <span class="accessory-material">{{ accessory.material }}</span>
              </div>
              <div class="accessory-price">
                <span class="price">{{ accessory.price }}</span>
                <span class="original-price" v-if="accessory.originalPrice">{{ accessory.originalPrice }}</span>
              </div>
              <div class="accessory-actions">
                <button class="add-to-cart" @click="addToCart(accessory)">
                  <span class="cart-icon">🛒</span>
                  加入購物車
                </button>
                <button class="add-to-wishlist" @click="addToWishlist(accessory)">
                  <span class="heart-icon">❤️</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Brands -->
    <section class="brands-section">
      <div class="container">
        <SectionDivider title="合作品牌" />
        <FeatureGrid 
          :features="brandFeatures"
          :columns="4"
        />
      </div>
    </section>

    <!-- Why Choose Our Accessories -->
    <section class="why-choose-section">
      <div class="container">
        <SectionDivider title="為什麼選擇我們的周邊" />
        <FeatureGrid 
          :features="whyChooseFeatures"
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
// 公仔周邊頁面
import { ref, computed } from 'vue'

// 響應式數據
const currentCategory = ref('all')
const currentPage = ref(1)
const itemsPerPage = ref(12)

// 周邊分類
const accessoriesCategories = [
  { 
    id: 'all', 
    name: '全部周邊', 
    count: 48,
    iconType: 'all'
  },
  { 
    id: 'display', 
    name: '展示用品', 
    count: 12,
    iconType: 'display'
  },
  { 
    id: 'clothing', 
    name: '服飾配件', 
    count: 8,
    iconType: 'clothing'
  },
  { 
    id: 'stationery', 
    name: '文具用品', 
    count: 10,
    iconType: 'stationery'
  },
  { 
    id: 'home', 
    name: '居家用品', 
    count: 8,
    iconType: 'home'
  },
  { 
    id: 'digital', 
    name: '數位周邊', 
    count: 6,
    iconType: 'game'
  },
  { 
    id: 'collectibles', 
    name: '收藏品', 
    count: 4,
    iconType: 'collectibles'
  }
]

// 模擬周邊商品數據
const accessoriesData = [
  // 展示用品
  { id: 1, name: '透明展示盒', description: '高透明亞克力材質，完美展示您的公仔收藏', brand: 'DisplayPro', material: '亞克力', price: 'NT$ 299', category: 'display', image: '/accessories/display-box.jpg', badge: '熱銷' },
  { id: 2, name: 'LED展示櫃', description: '內建LED燈條，讓您的公仔更加閃耀', brand: 'LightBox', material: '亞克力+LED', price: 'NT$ 1,299', originalPrice: 'NT$ 1,599', category: 'display', image: '/accessories/led-cabinet.jpg', badge: '特價' },
  { id: 3, name: '旋轉展示台', description: '360度旋轉展示，全方位欣賞公仔細節', brand: 'RotatePro', material: 'ABS塑料', price: 'NT$ 199', category: 'display', image: '/accessories/rotating-stand.jpg' },
  
  // 服飾配件
  { id: 4, name: '動漫主題T恤', description: '100%純棉材質，舒適透氣', brand: 'AnimeWear', material: '純棉', price: 'NT$ 399', category: 'clothing', image: '/accessories/anime-tshirt.jpg' },
  { id: 5, name: '角色主題帽子', description: '刺繡工藝，精緻美觀', brand: 'CapMaster', material: '棉質', price: 'NT$ 299', category: 'clothing', image: '/accessories/character-cap.jpg' },
  
  // 文具用品
  { id: 6, name: '動漫主題筆記本', description: '硬皮封面，內頁200頁', brand: 'NoteBook', material: '紙質', price: 'NT$ 199', category: 'stationery', image: '/accessories/anime-notebook.jpg' },
  { id: 7, name: '角色主題筆', description: '0.5mm筆芯，書寫流暢', brand: 'PenPro', material: '塑料+金屬', price: 'NT$ 99', category: 'stationery', image: '/accessories/character-pen.jpg' },
  
  // 居家用品
  { id: 8, name: '動漫主題馬克杯', description: '陶瓷材質，可微波加熱', brand: 'CupMaster', material: '陶瓷', price: 'NT$ 299', category: 'home', image: '/accessories/anime-mug.jpg' },
  { id: 9, name: '角色主題抱枕', description: '柔軟舒適，可拆洗', brand: 'PillowPro', material: '聚酯纖維', price: 'NT$ 599', category: 'home', image: '/accessories/character-pillow.jpg' },
  
  // 數位周邊
  { id: 10, name: '動漫主題手機殼', description: '防摔保護，精準開孔', brand: 'PhoneCase', material: 'TPU', price: 'NT$ 199', category: 'digital', image: '/accessories/anime-phone-case.jpg' },
  { id: 11, name: '角色主題滑鼠墊', description: '防滑底部，精準定位', brand: 'MousePad', material: '橡膠+布面', price: 'NT$ 149', category: 'digital', image: '/accessories/character-mousepad.jpg' },
  
  // 收藏品
  { id: 12, name: '限量版徽章', description: '金屬材質，精工製作', brand: 'BadgeMaster', material: '金屬', price: 'NT$ 99', category: 'collectibles', image: '/accessories/limited-badge.jpg', badge: '限量' },
  { id: 13, name: '角色主題鑰匙圈', description: '精緻工藝，隨身攜帶', brand: 'KeyChain', material: '合金', price: 'NT$ 79', category: 'collectibles', image: '/accessories/character-keychain.jpg' }
]

// Hero 統計數據
const heroStats = computed(() => [
  { value: accessoriesCategories.length, label: '周邊分類' },
  { value: totalAccessories.value, label: '周邊商品' },
  { value: '100%', label: '正版授權' }
])

// 合作品牌特徵
const brandFeatures = [
  { id: 1, icon: '🏢', title: 'DisplayPro', description: '專業展示用品品牌' },
  { id: 2, icon: '👕', title: 'AnimeWear', description: '動漫服飾專家' },
  { id: 3, icon: '☕', title: 'CupMaster', description: '創意居家用品' },
  { id: 4, icon: '📝', title: 'NoteBook', description: '文具用品領導品牌' }
]

// 為什麼選擇我們的特徵
const whyChooseFeatures = [
  {
    id: 'matching',
    icon: '🎯',
    title: '精準配對',
    description: '每個周邊都與對應的公仔完美配對，確保風格一致'
  },
  {
    id: 'licensed',
    icon: '🔒',
    title: '正版授權',
    description: '所有周邊均為官方授權，品質有保障'
  },
  {
    id: 'exclusive',
    icon: '🎨',
    title: '獨家設計',
    description: '與知名設計師合作，打造獨一無二的周邊商品'
  },
  {
    id: 'packaging',
    icon: '📦',
    title: '精美包裝',
    description: '每件周邊都採用精美包裝，送禮自用兩相宜'
  }
]

// 計算屬性
const currentCategoryName = computed(() => {
  const category = accessoriesCategories.find(cat => cat.id === currentCategory.value)
  return category ? category.name : '全部周邊'
})

const totalAccessories = computed(() => accessoriesData.length)

// 過濾周邊商品
const filteredAccessories = computed(() => {
  if (currentCategory.value === 'all') {
    return accessoriesData
  }
  return accessoriesData.filter(accessory => accessory.category === currentCategory.value)
})

// 分頁計算
const totalPages = computed(() => Math.ceil(filteredAccessories.value.length / itemsPerPage.value))

const paginatedAccessories = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredAccessories.value.slice(start, end)
})

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
const setCategory = (categoryId) => {
  currentCategory.value = categoryId
  currentPage.value = 1
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const addToCart = (accessory) => {
  console.log('Add to cart:', accessory.name)
}

const addToWishlist = (accessory) => {
  console.log('Add to wishlist:', accessory.name)
}
</script>

<style scoped>
.accessories-page {
  padding: 0;
  background: transparent;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
  padding: 4rem 0;
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Category Navigation */
.category-nav {
  padding: 2rem 0;
  background: white;
  border-bottom: 1px solid #f0f0f0;
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
  padding: 1.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  min-width: 120px;
  text-align: center;
}

.category-tab:hover {
  border-color: #4ecdc4;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(78, 205, 196, 0.2);
}

.category-tab.active {
  border-color: #4ecdc4;
  background: rgba(78, 205, 196, 0.05);
}

.tab-icon {
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.tab-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
}

.tab-count {
  font-size: 0.8rem;
  color: #4ecdc4;
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

/* Accessories Section */
.accessories-section {
  padding: 2rem 0;
  background: transparent;
}

.accessories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.accessory-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.accessory-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.accessory-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.accessory-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.accessory-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #4ecdc4;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: bold;
}

.accessory-info {
  padding: 1.5rem;
}

.accessory-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.accessory-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.accessory-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.accessory-brand, .accessory-material {
  font-size: 0.8rem;
  color: #999;
  background: #f8f9fa;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
}

.accessory-price {
  margin-bottom: 1rem;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4ecdc4;
  margin-right: 0.5rem;
}

.original-price {
  text-decoration: line-through;
  color: #999;
  font-size: 0.9rem;
}

.accessory-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.add-to-cart {
  flex: 1;
  background: #4ecdc4;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.add-to-cart:hover {
  background: #44a08d;
  transform: translateY(-1px);
}

.add-to-wishlist {
  background: #f8f9fa;
  border: 1px solid #ddd;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-wishlist:hover {
  background: #4ecdc4;
  color: white;
  border-color: #4ecdc4;
}

/* Brands Section */
.brands-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.brand-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.brand-card:hover {
  transform: translateY(-5px);
}

.brand-logo {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.brand-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

.brand-products {
  font-size: 0.8rem;
  color: #4ecdc4;
  font-weight: bold;
}

/* Why Choose Section */
.why-choose-section {
  padding: 4rem 0;
  background: transparent;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.feature-card p {
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
  border-color: #4ecdc4;
  color: #4ecdc4;
}

.page-btn.active {
  background: #4ecdc4;
  color: white;
  border-color: #4ecdc4;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .category-tabs {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .accessories-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  .brands-grid, .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
