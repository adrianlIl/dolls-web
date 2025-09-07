<template>
  <div class="about-page">
    <!-- Hero Section -->
    <PageHero
      title="品牌介紹"
      subtitle="全擊GK潮流公仔 - 專業的動漫收藏品專家"
      background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    />

    <!-- Brand Story -->
    <section class="brand-story">
      <div class="container">
        <div class="story-content">
          <div class="story-text">
            <h2 class="story-title">我們的品牌故事</h2>
            <p class="story-description">
              全擊GK潮流公仔成立於2020年，專注於提供高品質的動漫收藏品和GK模型。
              我們深知每一位收藏家對完美商品的追求，因此我們精心挑選每一件商品，
              確保它們不僅具有出色的品質，更能為您的收藏增添獨特價值。
            </p>
            <p class="story-description">
              從最初的幾款商品到現在擁有數百種精選收藏品，我們始終堅持「品質第一、
              服務至上」的理念。我們與全球知名品牌和工作室建立合作關係，
              為台灣的動漫愛好者帶來最優質的收藏體驗。
            </p>
          </div>
          <div class="story-image">
            <img src="/images/preorder/company.jpg" alt="品牌故事" class="company-image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="values-section">
      <div class="container">
        <SectionDivider title="我們的價值觀" />
        <FeatureGrid 
          :features="valuesFeatures"
          :columns="4"
        />
      </div>
    </section>


    <!-- Company Stats -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-label">精選商品</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">10,000+</div>
            <div class="stat-label">滿意客戶</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">合作品牌</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">99%</div>
            <div class="stat-label">客戶滿意度</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="contact-info">
      <div class="container">
        <SectionDivider title="聯絡我們" />
        <FeatureGrid 
          :features="contactFeatures"
          :columns="3"
        />
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-content">
          <h2 class="mission-title">我們的使命</h2>
          <p class="mission-text">
            讓每一位動漫愛好者都能輕鬆找到心儀的收藏品，享受高品質的購物體驗。
            我們致力於成為台灣最專業、最值得信賴的動漫收藏品平台，
            為您的收藏之路提供最強有力的支持。
          </p>
          <div class="mission-goals">
            <div class="goal-item">
              <span class="goal-icon">🎯</span>
              <span class="goal-text">提供最優質的商品</span>
            </div>
            <div class="goal-item">
              <span class="goal-icon">🤝</span>
              <span class="goal-text">建立信任的關係</span>
            </div>
            <div class="goal-item">
              <span class="goal-icon">💡</span>
              <span class="goal-text">創造美好的體驗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 品牌介紹頁面
import { computed } from 'vue'

// 價值觀特徵
const valuesFeatures = [
  {
    id: 'professional',
    icon: '🎯',
    title: '專業精準',
    description: '我們擁有專業的團隊，對每一件商品都進行嚴格篩選，確保品質達到最高標準。'
  },
  {
    id: 'integrity',
    icon: '🤝',
    title: '誠信服務',
    description: '以誠信為本，為每一位客戶提供透明、可靠的服務，建立長期的信任關係。'
  },
  {
    id: 'quality',
    icon: '💎',
    title: '品質保證',
    description: '所有商品均為正版授權，提供完善的售後服務，讓您購買無憂。'
  },
  {
    id: 'innovation',
    icon: '🚀',
    title: '持續創新',
    description: '不斷引進新品，跟上潮流趨勢，為您提供最新最熱門的收藏品。'
  }
]

// 聯絡方式特徵
const contactFeatures = [
  {
    id: 'address',
    icon: '📍',
    title: '公司地址',
    description: '臺中市南區和平里忠明南路758號\n17樓'
  },
  {
    id: 'phone',
    icon: '📞',
    title: '聯絡電話',
    description: '02-2700-8888\n週一至週五 9:00-18:00'
  },
  {
    id: 'line',
    icon: '📱',
    title: 'LINE 客服',
    description: '24小時線上客服'
  }
]
</script>

<style scoped>
.about-page {
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

/* Brand Story */
.brand-story {
  padding: 4rem 0;
  background: transparent;
}

.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.story-text {
  padding-right: 2rem;
}

.story-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
}

.story-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1.5rem;
}

.story-image {
  text-align: center;
}

.company-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.company-image:hover {
  transform: scale(1.02);
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

/* Values Section */
.values-section {
  padding: 4rem 0 6rem 0;
  background: #f8f9fa;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
}

.value-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.value-card:hover {
  transform: translateY(-5px);
  z-index: 10;
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.value-card p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}


/* Stats Section */
.stats-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  padding: 2rem 1rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Contact Info */
.contact-info {
  padding: 4rem 0 6rem 0;
  background: #f8f9fa;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.contact-item {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.contact-item:hover {
  transform: translateY(-5px);
  z-index: 10;
}

.contact-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-item h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.contact-item p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* Mission Section */
.mission-section {
  padding: 4rem 0;
  background: transparent;
}

.mission-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.mission-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
}

.mission-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 3rem;
}

.mission-goals {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.goal-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.goal-icon {
  font-size: 2rem;
}

.goal-text {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .story-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .story-text {
    padding-right: 0;
  }
  
  .story-title {
    font-size: 2rem;
  }
  
  .values-grid, .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .mission-goals {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
