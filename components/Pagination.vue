<!--
  Pagination 組件
  用途：用於分頁導航的組件
  功能：
  - 顯示頁碼按鈕和導航箭頭
  - 支援跳轉到指定頁面
  - 顯示當前頁面和總頁數
  - 具有活躍狀態的視覺反饋
  - 響應式設計，適應不同螢幕尺寸
  使用場景：商品列表、文章列表等需要分頁的頁面
-->
<template>
  <div class="pagination-section" v-if="totalPages > 1">
    <div class="container">
      <div class="pagination">
        <!-- 上一頁按鈕 -->
        <button 
          class="page-btn prev"
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage <= 1"
        >
          ←
        </button>
        
        <!-- 第一頁 -->
        <button 
          class="page-btn" 
          :class="{ active: currentPage === 1 }"
          @click="goToPage(1)"
        >
          1
        </button>
        
        <!-- 省略號（當需要時） -->
        <span v-if="showStartEllipsis" class="ellipsis">...</span>
        
        <!-- 中間頁面 -->
        <button 
          v-for="page in visiblePages" 
          :key="page"
          class="page-btn"
          :class="{ active: currentPage === page }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
        
        <!-- 省略號（當需要時） -->
        <span v-if="showEndEllipsis" class="ellipsis">...</span>
        
        <!-- 最後一頁（當總頁數大於1時） -->
        <button 
          v-if="totalPages > 1"
          class="page-btn" 
          :class="{ active: currentPage === totalPages }"
          @click="goToPage(totalPages)"
        >
          {{ totalPages }}
        </button>
        
        <!-- 下一頁按鈕 -->
        <button 
          class="page-btn next"
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage >= totalPages"
        >
          →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['page-change'])

const visiblePages = computed(() => {
  const pages = []
  const total = props.totalPages
  const current = props.currentPage
  
  if (total <= 7) {
    // 如果總頁數不超過7頁，顯示所有頁面（除了第1頁和最後一頁）
    for (let i = 2; i < total; i++) {
      pages.push(i)
    }
  } else {
    // 如果總頁數超過7頁，顯示當前頁面附近的頁面
    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
  }
  
  return pages
})

const showStartEllipsis = computed(() => {
  const total = props.totalPages
  const current = props.currentPage
  return total > 7 && current > 4
})

const showEndEllipsis = computed(() => {
  const total = props.totalPages
  const current = props.currentPage
  return total > 7 && current < total - 3
})

const goToPage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('page-change', page)
  }
}
</script>

<style scoped>
.pagination-section {
  padding: 2rem 0;
  background: transparent;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.page-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: white;
  color: #666;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.page-btn:hover {
  background: #f8f9fa;
  border-color: #ff6b9d;
  color: #ff6b9d;
}

.page-btn.active {
  background: #ff6b9d;
  color: white;
  border-color: #ff6b9d;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ellipsis {
  padding: 0.5rem 0.5rem;
  color: #666;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .pagination {
    gap: 0.3rem;
  }
  
  .page-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}
</style>
