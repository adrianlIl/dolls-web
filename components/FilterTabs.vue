<!--
  FilterTabs 組件
  用途：用於商品分類篩選的標籤組件
  功能：
  - 顯示多個分類篩選標籤
  - 支援點擊切換分類
  - 顯示每個分類的商品數量
  - 具有活躍狀態的視覺反饋
  - 響應式設計，支援橫向滾動
  使用場景：商品列表頁面的分類篩選功能
-->
<template>
  <div class="filter-tabs">
    <div class="filter-tabs-wrapper">
      <button 
        v-for="category in categories" 
        :key="category.id || category.value"
        class="filter-tab"
        :class="{ active: currentFilter === (category.id || category.value) }"
        @click="setFilter(category.id || category.value)"
      >
        <div class="tab-content">
          <div v-if="category.icon || category.iconType" class="tab-icon">
            <CategoryIcon 
              v-if="category.iconType" 
              :type="category.iconType" 
            />
            <img v-else-if="typeof category.icon === 'string' && category.icon.includes('/')" :src="category.icon" :alt="category.name || category.label" />
            <span v-else>{{ category.icon }}</span>
          </div>
          <div class="tab-text">
            <span class="tab-name">{{ category.name || category.label }}</span>
            <span v-if="category.count" class="tab-count">{{ category.count }}</span>
          </div>
        </div>
        <div class="tab-indicator"></div>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  currentFilter: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['filter-change'])

const setFilter = (filter) => {
  emit('filter-change', filter)
}
</script>

<style scoped>
.filter-tabs {
  flex: 1;
  min-width: 0;
}

.filter-tabs-wrapper {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.filter-tab {
  position: relative;
  padding: 0.75rem 1.25rem;
  border: none;
  background: transparent;
  color: #64748b;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
}

.filter-tab:hover {
  background: rgba(255, 107, 157, 0.08);
  color: #ff6b9d;
  transform: translateY(-1px);
}

.filter-tab.active {
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3);
  transform: translateY(-1px);
}

.tab-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}

.tab-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.tab-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.tab-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
}

.tab-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: inherit;
  line-height: 1.2;
}

.tab-count {
  font-size: 0.75rem;
  color: inherit;
  font-weight: 500;
  opacity: 0.7;
  margin-top: 0.125rem;
}

.tab-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.filter-tab.active .tab-indicator {
  transform: scaleX(1);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .filter-tabs-wrapper {
    gap: 0.2rem;
    padding: 0.3rem;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .filter-tabs-wrapper::-webkit-scrollbar {
    display: none;
  }
  
  .filter-tab {
    padding: 0.5rem 0.7rem;
    font-size: 0.75rem;
    min-width: 80px;
    flex-shrink: 0;
  }
  
  .tab-icon {
    width: 16px;
    height: 16px;
    font-size: 0.8rem;
  }
  
  .tab-name {
    font-size: 0.75rem;
  }
  
  .tab-count {
    font-size: 0.65rem;
  }
}

@media (max-width: 480px) {
  .filter-tabs-wrapper {
    gap: 0.15rem;
    padding: 0.25rem;
    justify-content: flex-start;
  }
  
  .filter-tab {
    padding: 0.4rem 0.6rem;
    font-size: 0.7rem;
    min-width: 70px;
  }
  
  .tab-icon {
    width: 14px;
    height: 14px;
    font-size: 0.75rem;
  }
  
  .tab-name {
    font-size: 0.7rem;
  }
  
  .tab-count {
    font-size: 0.6rem;
  }
}
</style>
