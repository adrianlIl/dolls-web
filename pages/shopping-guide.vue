<template>
  <div class="shopping-guide-page">
    <!-- Hero Section -->
    <PageHero
      title="購物須知及流程"
      subtitle="完整的購物指南，讓您輕鬆享受購物樂趣"
      background="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    />

    <!-- Quick Navigation -->
    <section class="quick-nav">
      <div class="container">
        <div class="nav-cards">
          <div class="nav-card" @click="scrollToSection('shopping-process')">
            <div class="nav-icon">🛒</div>
            <h3>購物流程</h3>
          </div>
          <div class="nav-card" @click="scrollToSection('contact-service')">
            <div class="nav-icon">📞</div>
            <h3>聯絡客服</h3>
          </div>
          <div class="nav-card" @click="scrollToSection('shipping-info')">
            <div class="nav-icon">🚚</div>
            <h3>配送資訊</h3>
          </div>
          <div class="nav-card" @click="scrollToSection('member-benefits')">
            <div class="nav-icon">👑</div>
            <h3>會員福利</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Shopping Guide Content -->
    <section class="guide-content">
      <div class="container">
        <div class="content-wrapper">
          <!-- 1. 購物流程 -->
          <div id="shopping-process" class="guide-section">
            <h2 class="section-title">
              <span class="section-icon">🛒</span>
              1. 購物流程
            </h2>
            <div class="section-content">
              <div class="process-timeline">
                <div class="timeline-item">
                  <div class="timeline-step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                      <h3>瀏覽商品</h3>
                      <p>瀏覽我們豐富的商品目錄，使用篩選功能快速找到您喜愛的商品</p>
                      <div class="step-features">
                        <span class="feature-tag">商品分類</span>
                        <span class="feature-tag">價格篩選</span>
                        <span class="feature-tag">品牌篩選</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                      <h3>加入購物車</h3>
                      <p>選擇商品規格、數量，確認無誤後加入購物車</p>
                      <div class="step-features">
                        <span class="feature-tag">規格選擇</span>
                        <span class="feature-tag">數量調整</span>
                        <span class="feature-tag">庫存確認</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                      <h3>聯絡客服</h3>
                      <p>透過LINE客服完成訂單確認和付款安排</p>
                      <div class="step-features">
                        <span class="feature-tag">LINE客服</span>
                        <span class="feature-tag">訂單確認</span>
                        <span class="feature-tag">付款安排</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-step">
                    <div class="step-number">4</div>
                    <div class="step-content">
                      <h3>訂單確認</h3>
                      <p>收到訂單確認通知，開始準備商品出貨</p>
                      <div class="step-features">
                        <span class="feature-tag">訂單編號</span>
                        <span class="feature-tag">出貨通知</span>
                        <span class="feature-tag">追蹤碼</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-step">
                    <div class="step-number">5</div>
                    <div class="step-content">
                      <h3>商品配送</h3>
                      <p>商品包裝出貨，透過物流配送至指定地址</p>
                      <div class="step-features">
                        <span class="feature-tag">包裝保護</span>
                        <span class="feature-tag">物流追蹤</span>
                        <span class="feature-tag">到貨通知</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. 付款方式 -->
          <div id="payment-methods" class="guide-section">
            <h2 class="section-title">
              <span class="section-icon">💳</span>
              2. 付款方式
            </h2>
            <div class="section-content">
              <div class="payment-grid">
                <div class="payment-card">
                  <div class="payment-icon">💳</div>
                  <h3>信用卡付款</h3>
                  <p>支援Visa、MasterCard、JCB等主要信用卡</p>
                  <div class="payment-features">
                    <span class="feature">即時扣款</span>
                    <span class="feature">安全加密</span>
                    <span class="feature">分期付款</span>
                  </div>
                </div>
                <div class="payment-card">
                  <div class="payment-icon">🏦</div>
                  <h3>ATM轉帳</h3>
                  <p>透過ATM或網路銀行轉帳付款</p>
                  <div class="payment-features">
                    <span class="feature">無手續費</span>
                    <span class="feature">24小時</span>
                    <span class="feature">即時確認</span>
                  </div>
                </div>
                <div class="payment-card">
                  <div class="payment-icon">📱</div>
                  <h3>行動支付</h3>
                  <p>支援Apple Pay、Google Pay等行動支付</p>
                  <div class="payment-features">
                    <span class="feature">快速結帳</span>
                    <span class="feature">指紋認證</span>
                    <span class="feature">安全便利</span>
                  </div>
                </div>
                <div class="payment-card">
                  <div class="payment-icon">🏪</div>
                  <h3>超商代碼</h3>
                  <p>至超商櫃台繳費，支援7-11、全家、萊爾富</p>
                  <div class="payment-features">
                    <span class="feature">便利繳費</span>
                    <span class="feature">無信用卡</span>
                    <span class="feature">24小時</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 3. 配送資訊 -->
          <div id="shipping-info" class="guide-section">
            <h2 class="section-title">
              <span class="section-icon">🚚</span>
              3. 配送資訊
            </h2>
            <div class="section-content">
              <div class="shipping-info-grid">
                <div class="shipping-card">
                  <h3>配送範圍</h3>
                  <div class="shipping-details">
                    <div class="detail-item">
                      <span class="detail-icon">🏠</span>
                      <div class="detail-content">
                        <h4>台灣本島</h4>
                        <p>免運費，24小時內出貨</p>
                      </div>
                    </div>
                    <div class="detail-item">
                      <span class="detail-icon">🏝️</span>
                      <div class="detail-content">
                        <h4>外島地區</h4>
                        <p>運費另計，3-5個工作天</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shipping-card">
                  <h3>配送時間</h3>
                  <div class="shipping-details">
                    <div class="detail-item">
                      <span class="detail-icon">📦</span>
                      <div class="detail-content">
                        <h4>現貨商品</h4>
                        <p>24小時內出貨，1-2天到貨</p>
                      </div>
                    </div>
                    <div class="detail-item">
                      <span class="detail-icon">⏰</span>
                      <div class="detail-content">
                        <h4>預購商品</h4>
                        <p>依廠商公告時間出貨</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shipping-card">
                  <h3>配送方式</h3>
                  <div class="shipping-details">
                    <div class="detail-item">
                      <span class="detail-icon">🚚</span>
                      <div class="detail-content">
                        <h4>宅配到府</h4>
                        <p>黑貓宅急便、新竹物流</p>
                      </div>
                    </div>
                    <div class="detail-item">
                      <span class="detail-icon">🏪</span>
                      <div class="detail-content">
                        <h4>超商取貨</h4>
                        <p>7-11、全家、萊爾富</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 4. 會員福利 -->
          <div id="member-benefits" class="guide-section">
            <h2 class="section-title">
              <span class="section-icon">👑</span>
              4. 會員福利
            </h2>
            <div class="section-content">
              <div class="benefits-grid">
                <div class="benefit-card">
                  <div class="benefit-icon">🎁</div>
                  <h3>新會員禮</h3>
                  <p>註冊即送100元購物金</p>
                  <div class="benefit-tag">立即享有</div>
                </div>
                <div class="benefit-card">
                  <div class="benefit-icon">💰</div>
                  <h3>購物回饋</h3>
                  <p>每筆訂單享2%購物金回饋</p>
                  <div class="benefit-tag">無上限</div>
                </div>
                <div class="benefit-card">
                  <div class="benefit-icon">🎂</div>
                  <h3>生日優惠</h3>
                  <p>生日當月享9折優惠</p>
                  <div class="benefit-tag">專屬優惠</div>
                </div>
                <div class="benefit-card">
                  <div class="benefit-icon">🚚</div>
                  <h3>免運門檻</h3>
                  <p>會員免運門檻降低至500元</p>
                  <div class="benefit-tag">省運費</div>
                </div>
                <div class="benefit-card">
                  <div class="benefit-icon">🎯</div>
                  <h3>專屬商品</h3>
                  <p>會員專屬限量商品優先購買</p>
                  <div class="benefit-tag">獨家</div>
                </div>
                <div class="benefit-card">
                  <div class="benefit-icon">💬</div>
                  <h3>專屬客服</h3>
                  <p>LINE客服優先處理會員問題</p>
                  <div class="benefit-tag">VIP服務</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 5. 購物須知 -->
          <div class="guide-section">
            <h2 class="section-title">
              <span class="section-icon">📋</span>
              5. 購物須知
            </h2>
            <div class="section-content">
              <div class="notice-grid">
                <div class="notice-card">
                  <div class="notice-icon">📦</div>
                  <div class="notice-content">
                    <h3>商品庫存</h3>
                    <p>商品庫存以網站顯示為準，售完為止。預購商品發貨時間依廠商公告為準。</p>
                  </div>
                </div>
                <div class="notice-card">
                  <div class="notice-icon">💰</div>
                  <div class="notice-content">
                    <h3>價格說明</h3>
                    <p>商品價格含稅，如有促銷活動以活動期間價格為準。價格變動不另行通知。</p>
                  </div>
                </div>
                <div class="notice-card">
                  <div class="notice-icon">📄</div>
                  <div class="notice-content">
                    <h3>發票說明</h3>
                    <p>提供電子發票，可選擇個人或公司統編。發票將於出貨後3-5個工作天開立。</p>
                  </div>
                </div>
                <div class="notice-card">
                  <div class="notice-icon">🔒</div>
                  <div class="notice-content">
                    <h3>資料安全</h3>
                    <p>所有個人資料均採用SSL加密傳輸，確保您的隱私安全。</p>
                  </div>
                </div>
                <div class="notice-card">
                  <div class="notice-icon">📞</div>
                  <div class="notice-content">
                    <h3>客服時間</h3>
                    <p>週一至週五 10:00-20:00，週六 10:00-18:00，週日及國定假日休息。</p>
                  </div>
                </div>
                <div class="notice-card">
                  <div class="notice-icon">⚖️</div>
                  <div class="notice-content">
                    <h3>退換貨</h3>
                    <p>收到商品後7天內可申請退換貨，詳情請參閱退換貨政策。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 6. 常見問題 -->
          <div class="guide-section">
            <h2 class="section-title">
              <span class="section-icon">❓</span>
              6. 常見問題
            </h2>
            <div class="section-content">
              <div class="faq-list">
                <div class="faq-item" :class="{ active: activeFaq === 0 }" @click="toggleFaq(0)">
                  <div class="faq-question">
                    <h3>如何成為會員？</h3>
                    <span class="faq-icon">{{ activeFaq === 0 ? '−' : '+' }}</span>
                  </div>
                  <div class="faq-answer" v-show="activeFaq === 0">
                    <p>點擊右上角「註冊」按鈕，填寫基本資料即可完成註冊。註冊後立即享有新會員禮和購物優惠。</p>
                  </div>
                </div>
                <div class="faq-item" :class="{ active: activeFaq === 1 }" @click="toggleFaq(1)">
                  <div class="faq-question">
                    <h3>如何追蹤訂單狀態？</h3>
                    <span class="faq-icon">{{ activeFaq === 1 ? '−' : '+' }}</span>
                  </div>
                  <div class="faq-answer" v-show="activeFaq === 1">
                    <p>登入會員後，在「我的訂單」頁面可查看所有訂單狀態。我們也會在關鍵節點發送通知給您。</p>
                  </div>
                </div>
                <div class="faq-item" :class="{ active: activeFaq === 2 }" @click="toggleFaq(2)">
                  <div class="faq-question">
                    <h3>預購商品何時發貨？</h3>
                    <span class="faq-icon">{{ activeFaq === 2 ? '−' : '+' }}</span>
                  </div>
                  <div class="faq-answer" v-show="activeFaq === 2">
                    <p>預購商品發貨時間依廠商公告為準，通常為截單後3-12個月。我們會及時更新發貨資訊並通知您。</p>
                  </div>
                </div>
                <div class="faq-item" :class="{ active: activeFaq === 3 }" @click="toggleFaq(3)">
                  <div class="faq-question">
                    <h3>可以修改訂單嗎？</h3>
                    <span class="faq-icon">{{ activeFaq === 3 ? '−' : '+' }}</span>
                  </div>
                  <div class="faq-answer" v-show="activeFaq === 3">
                    <p>訂單成立後無法修改，如需變更請取消訂單重新下單。出貨前可聯絡客服協助處理。</p>
                  </div>
                </div>
                <div class="faq-item" :class="{ active: activeFaq === 4 }" @click="toggleFaq(4)">
                  <div class="faq-question">
                    <h3>如何取消訂單？</h3>
                    <span class="faq-icon">{{ activeFaq === 4 ? '−' : '+' }}</span>
                  </div>
                  <div class="faq-answer" v-show="activeFaq === 4">
                    <p>出貨前可透過客服取消訂單，已出貨商品需依退換貨政策處理。取消訂單後款項將原路退回。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 7. 聯絡我們 -->
          <div class="guide-section">
            <h2 class="section-title">
              <span class="section-icon">📞</span>
              7. 聯絡我們
            </h2>
            <div class="section-content">
              <p>如有任何購物相關問題，歡迎透過以下方式聯絡我們：</p>
              <div class="contact-methods">
                <div class="contact-method">
                  <div class="contact-icon">📱</div>
                  <div class="contact-info">
                    <h3>LINE客服</h3>
                    <p class="contact-note">週一至週五 10:00-20:00</p>
                  </div>
                </div>
                <div class="contact-method">
                  <div class="contact-icon">📍</div>
                  <div class="contact-info">
                    <h3>服務地址</h3>
                    <p>臺中市南區和平里忠明南路758號17樓</p>
                    <p class="contact-note">『非展售中心』</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 購物須知及流程頁面
import { ref } from 'vue'

// 響應式數據
const activeFaq = ref(null)

// 方法
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.shopping-guide-page {
  padding: 0;
  background: transparent;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Quick Navigation */
.quick-nav {
  padding: 2rem 0;
  background: #f8f9fa;
  margin-bottom: 3rem;
  overflow: visible;
}

.nav-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  padding-bottom: 1rem;
}

.nav-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 3;
}


.nav-icon {
  font-size: 2.5rem;
}

.nav-card h3 {
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
}

/* Guide Content */
.guide-content {
  padding: 3rem 0;
  background: transparent;
  position: relative;
  z-index: 1;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.guide-section {
  margin-bottom: 4rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 2;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
}

.section-icon {
  font-size: 1.8rem;
}

.section-content {
  color: #666;
  line-height: 1.8;
}

.section-content p {
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

/* Process Timeline */
.process-timeline {
  margin-top: 1.5rem;
}

.timeline-item {
  margin-bottom: 3rem;
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  z-index: 3;
}

.timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 1.5rem;
  top: 4rem;
  width: 2px;
  height: 3rem;
  background: #4facfe;
}

.timeline-step {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.timeline-step:hover {
  transform: translateY(-3px);
}

.step-number {
  background: #4facfe;
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.step-content h3 {
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.step-content p {
  color: #666;
  margin-bottom: 1rem;
}

.step-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.feature-tag {
  background: #4facfe;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Payment Grid */
.payment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.payment-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
}

.payment-card:hover {
  transform: translateY(-5px);
}

.payment-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.payment-card h3 {
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.payment-card p {
  color: #666;
  margin-bottom: 1.5rem;
}

.payment-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.payment-features .feature {
  background: #4facfe;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Shipping Info Grid */
.shipping-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.shipping-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  border-left: 4px solid #4facfe;
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 3;
}

.shipping-card h3 {
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.shipping-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.detail-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.detail-content h4 {
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.detail-content p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

/* Benefits Grid */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  position: relative;
  backdrop-filter: blur(5px);
  z-index: 3;
}


.benefit-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.benefit-card h3 {
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.benefit-card p {
  color: #666;
  margin-bottom: 1rem;
}

.benefit-tag {
  background: #4facfe;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

/* Notice Grid */
.notice-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.notice-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.notice-card:hover {
  transform: translateY(-2px);
}

.notice-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.notice-content h3 {
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.notice-content p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.6;
}

/* FAQ List */
.faq-list {
  margin-top: 1.5rem;
}

.faq-item {
  background: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
  background: #4facfe;
  color: white;
}

.faq-question h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

.faq-icon {
  font-size: 1.2rem;
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

/* Contact Methods */
.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.contact-method:hover {
  transform: translateY(-2px);
}

.contact-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.contact-info h3 {
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.contact-info p {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 0.3rem 0;
}

.contact-note {
  color: #999 !important;
  font-size: 0.8rem !important;
  font-style: italic;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .quick-nav {
    padding: 1.5rem 0;
  }
  
  .nav-cards {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .guide-content {
    padding: 2rem 0;
  }
  
  .guide-section {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .section-title {
    font-size: 1.3rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .timeline-step {
    flex-direction: column;
    text-align: center;
  }
  
  .timeline-item:not(:last-child)::after {
    display: none;
  }
  
  .payment-grid,
  .shipping-info-grid,
  .benefits-grid,
  .notice-grid,
  .contact-methods {
    grid-template-columns: 1fr;
  }
  
  .detail-item,
  .notice-card,
  .contact-method {
    flex-direction: column;
    text-align: center;
  }
  
  .detail-icon,
  .notice-icon,
  .contact-icon {
    margin-bottom: 0.5rem;
  }
}
</style>
