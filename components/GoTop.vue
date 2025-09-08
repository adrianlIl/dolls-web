<!--
  GoTop 組件
  用途：用於快速回到頁面頂部的按鈕組件
  功能：
  - 滾動時自動顯示/隱藏
  - 點擊可快速回到頁面頂部
  - 具有平滑的滾動動畫效果
  - 漸層背景和懸停效果
  - 響應式設計，固定在右下角
  使用場景：所有頁面的回到頂部功能
-->
<template>
  <Transition name="slide-up">
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="go-top-button"
      :class="{ 'is-visible': isVisible }"
      aria-label="回到頂部"
    >
      <div class="button-content">
        <svg viewBox="0 0 62 77" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M61.6 76.7999H0L30.8 23.3999L61.6 76.7999ZM4.79999 74.0999H56.8L30.8 29.0999L4.79999 74.0999Z" fill="currentColor"></path>
          <path d="M61.6 76.7999H0L30.8 23.3999L61.6 76.7999ZM4.79999 74.0999H56.8L30.8 29.0999L4.79999 74.0999Z" fill="currentColor"></path>
          <path d="M30.6998 0L2.2998 49.2H59.0999L30.6998 0Z" fill="currentColor"></path>
          <path d="M30.6998 0L2.2998 49.2H59.0999L30.6998 0Z" fill="currentColor"></path>
        </svg>
        <div class="ripple-effect"></div>
      </div>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const scrollThreshold = 300 // Show button after scrolling 300px

const handleScroll = () => {
  isVisible.value = window.scrollY > scrollThreshold
}

const scrollToTop = () => {
  // 添加點擊動畫效果
  const button = document.querySelector('.go-top-button')
  if (button) {
    button.classList.add('clicked')
    setTimeout(() => {
      button.classList.remove('clicked')
    }, 300)
  }
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Check initial scroll position
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.go-top-button {
  position: fixed !important;
  bottom: 2rem !important;
  right: 2rem !important;
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(135deg, #ff6b9d, #ff8fab);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10000 !important;
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3);
  overflow: hidden;
}

.go-top-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.go-top-button:hover::before {
  left: 100%;
}

.go-top-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 107, 157, 0.4);
}

.go-top-button:active {
  transform: translateY(-1px);
}

.go-top-button.clicked {
  animation: pulse 0.3s ease;
}

.button-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.go-top-button svg {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  transition: all 0.3s ease;
  z-index: 2;
}

.go-top-button:hover svg {
  transform: scale(1.1);
}

.ripple-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  z-index: 1;
}

.go-top-button:active .ripple-effect {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
}

/* Slide up transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

/* Pulse animation */
@keyframes pulse {
  0%, 100% {
    transform: translateY(-3px) scale(1);
  }
  50% {
    transform: translateY(-3px) scale(1.05);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .go-top-button {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  
  .go-top-button svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}

@media (max-width: 480px) {
  .go-top-button {
    bottom: 1rem;
    right: 1rem;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
  }
  
  .go-top-button svg {
    width: 1.1rem;
    height: 1.1rem;
  }
}
</style>
