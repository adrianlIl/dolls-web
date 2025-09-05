<template>
  <div class="product-card">
    <div class="product-image" :class="imageClass">
      <img :src="imageSrc" :alt="title" />
    </div>
    <div class="product-info">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <span class="price">{{ price }}</span>
    </div>
  </div>
</template>

<script setup>
// 產品卡片組件
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
.product-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 320px;
  border-radius: 15px 15px 0 0;
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
}

.product-info {
  padding: 0.3rem 0.8rem 0.6rem;
}

.product-info h3 {
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.2rem;
  font-weight: 600;
}

.product-info p {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.3rem;
}

.product-info .price {
  font-size: 0.9rem;
  color: #ff6b9d;
  font-weight: 700;
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
    height: 280px;
  }
  
  .product-info {
    padding: 0.5rem;
  }
  
  .product-info h3 {
    font-size: 0.9rem;
  }
  
  .product-info p {
    font-size: 0.75rem;
  }
  
  .product-info .price {
    font-size: 0.85rem;
  }
}
</style>
