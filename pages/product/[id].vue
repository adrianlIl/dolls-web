<template>
  <div class="product-detail-page">
    <!-- Announcement Banner -->
    <div class="announcement-banner">
      <div class="container">
        <div class="announcement-content">
          <span class="announcement-icon">📢</span>
          <span class="announcement-text">LaBuBu全面出清</span>
        </div>
      </div>
    </div>

    <!-- Breadcrumbs -->
    <div class="breadcrumbs">
      <div class="container">
        <nav class="breadcrumb-nav">
          <NuxtLink to="/products" class="breadcrumb-link">全部商品</NuxtLink>
          <span class="breadcrumb-separator">/</span>
          <NuxtLink to="/featured" class="breadcrumb-link">精選商品</NuxtLink>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">{{ product.title }}</span>
        </nav>
      </div>
    </div>

    <!-- Product Detail Section -->
    <div class="product-detail-section">
      <div class="container">
        <div class="product-detail-content">
          <!-- Product Images -->
          <div class="product-images">
            <div class="main-image">
              <img :src="product.mainImage" :alt="product.title" class="product-main-image" />
            </div>
            <div class="thumbnail-images">
              <img 
                v-for="(thumb, index) in product.thumbnails" 
                :key="index"
                :src="thumb" 
                :alt="product.title"
                class="thumbnail-image"
                :class="{ active: index === activeThumbnail }"
                @click="setActiveThumbnail(index)"
              />
            </div>
          </div>

          <!-- Product Text Information -->
          <div class="product-text-info">
            <!-- Title Section -->
            <div class="title-section">
              <h1 class="product-title">{{ product.title }}</h1>
              <div class="product-code">商品代碼: {{ product.productCode }}</div>
            </div>

            <!-- Content Section -->
            <div class="content-section">
              <div class="shipping-notes">
                <p class="shipping-note">{{ product.shippingNote1 }}</p>
                <p class="shipping-note">{{ product.shippingNote2 }}</p>
              </div>
              
              <div class="product-details">
                <h3>商品資訊 INFORMATION</h3>
                <div class="content-display">
                  <div v-if="isLoading" class="loading">載入中...</div>
                  <pre v-else class="content-text">{{ product.content }}</pre>
                </div>
              </div>
            </div>

            <!-- Price Section -->
            <div class="price-section">
              <div class="product-price">NT$ {{ product.price }}</div>
              <div class="purchase-method">
                <h3 @click="showQRCode = true" class="purchase-method-title">購買方式: 請聯絡客服購買</h3>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Full Size Image Gallery -->
    <div class="full-image-section">
      <div class="container">
        <h2 class="section-title">商品詳情</h2>
        <div class="full-image-container">
          <img :src="product.mainImage" :alt="product.title" class="full-image" />
        </div>
      </div>
    </div>

    <!-- Related Products -->
    <div class="related-products-section">
      <div class="container">
        <h2 class="section-title">相關商品</h2>
        <div class="related-products-grid">
          <ProductCard 
            v-for="relatedProduct in relatedProducts" 
            :key="relatedProduct.id"
            :title="relatedProduct.title"
            :description="relatedProduct.description"
            :price="relatedProduct.price"
            :image-class="relatedProduct.imageClass"
            :product-id="relatedProduct.id"
            :image-src="relatedProduct.imageSrc"
          />
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
  </div>
</template>

<script setup>
// 載入商品資料
import productsData from '~/data/products.json'

// 商品詳情頁面
const route = useRoute()
const productId = parseInt(route.params.id)

// 從商品資料中找到對應的商品
const foundProduct = productsData.find(p => p.id === productId)

// 動態載入 content.txt 內容
const contentData = ref('')
const isLoading = ref(true)

// QR Code 彈窗控制
const showQRCode = ref(false)

// 載入 content.txt 內容
const loadContent = async () => {
  try {
    const response = await fetch(`/commodity/${productId}/text/content.txt`)
    if (response.ok) {
      contentData.value = await response.text()
    } else {
      console.error('載入失敗，狀態碼:', response.status)
      contentData.value = '商品內容載入失敗'
    }
  } catch (error) {
    console.error('載入商品內容失敗:', error)
    contentData.value = '商品內容載入失敗'
  } finally {
    isLoading.value = false
  }
}

// 頁面載入時讀取內容
onMounted(() => {
  loadContent()
})

// 商品資料
const product = ref(foundProduct ? {
  id: productId,
  title: foundProduct.title,
  subtitle: foundProduct.description,
  productCode: `C0${3800 + productId}`,
  price: foundProduct.price.replace('NT$ ', '').replace(',', ''),
  shippingNote1: "售價未含國際運費,將於出貨時通知補款",
  shippingNote2: "補款時將以簡訊、Mail等方式通知訂購人",
  mainImage: foundProduct.mainImage,
  thumbnails: foundProduct.thumbnails,
  content: contentData, // 直接使用 content.txt 的內容
  details: {
    productionTeam: "工作室",
    productName: foundProduct.title,
    suggestedPrice: foundProduct.price,
    dimensions: "60cm*40cm",
    materialDescription: "高品質材質製作",
    productQuantity: "限量商品",
    orderOpeningTime: "2025年09月",
    estimatedShipping: "工作室現貨約2-4週配達(僅供參考,實際以工作室發貨為主)",
    colorDisclaimer: "圖片顏色僅供參考,色樣會因電腦螢幕設定不同而有色差,顏色以實際商品為主"
  }
} : {
  id: productId,
  title: "商品不存在",
  subtitle: "此商品不存在或已下架",
  productCode: "N/A",
  price: "0",
  shippingNote1: "",
  shippingNote2: "",
  mainImage: "/images/placeholder.jpg",
  thumbnails: ["/images/placeholder.jpg"],
  content: "商品不存在",
  details: {
    productionTeam: "N/A",
    productName: "商品不存在",
    suggestedPrice: "N/A",
    dimensions: "N/A",
    materialDescription: "N/A",
    productQuantity: "N/A",
    orderOpeningTime: "N/A",
    estimatedShipping: "N/A",
    colorDisclaimer: "N/A"
  }
})

// 相關商品 - 顯示其他商品（排除當前商品）
const relatedProducts = ref(
  productsData
    .filter(p => p.id !== productId)
    .slice(0, 4)
    .map(p => ({
      id: p.id,
      title: p.title,
      description: p.description,
      price: p.price,
      imageClass: p.imageClass,
      imageSrc: p.mainImage
    }))
)

// 當前選中的縮圖
const activeThumbnail = ref(0)

// 設定活動縮圖
const setActiveThumbnail = (index) => {
  activeThumbnail.value = index
  product.value.mainImage = product.value.thumbnails[index]
}
</script>

<style scoped>
.product-detail-page {
  min-height: 100vh;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Announcement Banner */
.announcement-banner {
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%);
  color: white;
  padding: 1rem 0;
  text-align: center;
  box-shadow: 0 2px 8px rgba(255, 107, 157, 0.3);
  position: relative;
  z-index: 10;
  margin-top: 70px; /* 為固定 header 留出空間 */
}

.announcement-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  animation: pulse 2s ease-in-out infinite;
}

.announcement-icon {
  font-size: 1.3rem;
  animation: bounce 1s ease-in-out infinite;
}

.announcement-text {
  letter-spacing: 0.05em;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.9;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

/* Breadcrumbs */
.breadcrumbs {
  background: white;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.breadcrumb-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.breadcrumb-link {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-link:hover {
  color: #ff6b9d;
}

.breadcrumb-separator {
  color: #ccc;
  margin: 0 0.5rem;
}

.breadcrumb-current {
  color: #333;
  font-weight: 500;
}

/* Product Detail Section */
.product-detail-section {
  padding: 2rem 0;
  background: white;
  position: relative;
  z-index: 5;
}

.product-detail-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

/* Product Images */
.product-images {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-image {
  width: 100%;
  aspect-ratio: 4/3;
  border: none;
  border-radius: 20px;
  overflow: hidden;
  background: #f8f9fa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.main-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}


.product-main-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.thumbnail-images {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem 0;
}

.thumbnail-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  object-position: center;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  background: #f8f9fa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  position: relative;
  overflow: hidden;
}

.thumbnail-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 12px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}


.thumbnail-image.active {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.thumbnail-image.active::before {
  opacity: 1;
}

/* Product Text Information */
.product-text-info {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Title Section */
.title-section {
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 1.5rem;
}

.product-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}


.product-code {
  font-size: 0.9rem;
  color: #888;
  margin: 0;
}

/* Content Section */
.content-section {
  flex: 1;
}

.shipping-notes {
  margin: 1rem 0;
  padding: 1rem;
  background: #ffffff !important;
  border-radius: 8px;
  border-left: 4px solid #ff6b9d;
  border: 1px solid #e9ecef;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 10;
}

.shipping-note {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

.shipping-note:last-child {
  margin-bottom: 0;
}

/* Price Section */
.price-section {
  border-top: 2px solid #f0f0f0;
  padding-top: 1.5rem;
  text-align: center;
}

.product-price {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff6b9d;
  margin: 0 0 1.5rem 0;
}

.product-options {
  margin: 2rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.product-options h3 {
  font-size: 1rem;
  color: #333;
  margin: 0;
}

.contact-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: #f8f9fa;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  margin: 2rem 0;
}


.product-details {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #ffffff !important;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 10;
}

.product-details h3 {
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 1rem 0;
}

.details-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.detail-label {
  font-weight: 500;
  color: #666;
  min-width: 100px;
}

.detail-value {
  color: #333;
}

/* Content Display Styles */
.content-display {
  margin-top: 1rem;
}

.loading {
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 2rem;
}

.content-text {
  background: #ffffff !important;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #333;
  white-space: pre-wrap;
  word-wrap: break-word;
  max-height: 400px;
  overflow-y: auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
}

/* Full Size Image Gallery */
.full-image-section {
  padding: 3rem 0;
  background: white;
  border-top: 1px solid #eee;
}

.full-image-container {
  text-align: center;
  margin-top: 2rem;
}

.full-image {
  width: 100%;
  max-width: 800px;
  height: auto;
  object-fit: contain;
  object-position: center;
  border-radius: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #f8f9fa;
  transition: all 0.3s ease;
  position: relative;
}

.full-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 24px;
  pointer-events: none;
}


/* Related Products */
.related-products-section {
  padding: 3rem 0;
  background: #f8f9fa;
}

.section-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 0 0 2rem 0;
}

.related-products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

/* 移除相關商品卡片的 hover 效果 */
.related-products-grid .product-card:hover {
  transform: none;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .announcement-banner {
    margin-top: 62px; /* 手機版 header 較矮 */
    padding: 0.75rem 0;
  }
  
  .announcement-content {
    font-size: 1rem;
    gap: 0.5rem;
  }
  
  .announcement-icon {
    font-size: 1.1rem;
  }
  
  .product-detail-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .product-text-info {
    gap: 1.5rem;
  }
  
  .title-section {
    padding-bottom: 1rem;
  }
  
  .price-section {
    padding-top: 1rem;
  }
  
  .product-title {
    font-size: 1.5rem;
  }
  
  .product-price {
    font-size: 2rem;
  }
  
  .thumbnail-images {
    justify-content: center;
  }
  
  .full-image {
    max-width: 100%;
  }
  
  .related-products-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .product-detail-section {
    padding: 1rem 0;
  }
  
  .product-title {
    font-size: 1.3rem;
  }
  
  .product-price {
    font-size: 1.8rem;
  }
  
  .buy-now-btn {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
  
  .thumbnail-image {
    width: 60px;
    height: 60px;
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

/* Purchase Method Styling */
.purchase-method {
  margin: 1rem 0;
  text-align: center;
}

.purchase-method h3 {
  font-size: 1.1rem;
  color: #d63384;
  margin: 0;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%);
  border-radius: 25px;
  border: 2px solid #f8d7da;
  display: inline-block;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(214, 51, 132, 0.2);
  transition: all 0.3s ease;
}

.purchase-method h3:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(214, 51, 132, 0.3);
  border-color: #d63384;
  background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%);
}

/* 可點擊的購買方式標題 */
.purchase-method-title {
  cursor: pointer;
  user-select: none;
  position: relative;
}

.purchase-method-title:hover {
  cursor: pointer;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(214, 51, 132, 0.3);
  border-color: #d63384;
  background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%);
}

</style>
