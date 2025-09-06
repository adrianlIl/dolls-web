<template>
  <NuxtLink :to="`/product/${productId}`" class="figurine-card-link">
    <div class="figurine-card" :class="{ 'sold-out': isSoldOut }">
      <div class="figurine-image" :class="imageClass">
        <img :src="imageSrc" :alt="title" />
        <div v-if="isSoldOut" class="sold-out-overlay">
          <div class="sold-out-badge">售完</div>
        </div>
      </div>
      <div class="figurine-info">
        <h3>{{ title }}</h3>
        <span class="price" :class="{ 'sold-out-price': isSoldOut }">{{ price }}</span>
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
  },
  isSoldOut: {
    type: Boolean,
    default: false
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
  height: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 3px solid #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  aspect-ratio: 0.8;
}


.figurine-image {
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
  background: #f8f9fa;
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

.figurine-info h3 {
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


.figurine-info .price {
  font-size: 1.1rem;
  color: #ff6b9d;
  font-weight: 700;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  align-self: flex-end;
  margin-top: 0.5rem;
  margin-right: 10px;
}

/* 特殊樣式類別 - 簡化為單色背景 */
.robot {
  background: #34495e;
}

.cute {
  background: #f39c12;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .figurine-image {
    height: 100%;
  }
  
  .figurine-card {
    max-width: 300px;
    height: 350px;
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

/* 售完狀態樣式 */
.figurine-card.sold-out {
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
</style>
