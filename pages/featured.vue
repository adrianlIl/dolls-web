<template>
  <div class="featured-page">
    <!-- Hero Section -->
    <PageHero
      title="精選推薦"
      subtitle="為您精心挑選的優質公仔，每一件都是收藏家的首選"
      :stats="heroStats"
      background="linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%)"
    />

    <!-- Featured Categories -->
    <section class="categories-section">
      <div class="container">
        <!-- 手機版分類選單 -->
        <div class="mobile-category-menu">
          <button 
            class="mobile-menu-toggle"
            @click="toggleMobileMenu"
            :class="{ active: mobileMenuOpen }"
          >
            <span class="menu-text">{{ currentCategoryName }}</span>
            <span class="menu-icon">{{ mobileMenuOpen ? '✕' : '☰' }}</span>
          </button>
          
          <div class="mobile-category-dropdown" :class="{ open: mobileMenuOpen }">
            <div 
              v-for="category in categories" 
              :key="category.value"
              class="mobile-category-item"
              :class="{ active: currentCategory === category.value }"
              @click="selectCategory(category.value)"
            >
              <span class="category-name">{{ category.label }}</span>
              <span class="category-count">{{ category.count }} 件</span>
            </div>
          </div>
        </div>

        <div class="categories-layout">
          <!-- 桌面版左側分類導航 -->
          <div class="categories-sidebar desktop-only">
            <h3 class="sidebar-title">推薦分類</h3>
            <div class="category-list">
              <div 
                v-for="category in categories" 
                :key="category.value"
                class="category-item"
                :class="{ active: currentCategory === category.value }"
                @click="setCategory(category.value)"
              >
                <div class="category-content">
                  <span class="category-name">{{ category.label }}</span>
                  <span class="category-count">{{ category.count }} 件</span>
                </div>
                <div class="category-indicator" v-if="currentCategory === category.value">
                  <div class="indicator-dot"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 右側商品展示 -->
          <div class="products-content">
            <SectionDivider :title="currentCategoryName" />
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
      </div>
    </section>


    <!-- Why Choose Us -->
    <section class="why-choose-section">
      <div class="container">
        <SectionDivider title="為什麼選擇我們" />
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
// 新品推薦頁面
import { ref, computed, onMounted, onUnmounted } from 'vue'
import productsData from '~/data/products.json'

// 響應式數據
const currentCategory = ref('onepiece')
const currentPage = ref(1)
const itemsPerPage = ref(12)
const mobileMenuOpen = ref(false)

// 推薦分類
const categories = [
  { 
    value: 'onepiece', 
    label: '航海王', 
    count: productsData.filter(p => p.title.includes('海賊王') || p.title.includes('航海王')).length,
    iconType: 'anime'
  },
  { 
    value: 'dragonball', 
    label: '七龍珠', 
    count: productsData.filter(p => p.title.includes('七龍珠') || p.title.includes('布羅利')).length,
    iconType: 'anime'
  },
  { 
    value: 'naruto', 
    label: '火影忍者', 
    count: productsData.filter(p => p.title.includes('火影忍者') || p.title.includes('佐助')).length,
    iconType: 'anime'
  },
  { 
    value: 'bleach', 
    label: '死神', 
    count: productsData.filter(p => p.title.includes('死神') || p.title.includes('一護')).length,
    iconType: 'anime'
  },
  { 
    value: 'aot', 
    label: '進擊的巨人', 
    count: productsData.filter(p => p.title.includes('進擊的巨人') || p.title.includes('艾倫') || p.title.includes('利威爾')).length,
    iconType: 'anime'
  },
  { 
    value: 'frieren', 
    label: '葬送的芙莉蓮', 
    count: productsData.filter(p => p.title.includes('芙莉蓮')).length,
    iconType: 'anime'
  },
  { 
    value: 'digimon', 
    label: '數碼寶貝', 
    count: productsData.filter(p => p.title.includes('數碼寶貝') || p.title.includes('妖女獸')).length,
    iconType: 'anime'
  },
  { 
    value: 'nier', 
    label: '尼爾機械紀元', 
    count: productsData.filter(p => p.title.includes('尼爾') || p.title.includes('2B') || p.title.includes('A2')).length,
    iconType: 'game'
  },
  { 
    value: 'ff', 
    label: '最終幻想', 
    count: productsData.filter(p => p.title.includes('最終幻想') || p.title.includes('薩菲羅斯') || p.title.includes('埃斯蒂尼安')).length,
    iconType: 'game'
  },
  { 
    value: 'elden', 
    label: '艾爾登法環', 
    count: productsData.filter(p => p.title.includes('艾爾登法環') || p.title.includes('菈妮')).length,
    iconType: 'game'
  },
  { 
    value: 'eva', 
    label: '新世紀福音戰士', 
    count: productsData.filter(p => p.title.includes('新世紀福音戰士') || p.title.includes('福音戰士')).length,
    iconType: 'anime'
  },
  { 
    value: 'bluearchive', 
    label: '碧藍檔案', 
    count: productsData.filter(p => p.title.includes('碧藍檔案') || p.title.includes('調月莉音') || p.title.includes('角楯花凛')).length,
    iconType: 'game'
  },
  { 
    value: 'honkai', 
    label: '崩壞星穹鐵道', 
    count: productsData.filter(p => p.title.includes('崩壞星穹鐵道') || p.title.includes('愛莉')).length,
    iconType: 'game'
  },
  { 
    value: 'fate', 
    label: 'Fate/Grand Order', 
    count: productsData.filter(p => p.title.includes('Fate') || p.title.includes('瑪修')).length,
    iconType: 'anime'
  },
  { 
    value: 'azurlane', 
    label: '碧藍航線', 
    count: productsData.filter(p => p.title.includes('碧藍航線') || p.title.includes('武藏') || p.title.includes('信濃')).length,
    iconType: 'game'
  },
  { 
    value: 'lol', 
    label: '英雄聯盟', 
    count: productsData.filter(p => p.title.includes('英雄聯盟') || p.title.includes('阿璃')).length,
    iconType: 'game'
  },
  { 
    value: 'limited', 
    label: '限量版', 
    count: productsData.filter(p => p.isLimited).length,
    iconType: 'limited'
  }
]

// Hero 統計數據
const heroStats = computed(() => [
  { value: featuredProducts.value.length, label: '精選商品' },
  { value: '100%', label: '正版保證' },
  { value: '24h', label: '快速發貨' }
])

// 為什麼選擇我們的特徵
const whyChooseFeatures = [
  {
    id: 'quality',
    icon: '🏆',
    title: '品質保證',
    description: '所有商品均為正版授權，品質有保障'
  },
  {
    id: 'shipping',
    icon: '🚚',
    title: '快速配送',
    description: '24小時內發貨，3-5天送達'
  },
  {
    id: 'limited',
    icon: '💎',
    title: '限量收藏',
    description: '獨家限量商品，收藏價值極高'
  },
  {
    id: 'service',
    icon: '🛡️',
    title: '售後保障',
    description: '完善的售後服務，讓您購買無憂'
  }
]

// 計算屬性
const currentCategoryName = computed(() => {
  const category = categories.find(cat => cat.value === currentCategory.value)
  return category ? category.label : '航海王'
})

// 精選商品
const featuredProducts = computed(() => {
  let filtered = [...productsData]
  
  // 根據分類過濾
  filtered = filtered.filter(product => {
    switch (currentCategory.value) {
      case 'onepiece':
        return product.title.includes('海賊王') || product.title.includes('航海王')
      case 'dragonball':
        return product.title.includes('七龍珠') || product.title.includes('布羅利')
      case 'naruto':
        return product.title.includes('火影忍者') || product.title.includes('佐助')
      case 'bleach':
        return product.title.includes('死神') || product.title.includes('一護')
      case 'aot':
        return product.title.includes('進擊的巨人') || product.title.includes('艾倫') || product.title.includes('利威爾')
      case 'frieren':
        return product.title.includes('芙莉蓮')
      case 'digimon':
        return product.title.includes('數碼寶貝') || product.title.includes('妖女獸')
      case 'nier':
        return product.title.includes('尼爾') || product.title.includes('2B') || product.title.includes('A2')
      case 'ff':
        return product.title.includes('最終幻想') || product.title.includes('薩菲羅斯') || product.title.includes('埃斯蒂尼安')
      case 'elden':
        return product.title.includes('艾爾登法環') || product.title.includes('菈妮')
      case 'eva':
        return product.title.includes('新世紀福音戰士') || product.title.includes('福音戰士')
      case 'bluearchive':
        return product.title.includes('碧藍檔案') || product.title.includes('調月莉音') || product.title.includes('角楯花凛')
      case 'honkai':
        return product.title.includes('崩壞星穹鐵道') || product.title.includes('愛莉')
      case 'fate':
        return product.title.includes('Fate') || product.title.includes('瑪修')
      case 'azurlane':
        return product.title.includes('碧藍航線') || product.title.includes('武藏') || product.title.includes('信濃')
      case 'lol':
        return product.title.includes('英雄聯盟') || product.title.includes('阿璃')
      case 'limited':
        return product.isLimited
      default:
        return true
    }
  })
  
  return filtered
})

// 分頁計算
const totalPages = computed(() => Math.ceil(featuredProducts.value.length / itemsPerPage.value))

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return featuredProducts.value.slice(start, end)
})

// 商品數量少時的佈局調整
const isFewProducts = computed(() => paginatedProducts.value.length <= 3)

// 方法
const setCategory = (categoryValue) => {
  currentCategory.value = categoryValue
  currentPage.value = 1
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  
  if (mobileMenuOpen.value) {
    // 計算選單按鈕的位置
    const button = document.querySelector('.mobile-menu-toggle')
    if (button) {
      const rect = button.getBoundingClientRect()
      const dropdown = document.querySelector('.mobile-category-dropdown')
      if (dropdown) {
        // 設定選單位置在按鈕下方
        dropdown.style.top = `${rect.bottom + 8}px`
      }
    }
  }
}

const selectCategory = (categoryValue) => {
  setCategory(categoryValue)
  mobileMenuOpen.value = false
}

// 點擊外部關閉選單
const handleClickOutside = (event) => {
  const menu = event.target.closest('.mobile-category-menu')
  if (!menu && mobileMenuOpen.value) {
    mobileMenuOpen.value = false
  }
}

// 滾動時重新定位選單
const handleScroll = () => {
  if (mobileMenuOpen.value) {
    const button = document.querySelector('.mobile-menu-toggle')
    if (button) {
      const rect = button.getBoundingClientRect()
      const dropdown = document.querySelector('.mobile-category-dropdown')
      if (dropdown) {
        dropdown.style.top = `${rect.bottom + 8}px`
      }
    }
  }
}

// 檢查漢堡選單是否開啟
const checkHamburgerMenu = () => {
  const hamburgerMenu = document.querySelector('.mobile-menu, .hamburger-menu, .nav-menu')
  if (hamburgerMenu && hamburgerMenu.classList.contains('open')) {
    mobileMenuOpen.value = false
  }
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

// 生命週期
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleScroll)
  
  // 定期檢查漢堡選單狀態
  const interval = setInterval(checkHamburgerMenu, 100)
  
  // 清理定時器
  onUnmounted(() => {
    clearInterval(interval)
  })
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

<style scoped>
.featured-page {
  padding: 0;
  background: transparent;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
/* Categories Section */
.categories-section {
  padding: 2rem 0;
  background: transparent;
}

@media (max-width: 768px) {
  .categories-section {
    padding: 3rem 0 2rem 0;
  }
}

/* 手機版分類選單 */
.mobile-category-menu {
  display: none;
  margin: 1rem 0 2rem 0;
}

.mobile-menu-toggle {
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 107, 157, 0.2);
  border-radius: 15px;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 999;
}

.mobile-menu-toggle:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(255, 107, 157, 0.3);
  transform: translateY(-1px);
}

.mobile-menu-toggle.active {
  background: rgba(255, 107, 157, 0.1);
  border-color: rgba(255, 107, 157, 0.4);
}

.menu-text {
  flex: 1;
  text-align: left;
}

.menu-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.mobile-menu-toggle.active .menu-icon {
  transform: rotate(180deg);
}

.mobile-category-dropdown {
  position: fixed;
  top: auto;
  left: 20px;
  right: 20px;
  background: white;
  border: 1px solid transparent;
  border-radius: 15px;
  margin-top: 0.5rem;
  box-shadow: none;
  z-index: 998;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, border 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
  -webkit-overflow-scrolling: touch;
  opacity: 0;
  visibility: hidden;
}

.mobile-category-dropdown.open {
  max-height: calc(60vh - 20px);
  overflow-y: auto;
  opacity: 1;
  visibility: visible;
  border: 1px solid rgba(255, 107, 157, 0.2);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* 自定義滾動條 */
.mobile-category-dropdown::-webkit-scrollbar {
  width: 6px;
}

.mobile-category-dropdown::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
}

.mobile-category-dropdown::-webkit-scrollbar-thumb {
  background: rgba(255, 107, 157, 0.3);
  border-radius: 3px;
}

.mobile-category-dropdown::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 107, 157, 0.5);
}

.mobile-category-item {
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.mobile-category-item:last-child {
  border-bottom: none;
}

.mobile-category-item:hover {
  background: rgba(255, 107, 157, 0.05);
}

.mobile-category-item.active {
  background: rgba(255, 107, 157, 0.1);
  color: #ff6b9d;
  font-weight: 600;
}

.mobile-category-item .category-name {
  font-size: 1rem;
}

.mobile-category-item .category-count {
  font-size: 0.85rem;
  color: #666;
  background: rgba(255, 107, 157, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
}

.categories-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2rem;
  align-items: start;
}

/* 左側分類導航 */
.categories-sidebar {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 107, 157, 0.1);
  position: sticky;
  top: 2rem;
}

.sidebar-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.75rem;
  padding-bottom: 1rem;
  position: relative;
  letter-spacing: 0.02em;
}

.sidebar-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #ff6b9d, #ff8fab);
  border-radius: 2px;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

/* 自定義滾動條 */
.category-list::-webkit-scrollbar {
  width: 4px;
}

.category-list::-webkit-scrollbar-track {
  background: rgba(255, 107, 157, 0.1);
  border-radius: 2px;
}

.category-list::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #ff6b9d, #ff8fab);
  border-radius: 2px;
}

.category-list::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #ff5a8a, #ff7ba1);
}

.category-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  position: relative;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  min-height: 70px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.category-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 60%;
  background: linear-gradient(135deg, #ff6b9d, #ff8fab);
  border-radius: 0 8px 8px 0;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.category-item:hover {
  background: rgba(255, 107, 157, 0.1);
  border-color: rgba(255, 107, 157, 0.2);
  transform: translateX(4px);
  box-shadow: 0 4px 20px rgba(255, 107, 157, 0.15);
}

.category-item:hover::before {
  width: 4px;
}

.category-item.active {
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.15) 0%, rgba(255, 139, 171, 0.1) 100%);
  border-color: rgba(255, 107, 157, 0.3);
  transform: translateX(6px);
  box-shadow: 0 8px 30px rgba(255, 107, 157, 0.2);
}

.category-item.active::before {
  width: 6px;
}

.category-content {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  min-width: 0;
  flex: 1;
}

.category-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.3;
  letter-spacing: 0.01em;
}

.category-count {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
  opacity: 0.8;
}

.category-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #ff6b9d, #ff8fab);
  border-radius: 50%;
  animation: pulse 2s infinite;
  box-shadow: 0 0 8px rgba(255, 107, 157, 0.3);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.2);
  }
}

/* 右側商品展示 */
.products-content {
  min-width: 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  max-width: 100%;
  justify-items: center;
}

/* 當商品數量少時，使用居中佈局 */
.products-grid.few-products {
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, 320px));
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

/* 確保商品卡片有固定尺寸 */
.products-grid .product-card {
  max-width: 320px;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
}

.products-grid .product-card .product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.category-card {
  background: white;
  border-radius: 15px;
  padding: 2rem 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.category-card.active {
  border-color: #ff6b9d;
  background: rgba(255, 107, 157, 0.05);
}

.category-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.category-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.category-count {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

/* Products Section */
.products-section {
  padding: 2rem 0;
  background: transparent;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

/* Why Choose Section */
.why-choose-section {
  padding: 4rem 0;
  background: #f8f9fa;
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
  
  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
  
  .category-card {
    padding: 1.5rem 1rem;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* 新增響應式設計 */
@media (max-width: 1024px) {
  .categories-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .categories-sidebar {
    position: static;
    order: 2;
    max-width: 100%;
  }
  
  .products-content {
    order: 1;
  }
  
  .category-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.75rem;
    max-height: 400px;
  }
  
  .category-item {
    justify-content: center;
    text-align: center;
    padding: 0.875rem 1rem;
    min-height: 60px;
  }
  
  .category-item:hover,
  .category-item.active {
    transform: translateY(-3px);
  }
  
  .category-item::before {
    display: none;
  }
}

@media (max-width: 768px) {
  .mobile-category-menu {
    display: block;
    position: relative;
  }
  
  .mobile-category-dropdown {
    left: 10px;
    right: 10px;
  }
  
  .categories-layout {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .categories-sidebar.desktop-only {
    display: none;
  }
  
  .products-content {
    width: 100%;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    justify-content: center;
  }
  
  .category-item::before {
    display: none;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .products-grid.few-products {
    grid-template-columns: repeat(auto-fit, minmax(200px, 280px));
    max-width: 600px;
  }
}
</style>
