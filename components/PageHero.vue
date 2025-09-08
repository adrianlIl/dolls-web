<!--
  PageHero 組件
  用途：用於頁面頂部英雄區塊的組件
  功能：
  - 顯示頁面主標題和副標題
  - 可自定義背景漸層色彩
  - 支援徽章標籤顯示
  - 具有現代化的視覺設計
  - 響應式設計，適應不同螢幕尺寸
  使用場景：各頁面的頂部英雄區塊
-->
<template>
  <section class="hero-section" :style="{ background: background }">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">{{ title }}</h1>
        <p class="hero-subtitle">{{ subtitle }}</p>
        
        <!-- 統計數據 -->
        <div v-if="stats && stats.length > 0" class="hero-stats">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="stat-item"
          >
            <span class="stat-number">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
        
        <!-- 徽章 -->
        <div v-if="badges && badges.length > 0" class="hero-badges">
          <span 
            v-for="badge in badges" 
            :key="badge"
            class="badge"
          >
            {{ badge }}
          </span>
        </div>
        
        <!-- 額外內容插槽 -->
        <div v-if="$slots.extra" class="hero-extra">
          <slot name="extra" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  background: {
    type: String,
    default: 'linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%)'
  },
  stats: {
    type: Array,
    default: () => []
  },
  badges: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.hero-section {
  padding: 4rem 0;
  color: white;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.hero-extra {
  margin-top: 0.5rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 0;
  }
  
  .hero-content {
    text-align: center;
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: 2.2rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
  }
  
  .hero-stats {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  
  .stat-item {
    min-width: 80px;
  }
  
  .hero-badges {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  
  .badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  
  .hero-extra {
    margin-top: 0.5rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 1.5rem 0;
  }
  
  .hero-title {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
  
  .hero-subtitle {
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
  }
  
  .hero-stats {
    gap: 0.8rem;
    margin-bottom: 1.2rem;
  }
  
  .stat-item {
    min-width: 70px;
  }
  
  .stat-number {
    font-size: 1.2rem;
  }
  
  .stat-label {
    font-size: 0.7rem;
  }
  
  .hero-badges {
    gap: 0.4rem;
    margin-bottom: 1.2rem;
  }
  
  .badge {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>
