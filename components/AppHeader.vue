<template>
  <header ref="header" class="header">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
          <img src="/logo/logo.png" alt="擊GK潮流公仔" class="logo-image" />
        </NuxtLink>
      </div>
      <nav class="nav">
        <NuxtLink to="/products" class="nav-link">全部商品</NuxtLink>
        <a href="#" class="nav-link">最新上架</a>
        <a href="#" class="nav-link">新品推薦</a>
        <a href="#" class="nav-link">限時特惠</a>
        <a href="#" class="nav-link">公仔周邊</a>
        <a href="#" class="nav-link">授權雕像</a>
        <a href="#" class="nav-link">售後服務</a>
        <a href="#" class="nav-link">品牌介紹</a>
      </nav>
      <div class="header-actions">
        <button class="icon-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
        <button class="icon-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
// 導航欄組件
</script>

<style scoped>
/* Header */
.header {
  position: fixed;          /* 固定在視窗頂部 */
  top: 0;                   /* 距離視窗頂部 0 */
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1000;            /* 保證在其他元素之上 */
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 20px;
}

.logo-image {
  height: 30px;
  width: auto;
  object-fit: contain;
}

.nav {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 400;
  font-size: 0.95rem;
  transition: color 0.3s;
  white-space: nowrap;
}

.nav-link:hover {
  color: #ff6b9d;
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.3s;
}

.icon-btn:hover {
  background: #f0f0f0;
}

/* 響應式設計 */
@media (max-width: 1200px) {
  .nav {
    gap: 1rem;
  }
  
  .nav-link {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
  
  .logo-image {
    height: 35px;
  }
}
</style>
