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
          />
        </div>
      </div>
    </section>

    <!-- Pre-order Exclusives -->
    <section class="preorder-exclusives">
      <div class="container">
        <img src="/images/preorder/preorder-banner.jpg" alt="預購專區" class="preorder-banner-image" />
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
          />
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// 載入商品資料
import productsData from '~/data/products.json'

// 分離一般商品和限量版商品
const regularProducts = productsData.filter(product => !product.isLimited)
const limitedProducts = productsData.filter(product => product.isLimited)
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
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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
  background: transparent;
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
  box-shadow: 
    4px 4px 0 #ff6b9d,
    8px 8px 0 #4ecdc4,
    12px 12px 0 #45b7d1,
    16px 16px 0 #96ceb4;
  backdrop-filter: blur(10px);
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 320px;
  border-radius: 15px 15px 0 0;
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
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
  background: linear-gradient(45deg, #ff69b4, #ffb6c1);
}

.warrior {
  background: linear-gradient(45deg, #87ceeb, #b0e0e6);
}

.anime-hero {
  background: linear-gradient(45deg, #333, #666);
}

.exclusive {
  background: linear-gradient(45deg, #9370db, #ba55d3);
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
  background: transparent;
}

.limited-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  box-shadow: 
    4px 4px 0 #ff6b9d,
    8px 8px 0 #4ecdc4,
    12px 12px 0 #45b7d1,
    16px 16px 0 #96ceb4;
  backdrop-filter: blur(10px);
}

.limited-card:hover {
  transform: translateY(-10px);
}

.limited-image {
  width: 100%;
  height: 380px;
  border-radius: 15px 15px 0 0;
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
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
  background: linear-gradient(45deg, #ff69b4, #ff1493);
}

.exclusive-edition {
  background: linear-gradient(45deg, #333, #ff69b4);
}

/* Pre-order Exclusives */
.preorder-exclusives {
  padding: 2rem 0;
  background: transparent;
}

.preorder-banner-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 15px;
  
  transition: transform 0.3s ease;
}

.preorder-banner-image:hover {
  transform: translateY(-5px);
}

/* Featured Figurines */
.featured-figurines {
  padding: 2rem 0;
  background: transparent;
}

.figurines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  box-shadow: 
    4px 4px 0 #ff6b9d,
    8px 8px 0 #4ecdc4,
    12px 12px 0 #45b7d1,
    16px 16px 0 #96ceb4;
  backdrop-filter: blur(10px);
}

.figurine-card:hover {
  transform: translateY(-5px);
}

.figurine-image {
  width: 100%;
  height: 320px;
  border-radius: 15px 15px 0 0;
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
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
  background: linear-gradient(45deg, #87ceeb, #b0e0e6);
}

.adorable {
  background: linear-gradient(45deg, #ff69b4, #ffb6c1);
}

.collectors-edition {
  background: linear-gradient(45deg, #333, #ff69b4);
}

.exclusive-design {
  background: linear-gradient(45deg, #87ceeb, #fff);
}


/* 響應式設計 */
@media (max-width: 768px) {
  /* Mobile responsive styles */
}
</style>
