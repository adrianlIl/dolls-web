<template>
  <div class="licensed-page">
    <!-- Hero Section -->
    <PageHero
      title="授權雕像"
      subtitle="官方正版授權，精工製作的高品質雕像收藏品"
      :badges="['官方授權', '限量發行', '精工製作']"
      background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    />


    <!-- Licensed Products -->
    <section class="products-section">
      <div class="container">
        <SectionDivider title="授權雕像商品" />
        <div class="products-grid">
          <div v-for="product in licensedProducts" :key="product.id" class="licensed-product-card" :class="{ 'sold-out': product.isSoldOut }">
            <div class="product-image">
              <img :src="product.image" :alt="product.name" />
              <div class="license-badge">{{ product.license }}</div>
              <div class="limited-badge" v-if="product.limited">限量版</div>
              <div v-if="product.isSoldOut" class="sold-out-overlay">
                <div class="sold-out-badge">售完</div>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-series">{{ product.series }}</p>
              <div class="product-tags">
                <span v-for="tag in product.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <div class="product-price">
                <span class="price" :class="{ 'sold-out-price': product.isSoldOut }">{{ product.price }}</span>
                <span class="original-price" v-if="product.originalPrice">{{ product.originalPrice }}</span>
              </div>
              <div class="product-actions">
                <button class="contact-service" @click="showQRCode = true">
                  <span class="icon">💬</span>
                  立即聯絡客服
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Assurance -->
    <section class="quality-section">
      <div class="container">
        <SectionDivider title="品質保證" />
        <FeatureGrid 
          :features="qualityFeatures"
          :columns="4"
        />
      </div>
    </section>

    <!-- QR Code Modal -->
    <div v-if="showQRCode" class="qr-modal" @click="showQRCode = false">
      <div class="qr-modal-content" @click.stop>
        <button class="close-btn" @click="showQRCode = false">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="qr-content">
          <h3>掃描 QR Code 加入 LINE 客服</h3>
          <div class="qr-image-container">
            <img src="/qrcode/lineqr.jpg" alt="LINE 客服 QR Code" class="qr-image" />
          </div>
          <p class="qr-instruction">使用 LINE 掃描上方 QR Code 即可開始對話</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 授權雕像頁面
import { ref, computed } from 'vue'
import productsData from '~/data/products.json'

// QR Code 彈窗控制
const showQRCode = ref(false)

// 品質保證特徵
const qualityFeatures = [
  {
    id: 'official',
    icon: '🏆',
    title: '官方授權',
    description: '所有商品均獲得官方正版授權，確保合法性'
  },
  {
    id: 'craftsmanship',
    icon: '🔍',
    title: '精工製作',
    description: '採用高品質材料，精工細作，細節完美'
  },
  {
    id: 'certificate',
    icon: '📜',
    title: '收藏證書',
    description: '每件商品附帶官方收藏證書，增加收藏價值'
  },
  {
    id: 'shipping',
    icon: '🚚',
    title: '安全配送',
    description: '專業包裝，確保商品在運輸過程中完好無損'
  }
]

// 授權雕像商品 - 只顯示指定的三個商品
const licensedProducts = computed(() => {
  const targetTitles = [
    '【GK預購】Prime 1 Studio 概念設計量產機｜新世紀福音戰士',
    '【GK預購】Prime 1 Studio 萊莎｜萊莎的鍊金工房3',
    '【GK預購】集美殿堂 紅髮傑克｜海賊王'
  ]
  
  return productsData
    .filter(product => targetTitles.includes(product.title))
    .map(product => {
      const mappedProduct = {
        id: product.id,
        name: product.title,
        series: extractSeries(product.title),
        license: extractLicense(product.title),
        scale: extractScale(product.description),
        material: extractMaterial(product.description),
        height: extractHeight(product.description),
        price: product.price,
        image: product.mainImage,
        limited: product.isLimited || false,
        isSoldOut: product.isSoldOut || false,
        description: product.description
      }
      mappedProduct.tags = getProductTags(mappedProduct)
      return mappedProduct
    })
})

// 輔助函數
const extractSeries = (title) => {
  if (title.includes('新世紀福音戰士')) return '新世紀福音戰士'
  if (title.includes('萊莎')) return '萊莎的鍊金工房3'
  if (title.includes('紅髮傑克')) return '海賊王'
  return '未知系列'
}

const extractLicense = (title) => {
  if (title.includes('Prime 1 Studio')) return 'Prime 1 Studio'
  if (title.includes('集美殿堂')) return '集美殿堂'
  return '官方授權'
}

const extractScale = (description) => {
  const scaleMatch = description.match(/1\/[0-9]+/)
  return scaleMatch ? scaleMatch[0] : '未標註'
}

const extractMaterial = (description) => {
  if (description.includes('寶麗石')) return '寶麗石'
  if (description.includes('樹脂')) return '樹脂'
  if (description.includes('PU')) return 'PU'
  return '高品質材料'
}

const extractHeight = (description) => {
  const heightMatch = description.match(/高(\d+)cm/)
  return heightMatch ? `${heightMatch[1]}cm` : '未標註'
}

// 獲取商品標籤
const getProductTags = (product) => {
  if (product.name.includes('萊莎')) {
    return [
      'GK公仔 1/4',
      'GK公仔 授權',
      '雕像 授權',
      'GK公仔 寶麗石',
      'GK公仔 Prime 1 Studio'
    ]
  } else if (product.name.includes('紅髮傑克')) {
    return [
      'GK公仔 海賊王',
      'GK公仔 授權',
      '雕像 授權',
      '雕像 海賊王',
      '授權 海賊王',
      'GK公仔 集美殿堂'
    ]
  } else if (product.name.includes('概念設計量產機')) {
    return [
      'GK公仔 授權',
      '雕像 授權',
      'GK公仔 寶麗石',
      'GK公仔 Prime 1 Studio',
      '授權 Prime 1 Studio'
    ]
  }
  return []
}

// 移除不再使用的方法
</script>

<style scoped>
.licensed-page {
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 4rem 0;
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
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


/* Products Section */
.products-section {
  padding: 4rem 0;
  background: transparent;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  padding: 20px 0; /* 為陰影留出上下空間 */
}

.licensed-product-card {
  background: white !important;
  border-radius: 15px;
  overflow: visible;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  z-index: 10;
  margin-bottom: 20px; /* 為陰影留出空間 */
}

/* 移除 hover 效果 - 授權雕像卡片不需要 hover 效果 */
/* .licensed-product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
} */

/* 售完狀態樣式 */
.licensed-product-card.sold-out {
  opacity: 0.8;
  filter: grayscale(0.2);
  background: white !important;
}

.sold-out-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
  z-index: 3;
}

.sold-out-badge {
  background: #dc3545;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  border: 2px solid white;
}

.sold-out-price {
  color: #6c757d !important;
  text-decoration: line-through;
}

.product-image {
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.license-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #667eea;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: bold;
}

.limited-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff4757;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: bold;
}

.product-info {
  padding: 1.5rem;
  background: white !important;
  border-radius: 0 0 15px 15px;
  position: relative;
  z-index: 10;
}

.product-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  height: 2.8em; /* 固定高度為2行 */
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-series {
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
  height: 1.4em; /* 固定高度為1行 */
  line-height: 1.4;
  overflow: hidden;
}

.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  height: 4em; /* 固定高度，容納多行標籤 */
  align-content: flex-start;
}

.tag {
  font-size: 0.8rem;
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
  padding: 0.3rem 0.6rem;
  border-radius: 15px;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.2);
}


.product-price {
  margin-bottom: 1.5rem;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #667eea;
  margin-right: 0.5rem;
}

.original-price {
  text-decoration: line-through;
  color: #999;
  font-size: 1rem;
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
  padding: 1rem 1.5rem;
  border-radius: 8px;
  cursor: not-allowed;
  font-size: 1rem;
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

/* Quality Section */
.quality-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.quality-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.quality-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.quality-card:hover {
  transform: translateY(-5px);
}

.quality-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.quality-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.quality-card p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-badges {
    flex-direction: column;
    align-items: center;
  }
  
  .quality-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .product-specs {
    flex-direction: column;
  }
}

/* QR Code Modal */
.qr-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.qr-modal-content {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  max-width: 400px;
  width: 90%;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  transition: color 0.3s;
}

.close-btn:hover {
  color: #333;
}

.qr-content {
  text-align: center;
}

.qr-content h3 {
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.2rem;
}

.qr-image-container {
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 15px;
  display: inline-block;
}

.qr-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
}

.qr-instruction {
  color: #666;
  font-size: 0.9rem;
  margin-top: 1rem;
}
</style>
