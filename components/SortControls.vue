<template>
  <div class="sort-controls">
    <div class="control-group">
      <div class="control-item">
        <div class="control-label">
          <svg class="control-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 6h18M7 12h10M10 18h4"/>
          </svg>
          <span>排序</span>
        </div>
        <div class="select-wrapper">
          <select class="sort-select" :value="sortBy" @change="handleSortChange">
            <option value="newest">最新上架</option>
            <option value="price-low">價格由低到高</option>
            <option value="price-high">價格由高到低</option>
            <option value="popular">熱門度</option>
          </select>
          <svg class="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
      
      <div class="control-item">
        <div class="control-label">
          <svg class="control-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
          <span>顯示</span>
        </div>
        <div class="select-wrapper">
          <select class="view-select" :value="itemsPerPage" @change="handlePaginationChange">
            <option value="12">12 件</option>
            <option value="24">24 件</option>
            <option value="36">36 件</option>
          </select>
          <svg class="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sortBy: {
    type: String,
    required: true
  },
  itemsPerPage: {
    type: [String, Number],
    required: true
  }
})

const emit = defineEmits(['sort-change', 'pagination-change'])

const handleSortChange = (event) => {
  emit('sort-change', event.target.value)
}

const handlePaginationChange = (event) => {
  emit('pagination-change', parseInt(event.target.value))
}
</script>

<style scoped>
.sort-controls {
  flex-shrink: 0;
  min-width: 0;
}

.control-group {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.control-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
}

.control-label {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.control-icon {
  width: 14px;
  height: 14px;
  color: #94a3b8;
}

.select-wrapper {
  position: relative;
  min-width: 120px;
}

.sort-select, .view-select {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  font-size: 0.875rem;
  color: #1e293b;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  appearance: none;
  outline: none;
}

.sort-select:hover, .view-select:hover {
  border-color: rgba(255, 107, 157, 0.3);
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.sort-select:focus, .view-select:focus {
  border-color: #ff6b9d;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 3px rgba(255, 107, 157, 0.1);
}

.select-arrow {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #94a3b8;
  pointer-events: none;
  transition: color 0.3s ease;
}

.sort-select:hover + .select-arrow,
.view-select:hover + .select-arrow {
  color: #ff6b9d;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .control-group {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  
  .control-item {
    flex-direction: row;
    align-items: center;
    gap: 0.375rem;
    flex: 1;
    min-width: 120px;
  }
  
  .control-label {
    font-size: 0.75rem;
    white-space: nowrap;
    flex-shrink: 0;
  }
  
  .select-wrapper {
    min-width: 80px;
    flex: 1;
  }
  
  .sort-select, .view-select {
    padding: 0.5rem 1.5rem 0.5rem 0.6rem;
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .control-group {
    flex-direction: column;
    gap: 0.4rem;
    align-items: stretch;
  }
  
  .control-item {
    flex-direction: row;
    align-items: center;
    gap: 0.3rem;
    min-width: 0;
  }
  
  .control-label {
    font-size: 0.7rem;
    min-width: 50px;
  }
  
  .select-wrapper {
    min-width: 0;
    flex: 1;
  }
  
  .sort-select, .view-select {
    padding: 0.4rem 1.2rem 0.4rem 0.5rem;
    font-size: 0.7rem;
  }
}
</style>
