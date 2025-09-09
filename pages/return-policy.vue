<template>
  <div class="return-policy-page">
    <!-- Hero Section -->
    <PageHero
      title="退換貨政策"
      subtitle="我們提供完善的退換貨服務，確保您的購物權益得到保障"
      background="linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    />

    <!-- Quick Info -->
    <section class="quick-info">
      <div class="container">
        <div class="info-cards">
          <div class="info-card">
            <div class="card-icon">⏰</div>
            <div class="card-content">
              <h3>退換貨期限</h3>
              <p>收到商品後7天內</p>
            </div>
          </div>
          <div class="info-card">
            <div class="card-icon">📦</div>
            <div class="card-content">
              <h3>商品狀態</h3>
              <p>需保持原包裝完整</p>
            </div>
          </div>
          <div class="info-card">
            <div class="card-icon">🚚</div>
            <div class="card-content">
              <h3>運費負擔</h3>
              <p>商品瑕疵由我們承擔</p>
            </div>
          </div>
          <div class="info-card">
            <div class="card-icon">💳</div>
            <div class="card-content">
              <h3>退款方式</h3>
              <p>原付款方式退回</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Return Policy Content -->
    <section class="policy-content">
      <div class="container">
        <div class="content-wrapper">
          <!-- 1. 退換貨條件 -->
          <div class="policy-section">
            <h2 class="section-title">
              <span class="section-icon">✅</span>
              1. 退換貨條件
            </h2>
            <div class="section-content">
              <div class="conditions-grid">
                <div class="condition-card valid">
                  <div class="condition-icon">✓</div>
                  <div class="condition-content">
                    <h3>可退換貨情況</h3>
                    <ul>
                      <li>商品有瑕疵或損壞</li>
                      <li>商品與訂單不符</li>
                      <li>商品規格錯誤</li>
                      <li>未收到商品</li>
                      <li>商品功能異常</li>
                    </ul>
                  </div>
                </div>
                <div class="condition-card invalid">
                  <div class="condition-icon">✗</div>
                  <div class="condition-content">
                    <h3>不可退換貨情況</h3>
                    <ul>
                      <li>個人喜好改變</li>
                      <li>商品已拆封使用</li>
                      <li>人為損壞</li>
                      <li>超過退換貨期限</li>
                      <li>客製化商品</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. 退換貨流程 -->
          <div class="policy-section">
            <h2 class="section-title">
              <span class="section-icon">🔄</span>
              2. 退換貨流程
            </h2>
            <div class="section-content">
              <div class="process-steps">
                <div class="step-item">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h3>聯絡客服</h3>
                    <p>透過LINE客服申請退換貨，提供訂單號碼和退換貨原因</p>
                  </div>
                </div>
                <div class="step-item">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h3>審核確認</h3>
                    <p>我們會在1-2個工作天內審核您的申請，並回覆處理結果</p>
                  </div>
                </div>
                <div class="step-item">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h3>商品寄回</h3>
                    <p>將商品連同原包裝、發票等完整寄回指定地址</p>
                  </div>
                </div>
                <div class="step-item">
                  <div class="step-number">4</div>
                  <div class="step-content">
                    <h3>商品檢查</h3>
                    <p>收到商品後進行檢查，確認符合退換貨條件</p>
                  </div>
                </div>
                <div class="step-item">
                  <div class="step-number">5</div>
                  <div class="step-content">
                    <h3>處理完成</h3>
                    <p>安排換貨或退款，並通知處理結果</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 3. 退換貨須知 -->
          <div class="policy-section">
            <h2 class="section-title">
              <span class="section-icon">📋</span>
              3. 退換貨須知
            </h2>
            <div class="section-content">
              <div class="notice-grid">
                <div class="notice-item">
                  <div class="notice-icon">⏰</div>
                  <div class="notice-content">
                    <h3>時間限制</h3>
                    <p>收到商品後7天內提出申請，逾期恕不受理</p>
                  </div>
                </div>
                <div class="notice-item">
                  <div class="notice-icon">📦</div>
                  <div class="notice-content">
                    <h3>包裝要求</h3>
                    <p>商品需保持原包裝完整，包含所有配件、說明書、標籤等</p>
                  </div>
                </div>
                <div class="notice-item">
                  <div class="notice-icon">📄</div>
                  <div class="notice-content">
                    <h3>必要文件</h3>
                    <p>請附上發票、退換貨申請單等相關文件</p>
                  </div>
                </div>
                <div class="notice-item">
                  <div class="notice-icon">🚚</div>
                  <div class="notice-content">
                    <h3>運費說明</h3>
                    <p>商品瑕疵由我們承擔運費，其他情況由買方負擔</p>
                  </div>
                </div>
                <div class="notice-item">
                  <div class="notice-icon">💳</div>
                  <div class="notice-content">
                    <h3>退款方式</h3>
                    <p>退款將以原付款方式退回，處理時間約3-7個工作天</p>
                  </div>
                </div>
                <div class="notice-item">
                  <div class="notice-icon">🔄</div>
                  <div class="notice-content">
                    <h3>換貨限制</h3>
                    <p>每筆訂單限退換貨一次，換貨商品需有現貨</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 4. 特殊商品規定 -->
          <div class="policy-section">
            <h2 class="section-title">
              <span class="section-icon">🎯</span>
              4. 特殊商品規定
            </h2>
            <div class="section-content">
              <div class="special-products">
                <div class="product-type">
                  <h3>預購商品</h3>
                  <div class="product-rules">
                    <div class="rule-item">
                      <span class="rule-icon">📅</span>
                      <span class="rule-text">發貨前可取消訂單</span>
                    </div>
                    <div class="rule-item">
                      <span class="rule-icon">📦</span>
                      <span class="rule-text">發貨後依一般退換貨政策</span>
                    </div>
                    <div class="rule-item">
                      <span class="rule-icon">⏰</span>
                      <span class="rule-text">取消期限為發貨前7天</span>
                    </div>
                  </div>
                </div>
                <div class="product-type">
                  <h3>限量商品</h3>
                  <div class="product-rules">
                    <div class="rule-item">
                      <span class="rule-icon">🔄</span>
                      <span class="rule-text">僅接受退貨，不接受換貨</span>
                    </div>
                    <div class="rule-item">
                      <span class="rule-icon">📦</span>
                      <span class="rule-text">需保持原包裝完整</span>
                    </div>
                    <div class="rule-item">
                      <span class="rule-icon">⏰</span>
                      <span class="rule-text">退貨期限為3天</span>
                    </div>
                  </div>
                </div>
                <div class="product-type">
                  <h3>客製化商品</h3>
                  <div class="product-rules">
                    <div class="rule-item">
                      <span class="rule-icon">✗</span>
                      <span class="rule-text">不接受退換貨</span>
                    </div>
                    <div class="rule-item">
                      <span class="rule-icon">🔧</span>
                      <span class="rule-text">僅提供維修服務</span>
                    </div>
                    <div class="rule-item">
                      <span class="rule-icon">📞</span>
                      <span class="rule-text">有問題請聯絡客服</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 5. 常見問題 -->
          <div class="policy-section">
            <h2 class="section-title">
              <span class="section-icon">❓</span>
              5. 常見問題
            </h2>
            <div class="section-content">
              <div class="faq-list">
                <div class="faq-item">
                  <div class="faq-question">
                    <h3>如何申請退換貨？</h3>
                    <span class="faq-icon">+</span>
                  </div>
                  <div class="faq-answer">
                    <p>請透過LINE客服聯絡我們，提供訂單號碼、退換貨原因和商品照片，我們會盡快為您處理。</p>
                  </div>
                </div>
                <div class="faq-item">
                  <div class="faq-question">
                    <h3>退換貨需要負擔運費嗎？</h3>
                    <span class="faq-icon">+</span>
                  </div>
                  <div class="faq-answer">
                    <p>商品瑕疵或錯誤由我們承擔運費；個人原因退換貨則由買方負擔運費。</p>
                  </div>
                </div>
                <div class="faq-item">
                  <div class="faq-question">
                    <h3>退款多久會到帳？</h3>
                    <span class="faq-icon">+</span>
                  </div>
                  <div class="faq-answer">
                    <p>信用卡退款約3-7個工作天，ATM轉帳約1-3個工作天，實際到帳時間依銀行作業而定。</p>
                  </div>
                </div>
                <div class="faq-item">
                  <div class="faq-question">
                    <h3>可以換成其他商品嗎？</h3>
                    <span class="faq-icon">+</span>
                  </div>
                  <div class="faq-answer">
                    <p>可以，但需補差價或退差價，且換貨商品需有現貨庫存。</p>
                  </div>
                </div>
                <div class="faq-item">
                  <div class="faq-question">
                    <h3>商品包裝丟了可以退換貨嗎？</h3>
                    <span class="faq-icon">+</span>
                  </div>
                  <div class="faq-answer">
                    <p>商品需保持原包裝完整才能退換貨，包裝不完整可能影響退換貨申請。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 6. 聯絡方式 -->
          <div class="policy-section">
            <h2 class="section-title">
              <span class="section-icon">📞</span>
              6. 聯絡方式
            </h2>
            <div class="section-content">
              <p>如有任何退換貨相關問題，歡迎透過以下方式聯絡我們：</p>
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
// 退換貨政策頁面
import { ref } from 'vue'

// 響應式數據
const activeFaq = ref(null)

// 方法
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>

<style scoped>
.return-policy-page {
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

/* Quick Info */
.quick-info {
  padding: 2rem 0;
  background: #f8f9fa;
  margin-bottom: 3rem;
  overflow: visible;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding-bottom: 1rem;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 3;
}


.card-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.card-content h3 {
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.card-content p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

/* Policy Content */
.policy-content {
  padding: 3rem 0;
  background: transparent;
  position: relative;
  z-index: 1;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.policy-section {
  margin-bottom: 3rem;
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
  margin-bottom: 1.5rem;
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

/* Conditions Grid */
.conditions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.condition-card {
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 3;
}

.condition-card.valid {
  background: #f0f9ff;
  border-left-color: #10b981;
}

.condition-card.invalid {
  background: #fef2f2;
  border-left-color: #ef4444;
}

.condition-icon {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.condition-card.valid .condition-icon {
  color: #10b981;
}

.condition-card.invalid .condition-icon {
  color: #ef4444;
}

.condition-content h3 {
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.condition-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.condition-content li {
  padding: 0.3rem 0;
  color: #666;
  position: relative;
  padding-left: 1.2rem;
}

.condition-content li::before {
  content: '•';
  color: #ff9a9e;
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* Process Steps */
.process-steps {
  margin-top: 1.5rem;
}

.step-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  position: relative;
  backdrop-filter: blur(5px);
  z-index: 3;
}

.step-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 1.5rem;
  top: 4rem;
  width: 2px;
  height: 2rem;
  background: #ff9a9e;
}

.step-number {
  background: #ff9a9e;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.step-content h3 {
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.step-content p {
  color: #666;
  margin: 0;
}

/* Notice Grid */
.notice-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.notice-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  transition: transform 0.3s ease;
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 3;
}

.notice-item:hover {
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
  margin-bottom: 0.3rem;
}

.notice-content p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

/* Special Products */
.special-products {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.product-type {
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #ff9a9e;
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 3;
}

.product-type h3 {
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.product-rules {
  display: grid;
  gap: 0.8rem;
}

.rule-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.rule-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.rule-text {
  color: #666;
  font-size: 0.9rem;
}

/* FAQ List */
.faq-list {
  margin-top: 1.5rem;
}

.faq-item {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 3;
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
  background: rgba(255, 255, 255, 0.9);
  transition: background 0.3s ease;
  opacity: 1;
  backdrop-filter: blur(5px);
}

.faq-item.active .faq-question {
  background: #ff9a9e;
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
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  transition: transform 0.3s ease;
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 3;
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
  .quick-info {
    padding: 1.5rem 0;
  }
  
  .info-cards {
    grid-template-columns: 1fr;
  }
  
  .policy-content {
    padding: 2rem 0;
  }
  
  .policy-section {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .section-title {
    font-size: 1.3rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .conditions-grid,
  .notice-grid,
  .contact-methods {
    grid-template-columns: 1fr;
  }
  
  .step-item {
    flex-direction: column;
    text-align: center;
  }
  
  .step-item:not(:last-child)::after {
    display: none;
  }
  
  .notice-item,
  .contact-method {
    flex-direction: column;
    text-align: center;
  }
  
  .notice-icon,
  .contact-icon {
    margin-bottom: 0.5rem;
  }
}
</style>
