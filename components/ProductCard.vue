<!--
  ProductCard 組件
  用途：用於顯示商品資訊的卡片組件
  功能：
  - 顯示商品圖片、標題、價格
  - 支援售完狀態顯示
  - 點擊可跳轉到商品詳情頁
  - 具有多層陰影的視覺效果
  使用場景：首頁的精選商品、商品列表等
-->
<template>
  <NuxtLink :to="`/product/${productId}`" class="product-card-link">
    <div class="product-card" :class="{ 'sold-out': isSoldOut }">
      <div class="product-image" :class="imageClass">
        <img :src="imageSrc" :alt="title" />
        <div v-if="isSoldOut" class="sold-out-overlay">
          <div class="sold-out-badge">售完</div>
        </div>
      </div>
      <div class="product-info">
        <h3>{{ title }}</h3>
        <span class="price" :class="{ 'sold-out-price': isSoldOut }">{{ price }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
// 產品卡片組件
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    default: '/images/figurines/a.png'
  },
  imageClass: {
    type: String,
    default: ''
  },
  productId: {
    type: [String, Number],
    default: 1
  },
  isSoldOut: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.product-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.product-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 0px;
  overflow: visible; /* 改為 visible 讓陰影不被裁切 */
  transition: transform 0.3s;
  height: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 3px solid #333;
  box-shadow: 
    4px 4px 0 #ff6b9d,
    8px 8px 0 #4ecdc4,
    12px 12px 0 #45b7d1,
    16px 16px 0 #96ceb4;
  backdrop-filter: blur(10px);
  max-width: 350px;
  width: 100%;
  aspect-ratio: 0.8;
  margin-bottom: 20px; /* 為陰影留出空間 */
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 100%;
  border-radius: 0px;
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0; /* 防止圖片區域縮小 */
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0px;
}

.product-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1rem 1rem;
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.product-info .price {
  align-self: flex-end;
  margin-top: 0.5rem;
  margin-right: 10px;
}

.product-info h3 {
  font-size: 1rem;
  color: white;
  margin-bottom: 0.75rem;
  font-weight: 600;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 限制最多2行 */
  line-clamp: 2; /* 標準屬性 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}


.product-info .price {
  font-size: 1.1rem;
  color: #ff6b9d;
  font-weight: 700;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
}

/* 售完狀態樣式 */
.product-card.sold-out {
  opacity: 0.6;
  filter: grayscale(0.3);
}

.sold-out-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
  z-index: 3;
}

.sold-out-badge {
  background: #dc3545;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  border: 2px solid white;
}

.sold-out-price {
  color: #6c757d !important;
  text-decoration: line-through;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

/* 特殊樣式類別 */
.magical-girl {
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
}

.warrior {
  background: linear-gradient(45deg, #ffd700, #ffed4e);
}

.anime-hero {
  background: linear-gradient(45deg, #4a90e2, #7bb3f0);
}

.exclusive {
  background: linear-gradient(45deg, #9b59b6, #e74c3c);
}

/* 鬼滅之刃角色樣式 */
.giyu-tomioka {
  background: linear-gradient(45deg, #4a90e2, #87ceeb);
}

.tanjiro {
  background: linear-gradient(45deg, #e74c3c, #ff6b6b);
}

.nezuko {
  background: linear-gradient(45deg, #ff69b4, #ffb6c1);
}

.zenitsu {
  background: linear-gradient(45deg, #ffd700, #ffed4e);
}

.inosuke {
  background: linear-gradient(45deg, #2ecc71, #58d68d);
}

.rengoku {
  background: linear-gradient(45deg, #e67e22, #f39c12);
}

.shinobu {
  background: linear-gradient(45deg, #9b59b6, #e8daef);
}

.uzui {
  background: linear-gradient(45deg, #34495e, #5d6d7e);
}

/* 更多鬼滅之刃角色樣式 */
.kanae {
  background: linear-gradient(45deg, #e8daef, #d2b4de);
}

.sanemi {
  background: linear-gradient(45deg, #f8d7da, #f5c6cb);
}

.kanroji {
  background: linear-gradient(45deg, #d1ecf1, #bee5eb);
}

.muichiro {
  background: linear-gradient(45deg, #cce5ff, #b3d9ff);
}

.mitsuri {
  background: linear-gradient(45deg, #fff3cd, #ffeaa7);
}

.iguro {
  background: linear-gradient(45deg, #6c757d, #495057);
}

.gyomei {
  background: linear-gradient(45deg, #f8f9fa, #e9ecef);
}

.muzan {
  background: linear-gradient(45deg, #2c3e50, #34495e);
}

.akaza {
  background: linear-gradient(45deg, #e74c3c, #c0392b);
}

.doma {
  background: linear-gradient(45deg, #f39c12, #e67e22);
}

.gyutaro {
  background: linear-gradient(45deg, #8e44ad, #9b59b6);
}

.daki {
  background: linear-gradient(45deg, #e91e63, #ad1457);
}

.hantengu {
  background: linear-gradient(45deg, #795548, #8d6e63);
}

.gyokko {
  background: linear-gradient(45deg, #00bcd4, #0097a7);
}

.kokushibo {
  background: linear-gradient(45deg, #607d8b, #455a64);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .product-image {
    height: 100%;
  }
  
  .product-card {
    max-width: 300px;
  }
  
  .product-info {
    padding: 0.5rem;
  }
  
  .product-info h3 {
    font-size: 0.9rem;
  }
  
  
  .product-info .price {
    font-size: 0.85rem;
  }
}
</style>
