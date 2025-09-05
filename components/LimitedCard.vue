<template>
  <div class="limited-card">
    <div class="limited-image" :class="imageClass">
      <img :src="imageSrc" :alt="title" />
    </div>
    <div class="limited-info">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <span class="price">{{ price }}</span>
    </div>
  </div>
</template>

<script setup>
// 限量版商品卡片組件
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
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
  }
})
</script>

<style scoped>
.limited-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
}

.limited-card:hover {
  transform: translateY(-5px);
}

.limited-image {
  width: 100%;
  height: 380px;
  border-radius: 15px 15px 0 0;
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.limited-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
}

.limited-info {
  padding: 0.3rem 0.8rem 0.6rem;
}

.limited-info h3 {
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.2rem;
  font-weight: 600;
}

.limited-info p {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.3rem;
}

.limited-info .price {
  font-size: 0.9rem;
  color: #ff6b9d;
  font-weight: 700;
}

/* 特殊樣式類別 */
.collector {
  background: linear-gradient(45deg, #9b59b6, #e74c3c);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .limited-image {
    height: 320px;
  }
  
  .limited-info {
    padding: 0.5rem;
  }
  
  .limited-info h3 {
    font-size: 0.9rem;
  }
  
  .limited-info p {
    font-size: 0.75rem;
  }
  
  .limited-info .price {
    font-size: 0.85rem;
  }
}
</style>
