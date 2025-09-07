<template>
  <div class="homepage">
    <!-- Featured Products -->
    <section class="featured-products">
      <div class="container">
        <div class="section-divider">
          <span>精選商品</span>
        </div>
        <div class="products-grid">
          <ProductCard 
            v-for="product in regularProducts.slice(0, 8)"
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
    </section>

    <!-- Contact Card -->
    <ContactCard />

    <!-- Limited Edition -->
    <section class="limited-edition">
      <div class="container">
        <div class="section-divider">
          <span>限量版</span>
        </div>
        <div class="limited-grid">
          <LimitedCard 
            v-for="product in limitedProducts"
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
    </section>

    <!-- Pre-order Exclusives -->
    <section class="preorder-exclusives">
      <div class="container">
        <img 
          src="/images/preorder/preorder-banner.jpg" 
          alt="預購專區" 
          class="preorder-banner-image"
          @error="handleImageError"
          @load="handleImageLoad"
          :style="{ display: imageLoaded ? 'block' : 'none' }"
        />
        <div 
          v-if="!imageLoaded" 
          class="preorder-banner-placeholder"
        >
          <div class="banner-icon">🛍️</div>
          <div class="banner-text">預購專區</div>
          <div class="banner-subtitle">即將推出精彩商品</div>
        </div>
      </div>
    </section>

    <!-- Featured Figurines -->
    <section class="featured-figurines">
      <div class="container">
        <div class="section-divider">
          <span>精選公仔</span>
        </div>
        <div class="figurines-grid">
          <FigurineCard 
            v-for="product in regularProducts.slice(8, 16)"
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
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 載入商品資料
import productsData from '~/data/products.json'

// 分離一般商品和限量版商品
const regularProducts = productsData.filter(product => !product.isLimited)
const limitedProducts = productsData.filter(product => product.isLimited)

// 預購專區圖片載入狀態
const imageLoaded = ref(false)
const imageError = ref(false)

// 處理圖片載入成功
const handleImageLoad = () => {
  imageLoaded.value = true
  imageError.value = false
  console.log('預購專區圖片載入成功')
}

// 處理圖片載入失敗
const handleImageError = (event) => {
  imageLoaded.value = false
  imageError.value = true
  console.error('預購專區圖片載入失敗:', event)
  
  // 嘗試重新載入圖片
  setTimeout(() => {
    if (imageError.value) {
      const img = event.target
      img.src = img.src + '?t=' + Date.now() // 添加時間戳避免快取
    }
  }, 2000)
}

// 組件掛載時檢查圖片狀態
onMounted(() => {
  // 預設顯示圖片，如果載入失敗則顯示備用方案
  imageLoaded.value = true
})
</script>

<style scoped>
/* 全局樣式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.homepage {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background: transparent;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}



/* Section Dividers */
.section-divider {
  text-align: center;
  margin: 4rem 0 3rem;
  position: relative;
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

/* Featured Products */
.featured-products {
  padding: 2rem 0;
  background: rgba(255, 255, 255, 0.9);
  position: relative;
  z-index: 1;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  padding: 2rem 0;
}

.product-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 0;
  text-align: center;
  transition: transform 0.3s;
  overflow: hidden;
  position: relative;
  border: 3px solid #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
}


.product-image {
  width: 100%;
  height: 320px;
  border-radius: 15px 15px 0 0;
  background: #f8f9fa;
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
}

.product-info {
  padding: 0.3rem 0.8rem 0.6rem;
}

.magical-girl {
  background: #ff69b4;
}

.warrior {
  background: #87ceeb;
}

.anime-hero {
  background: #333;
}

.exclusive {
  background: #9370db;
}

.product-info h3 {
  font-size: 1rem;
  margin-bottom: 0.1rem;
  color: #333;
  font-weight: 600;
}

.product-info p {
  color: #666;
  margin-bottom: 0.2rem;
  font-size: 0.8rem;
}

.limited-info h3 {
  font-size: 1rem;
  margin-bottom: 0.05rem;
  color: #333;
  font-weight: 600;
}

.limited-info p {
  color: #666;
  margin-bottom: 0.1rem;
  font-size: 0.8rem;
}

.figurine-info h3 {
  font-size: 1rem;
  margin-bottom: 0.1rem;
  color: #333;
  font-weight: 600;
}

.figurine-info p {
  color: #666;
  margin-bottom: 0.2rem;
  font-size: 0.8rem;
}

.price {
  font-size: 1.3rem;
  font-weight: bold;
  color: #ff6b9d;
}


/* Limited Edition */
.limited-edition {
  padding: 2rem 0;
  background: rgba(255, 255, 255, 0.9);
  position: relative;
  z-index: 1;
}

.limited-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  padding: 2rem 0;
}

.limited-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 0;
  text-align: center;
  transition: transform 0.3s;
  overflow: hidden;
  position: relative;
  border: 3px solid #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
}


.limited-image {
  width: 100%;
  height: 380px;
  border-radius: 15px 15px 0 0;
  background: #f8f9fa;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.limited-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
}

.limited-info {
  padding: 0.2rem 0.8rem 0.5rem;
}

.collector {
  background: #ff69b4;
}

.exclusive-edition {
  background: #333;
}

/* Pre-order Exclusives */
.preorder-exclusives {
  padding: 2rem 0;
  background: rgba(255, 255, 255, 0.9);
  position: relative;
  z-index: 1;
}

.preorder-banner-image {
  width: 100%;
  height: auto;
  border-radius: 15px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}


.preorder-banner-placeholder {
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3);
  position: relative;
  overflow: hidden;
}

.preorder-banner-placeholder::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.preorder-banner-placeholder:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(255, 107, 157, 0.4);
}

.banner-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.banner-text {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.banner-subtitle {
  font-size: 1rem;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}


/* Featured Figurines */
.featured-figurines {
  padding: 2rem 0;
  background: rgba(255, 255, 255, 0.9);
  position: relative;
  z-index: 1;
}

.figurines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  padding: 2rem 0;
}

.figurine-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 0;
  text-align: center;
  transition: transform 0.3s;
  overflow: hidden;
  position: relative;
  border: 3px solid #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
}


.figurine-image {
  width: 100%;
  height: 320px;
  border-radius: 15px 15px 0 0;
  background: #f8f9fa;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.figurine-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
}

.figurine-info {
  padding: 0.3rem 0.8rem 0.6rem;
}

.elegant {
  background: #87ceeb;
}

.adorable {
  background: #ff69b4;
}

.collectors-edition {
  background: #333;
}

.exclusive-design {
  background: #87ceeb;
}


/* 響應式設計 */
@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem 3px;
    justify-content: center;
  }
  
  .limited-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem 3px;
    justify-content: center;
  }
  
  .figurines-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem 3px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: 1rem 3px;
    justify-content: center;
    max-width: 300px;
    margin: 1rem auto;
  }
  
  .limited-grid {
    grid-template-columns: 1fr;
    gap: 1rem 3px;
    justify-content: center;
    max-width: 300px;
    margin: 1rem auto;
  }
  
  .figurines-grid {
    grid-template-columns: 1fr;
    gap: 1rem 3px;
    justify-content: center;
    max-width: 300px;
    margin: 1rem auto;
  }
}
</style>
