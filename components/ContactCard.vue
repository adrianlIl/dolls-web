<template>
  <section class="contact-banner-section">
    <div class="contact-banner" @click="showQRCode = true">
      <div class="banner-content">
        <div class="text-content">
          <h2 class="main-title">新品上市</h2>
          <p class="subtitle">加入官方LINE 搶先看最新商品</p>
        </div>
        <div class="qr-section">
          <div class="qr-container">
            <img src="/qrcode/lineqr.jpg" alt="LINE QR Code" class="qr-code" />
          </div>
          <p class="brand-name">全擊GK潮流公仔</p>
        </div>
      </div>
    </div>

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
  </section>
</template>

<script setup>
import { ref } from 'vue'

// 客服洽詢卡片組件
const showQRCode = ref(false)
</script>

<style scoped>
.contact-banner-section {
  padding: 2rem 0;
  position: relative;
}

.contact-banner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
}


.banner-content {
  background: #667eea;
  border-radius: 15px;
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.text-content {
  flex: 1;
  color: white;
}

.main-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.95;
  font-weight: 500;
}

.qr-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.qr-container {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  transition: transform 0.3s ease;
}


.qr-code {
  width: 120px;
  height: 120px;
  object-fit: contain;
  display: block;
}

.brand-name {
  color: #dc3545;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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


/* 響應式設計 */
@media (max-width: 768px) {
  .contact-banner-section {
    padding: 1.5rem 0;
  }
  
  .banner-content {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
  
  .main-title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .qr-code {
    width: 100px;
    height: 100px;
  }
  
  .brand-name {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .banner-content {
    padding: 1.5rem 1rem;
  }
  
  .main-title {
    font-size: 1.8rem;
  }
  
  .subtitle {
    font-size: 0.9rem;
  }
  
  .qr-code {
    width: 80px;
    height: 80px;
  }
  
  .qr-container {
    padding: 0.8rem;
  }
}
</style>
