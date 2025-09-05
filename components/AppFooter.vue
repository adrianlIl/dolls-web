<template>
  <footer class="footer">
    <div class="container">
      <!-- 主要內容區域 -->
      <div class="footer-main">
        <div class="footer-left">
          <div class="footer-logo">
            <img src="/logo/logo.png" alt="全擊GK潮流公仔" class="logo-image" />
          </div>
          <div class="footer-links">
            <a href="#" class="footer-link">品牌介紹</a>
            <a href="#" class="footer-link">LINE線上客服</a>
          </div>
        </div>
        
        <div class="footer-center">
          <h4>顧客服務</h4>
          <div class="footer-links">
            <a href="#" class="footer-link">購物須知及流程</a>
            <a href="#" class="footer-link">售後服務條款</a>
            <a href="#" class="footer-link">會員福利權益</a>
            <a href="#" class="footer-link">常見問題</a>
          </div>
        </div>
        
        <div class="footer-right">
          <h4>顧客服務</h4>
          <div class="contact-info">
            <p>週一至週五 10:00 - 20:00</p>
            <p>客服專線: 02-2974-8408</p>
            <p>新北市三重區成功路73巷38號</p>
            <p class="note">『非展售中心』</p>
          </div>
        </div>
      </div>
      
      <!-- 分隔線 -->
      <div class="footer-divider"></div>
      
      <!-- 底部資訊 -->
      <div class="footer-bottom">
        <div class="anti-fraud">
          <p>防詐騙宣導 | 提醒您,我們不會以電話或簡訊方式通知變更付款方式、會員付費升級、錯誤設定分期、要求客戶進行付款。</p>
        </div>
        <div class="company-info">
          <p>凱盛模型國際企業 | 統一編號:92702176</p>
        </div>
        <div class="policy-links">
          <a href="#">退換貨政策</a>
          <span class="separator">|</span>
          <a href="#">隱私權政策</a>
          <span class="separator">|</span>
          <span>&copy; 2020 SCC Toys All rights reserved</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 底部組件
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Footer */
.footer {
  background: #000;
  color: #fff;
  padding: 3rem 0 2rem;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.logo-image {
  height: 30px;
  width: auto;
  object-fit: contain;
}

.footer-center {
  position: relative;
}

.footer-center::after {
  content: '';
  position: absolute;
  top: 0;
  right: -1.5rem;
  width: 1px;
  height: 100%;
  background: #fff;
}

.footer-right h4,
.footer-center h4 {
  margin-bottom: 1rem;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: #ccc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #fff;
}

.contact-info p {
  color: #ccc;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.contact-info .note {
  color: #999;
  font-style: italic;
}

.footer-divider {
  width: 100%;
  height: 1px;
  background: #fff;
  margin: 2rem 0;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
}

.anti-fraud p {
  color: #ccc;
  font-size: 0.85rem;
  line-height: 1.4;
  text-align: center;
}

.company-info p {
  color: #ccc;
  font-size: 0.9rem;
  text-align: center;
}

.policy-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.policy-links a {
  color: #888;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s;
}

.policy-links a:hover {
  color: #aaa;
}

.policy-links .separator {
  color: #666;
}

.policy-links span {
  color: #888;
  font-size: 0.85rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-center::after {
    display: none;
  }
  
  .policy-links {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  
  .logo-image {
    height: 40px;
  }
}
</style>
