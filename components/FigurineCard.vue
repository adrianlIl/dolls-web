<template>
  <NuxtLink :to="`/product/${productId}`" class="figurine-card-link">
    <div class="figurine-card">
      <div class="figurine-image" :class="imageClass">
        <img :src="imageSrc" :alt="title" />
      </div>
      <div class="figurine-info">
        <h3>{{ title }}</h3>
        <span class="price">{{ price }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
// 公仔卡片組件
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
.figurine-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.figurine-card {
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

.figurine-card:hover {
  transform: translateY(-5px);
}

.figurine-image {
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

.figurine-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 15px 15px 0 0;
}

.figurine-info {
  padding: 1rem;
  flex: 1; /* 讓文字區域填滿剩餘空間 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.figurine-info h3 {
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


.figurine-info .price {
  font-size: 1.1rem;
  color: #ff6b9d;
  font-weight: 700;
  margin-top: auto; /* 推到底部 */
}

/* 特殊樣式類別 */
.robot {
  background: linear-gradient(45deg, #34495e, #2c3e50);
}

.cute {
  background: linear-gradient(45deg, #f39c12, #e67e22);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .figurine-image {
    height: 360px;
  }
  
  .figurine-info {
    padding: 0.5rem;
  }
  
  .figurine-info h3 {
    font-size: 0.9rem;
  }
  
  
  .figurine-info .price {
    font-size: 0.85rem;
  }
}
</style>
