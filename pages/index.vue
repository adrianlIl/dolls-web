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
            title="魔法少女" 
            description="可愛的粉髮角色" 
            price="NT$ 899" 
            image-class="magical-girl" 
          />
          <ProductCard 
            title="戰士" 
            description="勇敢的金髮戰士" 
            price="NT$ 1,049" 
            image-class="warrior" 
          />
          <ProductCard 
            title="動漫英雄" 
            description="帥氣的黑髮主角" 
            price="NT$ 1,199" 
            image-class="anime-hero" 
          />
          <ProductCard 
            title="限定公仔" 
            description="限量版收藏品" 
            price="NT$ 1,499" 
            image-class="exclusive" 
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
            title="收藏家版" 
            description="高級粉髮戰士" 
            price="NT$ 2,399" 
            image-class="collector" 
          />
          <LimitedCard 
            title="獨家版" 
            description="稀有黑髮戰士" 
            price="NT$ 2,699" 
            image-class="exclusive-edition" 
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
            title="優雅設計" 
            description="美麗的金髮藍裙角色" 
            price="NT$ 1,379" 
            image-class="elegant" 
          />
          <FigurineCard 
            title="可愛版" 
            description="可愛的粉髮角色" 
            price="NT$ 989" 
            image-class="adorable" 
          />
          <FigurineCard 
            title="收藏家版" 
            description="獨家黑白粉設計" 
            price="NT$ 1,979" 
            image-class="collectors-edition" 
          />
          <FigurineCard 
            title="獨家設計" 
            description="獨特的藍白配色" 
            price="NT$ 1,679" 
            image-class="exclusive-design" 
          />
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// 動漫公仔官方網站主頁面
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
  background: white;
  padding: 0 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  position: relative;
  z-index: 2;
}

/* Featured Products */
.featured-products {
  padding: 2rem 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.product-card {
  background: white;
  border-radius: 15px;
  padding: 0;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  overflow: hidden;
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
}

.limited-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.limited-card {
  background: white;
  border-radius: 15px;
  padding: 0;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  transition: transform 0.3s;
  overflow: hidden;
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
  background: #f8f9fa;
}

.preorder-banner-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.preorder-banner-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

/* Featured Figurines */
.featured-figurines {
  padding: 2rem 0;
}

.figurines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.figurine-card {
  background: white;
  border-radius: 15px;
  padding: 0;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  overflow: hidden;
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
