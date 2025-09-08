<!--
  SectionDivider 組件
  用途：用於分隔不同區塊的標題組件
  功能：
  - 顯示區塊標題文字
  - 具有水平分隔線的視覺效果
  - 居中對齊的設計
  - 可重複使用的通用組件
  使用場景：各頁面的區塊標題（如「精選商品」、「授權雕像」等）
-->
<template>
  <div class="section-divider">
    <span>{{ title }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.section-divider {
  text-align: center;
  margin: 4rem 0 3rem;
  position: relative;
  z-index: 10;
}

.section-divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #ddd;
  z-index: 1;
}

.section-divider span {
  background: rgba(255, 255, 255, 0.9);
  padding: 0 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  position: relative;
  z-index: 2;
  border-radius: 20px;
}
</style>
