<template>
  <div class="service-page">
    <!-- Hero Section -->
    <PageHero
      title="售後服務"
      subtitle="專業的售後服務團隊，為您的購買提供全方位保障"
      background="linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    />

    <!-- Service Categories -->
    <section class="service-categories">
      <div class="container">
        <SectionDivider title="服務項目" />
        <FeatureGrid 
          :features="serviceFeatures"
          :columns="4"
          :clickable="true"
          @feature-click="selectService"
        />
      </div>
    </section>

    <!-- Contact Methods -->
    <section id="contact-methods" class="contact-methods">
      <div class="container">
        <SectionDivider title="聯絡方式" />
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-icon">📱</div>
            <h3>LINE 客服</h3>
            <p>即時回覆，專業服務</p>
            <div class="qr-code">
              <img src="/qrcode/lineqr.jpg" alt="LINE QR Code" class="qr-image" />
            </div>
            <button class="contact-btn" @click="openLineChat">立即聯絡</button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq-section" class="faq-section">
      <div class="container">
        <SectionDivider title="常見問題" />
        <div class="faq-list">
          <div 
            v-for="(faq, index) in faqList" 
            :key="index"
            class="faq-item"
            :class="{ active: activeFaq === index }"
            @click="toggleFaq(index)"
          >
            <div class="faq-question">
              <h3>{{ faq.question }}</h3>
              <span class="faq-icon">{{ activeFaq === index ? '−' : '+' }}</span>
            </div>
            <div class="faq-answer" v-show="activeFaq === index">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Warranty Info -->
    <section class="warranty-section">
      <div class="container">
        <SectionDivider title="保固資訊" />
        <FeatureGrid 
          :features="warrantyFeatures"
          :columns="3"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
// 售後服務頁面
import { ref } from 'vue'

// 響應式數據
const activeFaq = ref(null)

// 服務分類特徵
const serviceFeatures = [
  {
    id: 'repair',
    icon: '🔧',
    title: '商品維修',
    description: '專業維修服務，讓您的收藏品重獲新生',
    features: ['免費檢測', '原廠零件', '專業技師', '快速維修']
  },
  {
    id: 'exchange',
    icon: '🔄',
    title: '退換貨服務',
    description: '完善的退換貨政策，保障您的權益',
    features: ['7天退換', '免費退貨', '快速處理', '全程追蹤']
  },
  {
    id: 'consultation',
    icon: '💡',
    title: '收藏諮詢',
    description: '專業收藏建議，助您建立完美收藏',
    features: ['專業建議', '市場分析', '收藏規劃', '投資指導']
  },
  {
    id: 'custom',
    icon: '🎨',
    title: '客製化服務',
    description: '獨一無二的客製化商品，滿足您的特殊需求',
    features: ['個性設計', '獨家製作', '品質保證', '專屬服務']
  }
]

// 保固資訊特徵
const warrantyFeatures = [
  {
    id: 'warranty',
    icon: '🛡️',
    title: '商品保固',
    description: 'PVC手辦：1年保固\nGK模型：6個月保固\n景品：3個月保固\n周邊商品：3個月保固'
  },
  {
    id: 'return',
    icon: '🔄',
    title: '退換貨政策',
    description: '收到商品7天內可退換\n商品需保持原包裝完整\n人為損壞不在保固範圍\n運費由買方負擔'
  },
  {
    id: 'shipping',
    icon: '🚚',
    title: '配送服務',
    description: '台灣本島免運費\n外島地區運費另計\n24小時內出貨\n可追蹤配送狀態'
  }
]

// 常見問題
const faqList = [
  {
    question: '如何申請退換貨？',
    answer: '請在收到商品後7天內聯繫客服，提供訂單號碼和退換貨原因。我們會安排專人處理您的申請。'
  },
  {
    question: '商品保固期多長？',
    answer: 'PVC手辦保固1年，GK模型保固6個月，景品和周邊商品保固3個月。保固範圍包括製造缺陷，不包括人為損壞。'
  },
  {
    question: '如何追蹤訂單狀態？',
    answer: '您可以在會員中心查看訂單狀態，或聯繫客服提供訂單號碼查詢。我們也會在關鍵節點發送通知。'
  },
  {
    question: '預購商品何時發貨？',
    answer: '預購商品發貨時間依廠商公告為準，通常為截單後3-12個月。我們會及時更新發貨資訊。'
  },
  {
    question: '商品損壞如何處理？',
    answer: '如收到損壞商品，請立即拍照並聯繫客服。我們會安排換貨或退款，運費由我們承擔。'
  }
]

// 方法
const selectService = (serviceId) => {
  console.log('Selected service:', serviceId)
}

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const openLineChat = () => {
  window.open('https://line.me/ti/p/@dolls-web', '_blank')
}


</script>

<style scoped>
.service-page {
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
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
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

/* Service Categories */
.service-categories {
  padding: 4rem 0;
  background: transparent;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
}

.service-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.service-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.feature-tag {
  background: #ff9a9e;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Contact Methods */
.contact-methods {
  padding: 4rem 0;
  background: #f8f9fa;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.contact-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.contact-card p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.qr-code {
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.qr-placeholder {
  width: 100px;
  height: 100px;
  background: #f8f9fa;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.phone-number {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ff9a9e;
  margin: 0;
}

.contact-btn {
  background: #ff9a9e;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background: #ff8a8e;
  transform: translateY(-1px);
}

/* FAQ Section */
.faq-section {
  padding: 4rem 0;
  background: transparent;
}

.faq-list {
  max-width: 800px;
  margin: 2rem auto 0;
}

.faq-item {
  background: white;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.faq-question {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  transition: background 0.3s ease;
}

.faq-item.active .faq-question {
  background: #ff9a9e;
  color: white;
}

.faq-question h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.faq-icon {
  font-size: 1.5rem;
  font-weight: bold;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  background: white;
}

.faq-answer p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* Warranty Section */
.warranty-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.warranty-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.warranty-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.warranty-card:hover {
  transform: translateY(-5px);
}

.warranty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
}

.warranty-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
}

.warranty-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.warranty-card li {
  padding: 0.5rem 0;
  color: #666;
  border-bottom: 1px solid #f0f0f0;
}

.warranty-card li:last-child {
  border-bottom: none;
}

.warranty-card li::before {
  content: '✓';
  color: #ff9a9e;
  font-weight: bold;
  margin-right: 0.5rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .categories-grid, .contact-grid, .warranty-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .service-features {
    justify-content: flex-start;
  }
  
  .faq-question {
    padding: 1rem;
  }
  
  .faq-answer {
    padding: 0 1rem 1rem;
  }
}
</style>
