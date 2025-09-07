<template>
  <header ref="header" class="header">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
          <img src="/logo/logo.png" alt="擊GK潮流公仔" class="logo-image" />
        </NuxtLink>
      </div>
      
      <!-- 桌面版導航 -->
      <nav class="nav desktop-nav">
        <NuxtLink to="/products" class="nav-link">全部商品</NuxtLink>
        <NuxtLink to="/new-arrivals" class="nav-link">最新上架</NuxtLink>
        <NuxtLink to="/featured" class="nav-link">新品推薦</NuxtLink>
        <NuxtLink to="/sale" class="nav-link">限時特惠</NuxtLink>
        <NuxtLink to="/licensed" class="nav-link">授權雕像</NuxtLink>
        <NuxtLink to="/service" class="nav-link">售後服務</NuxtLink>
        <NuxtLink to="/about" class="nav-link">品牌介紹</NuxtLink>
        <a href="https://tw.news.yahoo.com/%E6%96%B0%E5%8C%97gk%E5%85%AC%E4%BB%94%E6%8E%A8%E8%96%A6%E5%93%81%E7%89%8C%EF%BC%8C%E5%96%9C%E6%84%9B%E6%94%B6%E8%97%8F%E5%85%AC%E4%BB%94%E9%A6%96%E9%81%B8%E5%AE%83-070605999.html" target="_blank" rel="noopener noreferrer" class="nav-link">SCC®媒體報導</a>
      </nav>
      
      <!-- 桌面版搜尋框 -->
      <div class="desktop-search" :class="{ 'open': isSearchOpen }">
        <div class="desktop-search-box">
          <input 
            ref="desktopSearchInput"
            v-model="searchQuery"
            type="text" 
            placeholder="搜尋商品..."
            class="desktop-search-input"
            @keyup.enter="performSearch"
            @keyup.escape="closeSearch"
            @focus="handleSearchFocus"
            @blur="handleSearchBlur"
            @input="handleSearchInput"
          />
          <button class="desktop-search-submit" @click="performSearch">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="header-actions">
        <!-- 搜尋按鈕 -->
        <button 
          class="search-btn" 
          :class="{ 'hidden-on-mobile-menu': isMobileMenuOpen && isMobile }"
          @click="toggleSearch"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
        
        <!-- 桌面版多點按鈕 -->
        <button class="icon-btn desktop-only">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
        
        <!-- 手機版漢堡按鈕 -->
        <button 
          class="hamburger-btn mobile-only" 
          @click="toggleMobileMenu"
          :class="{ 'active': isMobileMenuOpen }"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
    
    <!-- 手機版導航選單 -->
    <div class="mobile-nav" :class="{ 'open': isMobileMenuOpen }">
      <!-- 手機版選單標題區域 -->
      <div class="mobile-nav-header">
        <NuxtLink to="/" class="mobile-nav-logo" @click="closeMobileMenu">
          <img src="/logo/logo.png" alt="擊GK潮流公仔" class="mobile-logo-image" />
        </NuxtLink>
        <button class="mobile-nav-close" @click="closeMobileMenu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <nav class="mobile-nav-content">
        <NuxtLink to="/products" class="mobile-nav-link" @click="closeMobileMenu">全部商品</NuxtLink>
        <NuxtLink to="/new-arrivals" class="mobile-nav-link" @click="closeMobileMenu">最新上架</NuxtLink>
        <NuxtLink to="/featured" class="mobile-nav-link" @click="closeMobileMenu">新品推薦</NuxtLink>
        <NuxtLink to="/sale" class="mobile-nav-link" @click="closeMobileMenu">限時特惠</NuxtLink>
        <NuxtLink to="/licensed" class="mobile-nav-link" @click="closeMobileMenu">授權雕像</NuxtLink>
        <NuxtLink to="/service" class="mobile-nav-link" @click="closeMobileMenu">售後服務</NuxtLink>
        <NuxtLink to="/about" class="mobile-nav-link" @click="closeMobileMenu">品牌介紹</NuxtLink>
        <a href="https://tw.news.yahoo.com/%E6%96%B0%E5%8C%97gk%E5%85%AC%E4%BB%94%E6%8E%A8%E8%96%A6%E5%93%81%E7%89%8C%EF%BC%8C%E5%96%9C%E6%84%9B%E6%94%B6%E8%97%8F%E5%85%AC%E4%BB%94%E9%A6%96%E9%81%B8%E5%AE%83-070605999.html" target="_blank" rel="noopener noreferrer" class="mobile-nav-link" @click="closeMobileMenu">SCC®媒體報導</a>
      </nav>
    </div>
    
    <!-- 手機版搜尋跳窗 -->
    <div class="search-overlay mobile-search-overlay" :class="{ 'open': isSearchOpen }" @click="closeSearch">
      <div class="search-container" @click.stop>
        <div class="search-box">
          <input 
            ref="searchInput"
            v-model="searchQuery"
            type="text" 
            placeholder="搜尋商品..."
            class="search-input"
            @keyup.enter="performSearch"
            @keyup.escape="closeSearch"
          />
          <button class="search-submit" @click="performSearch">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- 背景遮罩 -->
    <div 
      class="mobile-overlay" 
      :class="{ 'open': isMobileMenuOpen || (isSearchOpen && isMobile) }"
      @click="closeAllMenus"
    ></div>
  </header>
</template>

<script setup>
import { ref, nextTick } from 'vue'

// 手機版選單狀態
const isMobileMenuOpen = ref(false)
const isSearchOpen = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)
const desktopSearchInput = ref(null)
const isSearchFocused = ref(false)
const isMobile = ref(false)

// 切換手機版選單
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    isSearchOpen.value = false
  }
}

// 關閉手機版選單
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// 切換搜尋
const toggleSearch = async () => {
  isSearchOpen.value = !isSearchOpen.value
  if (isSearchOpen.value) {
    isMobileMenuOpen.value = false
    await nextTick()
    // 根據設備類型聚焦到對應的輸入框
    if (window.innerWidth > 768) {
      desktopSearchInput.value?.focus()
    } else {
      searchInput.value?.focus()
    }
  }
}

// 關閉搜尋
const closeSearch = () => {
  isSearchOpen.value = false
  searchQuery.value = ''
  isSearchFocused.value = false
}

// 關閉所有選單
const closeAllMenus = () => {
  isMobileMenuOpen.value = false
  isSearchOpen.value = false
  isSearchFocused.value = false
}

// 處理桌面版搜尋聚焦
const handleSearchFocus = () => {
  isSearchFocused.value = true
  isSearchOpen.value = true
}

// 處理桌面版搜尋失焦
const handleSearchBlur = () => {
  isSearchFocused.value = false
  // 延遲關閉，讓用戶有時間點擊搜尋按鈕
  setTimeout(() => {
    if (!isSearchFocused.value) {
      isSearchOpen.value = false
    }
  }, 200)
}

// 處理點擊外部區域關閉搜尋
const handleClickOutside = (event) => {
  if (isSearchOpen.value && !isMobile.value) {
    const searchContainer = document.querySelector('.desktop-search')
    const searchBtn = document.querySelector('.search-btn')
    
    if (searchContainer && searchBtn && 
        !searchContainer.contains(event.target) && 
        !searchBtn.contains(event.target)) {
      isSearchOpen.value = false
      isSearchFocused.value = false
    }
  }
}

// 處理滾動關閉搜尋
const handleScroll = () => {
  if (isSearchOpen.value && !isMobile.value) {
    isSearchOpen.value = false
    isSearchFocused.value = false
  }
}

// 處理搜尋輸入
const handleSearchInput = () => {
  // 當用戶開始輸入時，確保搜尋框保持開啟
  if (!isSearchOpen.value && !isMobile.value) {
    isSearchOpen.value = true
    isSearchFocused.value = true
  }
}

// 執行搜尋
const performSearch = () => {
  if (searchQuery.value.trim()) {
    // 跳轉到搜尋結果頁面
    navigateTo(`/search?q=${encodeURIComponent(searchQuery.value.trim())}`)
    closeSearch()
  }
}

// 檢測設備類型
const checkDeviceType = () => {
  isMobile.value = window.innerWidth <= 768
}

// 組件掛載時檢測設備類型
onMounted(() => {
  checkDeviceType()
  window.addEventListener('resize', checkDeviceType)
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', handleScroll)
})

// 組件卸載時清理事件監聽器
onUnmounted(() => {
  window.removeEventListener('resize', checkDeviceType)
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', handleScroll)
})

// 監聽路由變化，自動關閉選單
const route = useRoute()
watch(() => route.path, () => {
  closeAllMenus()
})
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

.nav-link.router-link-active {
  color: #ff6b9d;
  font-weight: 600;
  position: relative;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #ff6b9d;
  border-radius: 1px;
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
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.icon-btn:hover {
  background: #f0f0f0;
  transform: translateY(-1px);
}

.icon-btn:active {
  transform: translateY(0);
}

.icon-btn svg {
  transition: all 0.3s ease;
}

.icon-btn:hover svg {
  transform: scale(1.1);
  color: #ff6b9d;
}

/* 手機版專用元素 */
.mobile-only {
  display: none;
}

/* 桌面版專用元素 */
.desktop-only {
  display: flex;
}

/* 桌面版多點按鈕特殊樣式 - 與搜尋按鈕同風格 */
.desktop-only.icon-btn {
  background: linear-gradient(135deg, #ff6b9d, #ff8fab);
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3);
  position: relative;
  overflow: hidden;
  width: 40px;
  height: 40px;
  padding: 8px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.desktop-only.icon-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.desktop-only.icon-btn:hover::before {
  left: 100%;
}

.desktop-only.icon-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 107, 157, 0.4);
}

.desktop-only.icon-btn:active {
  animation: pulse 0.3s ease;
}

.desktop-only.icon-btn svg {
  color: white;
  transition: all 0.3s ease;
}

.desktop-only.icon-btn:hover svg {
  transform: scale(1.1);
}

/* 桌面版搜尋框 */
.desktop-search {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  margin-top: 10px;
}

.desktop-search.open {
  width: 400px;
  opacity: 1;
  visibility: visible;
}

.desktop-search-box {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 25px;
  padding: 8px 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.desktop-search-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 107, 157, 0.1), transparent);
  transition: left 0.6s;
}

.desktop-search-box::after {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid white;
  filter: drop-shadow(0 -2px 4px rgba(0, 0, 0, 0.1));
}

.desktop-search-box:focus-within {
  border-color: #ff6b9d;
  box-shadow: 0 4px 25px rgba(255, 107, 157, 0.2);
}

.desktop-search-box:focus-within::before {
  left: 100%;
}

.desktop-search-input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 12px 16px;
  font-size: 1rem;
  color: #2d3748;
  outline: none;
  width: 100%;
}

.desktop-search-input::placeholder {
  color: #a0aec0;
  transition: color 0.3s ease;
}

.desktop-search-input:focus::placeholder {
  color: #cbd5e0;
}

.desktop-search-submit {
  background: linear-gradient(135deg, #ff6b9d, #ff8fab);
  border: none;
  border-radius: 20px;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
}

.desktop-search-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(255, 107, 157, 0.4);
}

.desktop-search-submit:active {
  transform: translateY(0);
}

.desktop-search-submit svg {
  color: white;
  transition: transform 0.3s ease;
}

.desktop-search-submit:hover svg {
  transform: scale(1.1);
}

/* 搜尋按鈕樣式 */
.search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff6b9d, #ff8fab);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3);
  position: relative;
  overflow: hidden;
}

/* 手機版選單開啟時隱藏搜尋按鈕 */
.search-btn.hidden-on-mobile-menu {
  opacity: 0;
  visibility: hidden;
  transform: scale(0.8);
}

.search-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.search-btn:hover::before {
  left: 100%;
}

.search-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 107, 157, 0.4);
}

.search-btn:active {
  animation: pulse 0.3s ease;
}

.search-btn svg {
  color: white;
  transition: all 0.3s ease;
}

.search-btn:hover svg {
  transform: scale(1.1);
}

/* 手機版搜尋跳窗樣式 */
.mobile-search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
  backdrop-filter: blur(8px);
  z-index: 1002;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
}

.mobile-search-overlay.open {
  opacity: 1;
  visibility: visible;
}

/* 桌面版搜尋跳窗隱藏 */
@media (min-width: 769px) {
  .mobile-search-overlay {
    display: none;
  }
}

.search-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  padding: 24px;
  width: 90%;
  max-width: 500px;
  transform: translateY(-20px);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.search-overlay.open .search-container {
  transform: translateY(0);
}

.search-box {
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 4px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.search-box:focus-within {
  border-color: #ff6b9d;
  background: white;
  box-shadow: 0 0 0 3px rgba(255, 107, 157, 0.1);
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 16px 20px;
  font-size: 1.1rem;
  color: #2d3748;
  outline: none;
}

.search-input::placeholder {
  color: #a0aec0;
}

.search-submit {
  background: linear-gradient(135deg, #ff6b9d, #ff8fab);
  border: none;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 107, 157, 0.3);
}

.search-submit svg {
  color: white;
}


/* 現代化漢堡按鈕樣式 */
.hamburger-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #ff6b9d, #ff8fab);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 6px;
  z-index: 1001;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3);
  position: relative;
  overflow: hidden;
}

.hamburger-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.hamburger-btn:hover::before {
  left: 100%;
}

.hamburger-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 107, 157, 0.4);
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background-color: white;
  border-radius: 1px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  position: relative;
}

/* 現代化漢堡按鈕動畫 */
.hamburger-btn.active {
  background: linear-gradient(135deg, #333, #555);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.hamburger-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
}

.hamburger-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: translateX(20px) scale(0);
}

.hamburger-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
  background: linear-gradient(-45deg, #ff6b9d, #ff8fab);
}

/* 現代化手機版導航選單 */
.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 85%;
  max-width: 320px;
  height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  backdrop-filter: blur(20px);
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.12);
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  border-left: 1px solid rgba(255, 107, 157, 0.1);
}

.mobile-nav.open {
  right: 0;
  transform: translateX(0);
}

/* 手機版選單標題區域 */
.mobile-nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.mobile-nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.mobile-logo-image {
  height: 20px;
  width: auto;
  object-fit: contain;
}

.mobile-nav-close {
  background: #f1f5f9;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-nav-close:hover {
  background: #e2e8f0;
  transform: scale(1.1);
}

.mobile-nav-close svg {
  color: #64748b;
}

.mobile-nav-content {
  padding: 100px 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.mobile-nav-link {
  display: block;
  padding: 20px 16px;
  text-decoration: none;
  color: #2d3748;
  font-size: 1.125rem;
  font-weight: 500;
  border-radius: 12px;
  margin-bottom: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.mobile-nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 107, 157, 0.1), transparent);
  transition: left 0.6s;
}

.mobile-nav-link:hover::before {
  left: 100%;
}

.mobile-nav-link:hover {
  color: #ff6b9d;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05), rgba(255, 139, 171, 0.05));
  transform: translateX(8px);
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.15);
}

.mobile-nav-link.router-link-active {
  color: #ff6b9d;
  font-weight: 600;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.1), rgba(255, 139, 171, 0.1));
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.2);
  border-left: 4px solid #ff6b9d;
}

/* 現代化背景遮罩 */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
  backdrop-filter: blur(8px);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-overlay.open {
  opacity: 1;
  visibility: visible;
}

/* 響應式設計 */
@media (max-width: 1200px) {
  .desktop-nav {
    gap: 1rem;
  }
  
  .nav-link {
    font-size: 0.9rem;
  }
}

/* 微交互和視覺細節 */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.hamburger-btn:active {
  animation: pulse 0.3s ease;
}

.mobile-nav-link {
  animation: slideInRight 0.6s ease forwards;
  opacity: 0;
  transform: translateX(30px);
}

.mobile-nav.open .mobile-nav-link {
  animation: slideInRight 0.6s ease forwards;
}

.mobile-nav.open .mobile-nav-link:nth-child(1) { animation-delay: 0.1s; }
.mobile-nav.open .mobile-nav-link:nth-child(2) { animation-delay: 0.15s; }
.mobile-nav.open .mobile-nav-link:nth-child(3) { animation-delay: 0.2s; }
.mobile-nav.open .mobile-nav-link:nth-child(4) { animation-delay: 0.25s; }
.mobile-nav.open .mobile-nav-link:nth-child(5) { animation-delay: 0.3s; }
.mobile-nav.open .mobile-nav-link:nth-child(6) { animation-delay: 0.35s; }
.mobile-nav.open .mobile-nav-link:nth-child(7) { animation-delay: 0.4s; }
.mobile-nav.open .mobile-nav-link:nth-child(8) { animation-delay: 0.45s; }

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}


@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .desktop-only {
    display: none;
  }
  
  .desktop-search {
    display: none;
  }
  
  .mobile-only {
    display: flex;
  }
  
  .logo-image {
    height: 25px;
  }
  
  .header-actions {
    gap: 0.5rem;
  }
  
  .icon-btn {
    padding: 0.3rem;
  }
  
  .icon-btn svg {
    width: 18px;
    height: 18px;
  }
  
  .hamburger-btn {
    width: 36px;
    height: 36px;
  }
  
  .search-btn {
    width: 36px;
    height: 36px;
  }
  
  .search-container {
    margin: 0 16px;
    padding: 20px;
  }
  
  .search-input {
    font-size: 1rem;
    padding: 14px 16px;
  }
}

@media (min-width: 769px) {
  .desktop-search {
    display: block;
  }
  
  .mobile-search-overlay {
    display: none;
  }
  
  .mobile-only {
    display: none !important;
  }
}
</style>
