<template>
  <div class="default-layout">
    <!-- Header -->
    <AppHeader />
    
    <!-- Banner -->
    <section class="banner-section">
      <img src="/banner/banner.png" alt="動漫公仔專賣店" class="banner-image" />
    </section>
    
    <!-- Main Content -->
    <main class="main-content">
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
// 預設佈局組件
</script>

<style scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.banner-section {
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-top: 70px; /* 為固定 header 留出空間 */
  position: relative;
  z-index: 1;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.main-content {
  flex: 1;
  width: 100%;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .banner-section {
    margin-top: 62px; /* 手機版 header 較矮 */
  }
  
  .banner-image {
    min-height: 200px;
    object-fit: cover;
  }
}

@media (max-width: 480px) {
  .banner-section {
    margin-top: 70px; /* 小螢幕手機版 */
  }
  
  .banner-image {
    min-height: 150px;
  }
}
</style>