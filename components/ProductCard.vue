<template>
  <NuxtLink :to="`/product/${productId}`" class="product-card-link">
    <div class="product-card">
      <div class="product-image" :class="imageClass">
        <img :src="imageSrc" :alt="title" />
      </div>
      <div class="product-info">
        <h3>{{ title }}</h3>
        <span class="price">{{ price }}</span>
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
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s;
  height: 440px; /* 調整高度以配合新的圖片高度 */
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
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 320px; /* 增加高度以減少裁切 */
  border-radius: 15px 15px 0 0;
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
  border-radius: 15px 15px 0 0;
}

.product-info {
  padding: 1rem;
  flex: 1; /* 讓文字區域填滿剩餘空間 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-info h3 {
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 限制最多2行 */
  line-clamp: 2; /* 標準屬性 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}


.product-info .price {
  font-size: 1.1rem;
  color: #ff6b9d;
  font-weight: 700;
  margin-top: auto; /* 推到底部 */
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
    height: 360px;
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
