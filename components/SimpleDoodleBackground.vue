<template>
  <div class="simple-doodle-bg" :class="{ 'animated': isAnimated }">
    <!-- SVG塗鴉層 -->
    <div class="doodle-layer">
      <div 
        v-for="(doodle, index) in doodleItems" 
        :key="index"
        class="doodle-svg"
        :style="getDoodleStyle(doodle, index)"
      >
        <img 
          :src="doodle.src" 
          :alt="doodle.alt"
          class="svg-image"
        />
      </div>
    </div>
    
    <!-- 裝飾線條 -->
    <div class="decorative-lines">
      <div 
        v-for="(line, index) in decorativeLines" 
        :key="`line-${index}`"
        class="decorative-line"
        :style="getLineStyle(line, index)"
      ></div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Props
const props = defineProps({
  animated: {
    type: Boolean,
    default: true
  },
  opacity: {
    type: Number,
    default: 0.3
  },
  theme: {
    type: String,
    default: 'pink',
    validator: (value) => ['pink', 'blue', 'green', 'purple'].includes(value)
  }
})

// 響應式數據
const isAnimated = ref(props.animated)

// 主題色彩配置
const themes = {
  pink: ['#ff6b9d', '#ff8fab', '#ffb3c6'],
  blue: ['#667eea', '#764ba2', '#9c88ff'],
  green: ['#56ab2f', '#a8e6cf', '#88d8a3'],
  purple: ['#8e44ad', '#9b59b6', '#bb8fce']
}

const currentTheme = themes[props.theme]

// 塗鴉項目配置
const doodleItems = ref([
  {
    src: '/images/preorder/1298179.svg',
    alt: 'Doodle 1',
    size: 200,
    position: { x: 8, y: 15 },
    rotation: 15,
    delay: 0
  },
  {
    src: '/images/preorder/1388118.svg',
    alt: 'Doodle 2',
    size: 160,
    position: { x: 75, y: 25 },
    rotation: -20,
    delay: 0.5
  },
  {
    src: '/images/preorder/1435214.svg',
    alt: 'Doodle 3',
    size: 180,
    position: { x: 15, y: 65 },
    rotation: 35,
    delay: 1
  },
  {
    src: '/images/preorder/1435217.svg',
    alt: 'Doodle 4',
    size: 140,
    position: { x: 70, y: 70 },
    rotation: -15,
    delay: 1.5
  },
  {
    src: '/images/preorder/1435220.svg',
    alt: 'Doodle 5',
    size: 120,
    position: { x: 85, y: 10 },
    rotation: 45,
    delay: 2
  }
])

// 裝飾線條
const decorativeLines = ref([
  { x1: 0, y1: 20, x2: 100, y2: 80, width: 2, color: currentTheme[0] },
  { x1: 20, y1: 0, x2: 80, y2: 100, width: 1.5, color: currentTheme[1] },
  { x1: 0, y1: 60, x2: 100, y2: 40, width: 1, color: currentTheme[2] }
])


// 方法
const getDoodleStyle = (doodle, index) => {
  return {
    position: 'absolute',
    left: `${doodle.position.x}%`,
    top: `${doodle.position.y}%`,
    width: `${doodle.size}px`,
    height: `${doodle.size}px`,
    opacity: props.opacity,
    transform: `rotate(${doodle.rotation}deg)`,
    zIndex: 1,
    pointerEvents: 'none',
    animation: isAnimated.value ? `doodleFloat ${4 + index}s ease-in-out infinite` : 'none',
    animationDelay: `${doodle.delay}s`
  }
}

const getLineStyle = (line, index) => {
  const angle = Math.atan2(line.y2 - line.y1, line.x2 - line.x1) * 180 / Math.PI
  const length = Math.sqrt(Math.pow(line.x2 - line.x1, 2) + Math.pow(line.y2 - line.y1, 2))
  
  return {
    position: 'absolute',
    left: `${line.x1}%`,
    top: `${line.y1}%`,
    width: `${length}%`,
    height: `${line.width}px`,
    background: `linear-gradient(90deg, ${line.color}, transparent)`,
    transform: `rotate(${angle}deg)`,
    transformOrigin: '0 0',
    opacity: 0.6,
    zIndex: 2,
    animation: isAnimated.value ? `lineDraw ${3 + index}s ease-in-out infinite` : 'none',
    animationDelay: `${index * 0.5}s`
  }
}


onMounted(() => {
  // 組件掛載後的初始化
})
</script>

<style scoped>
.simple-doodle-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  background: transparent;
}

.doodle-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.doodle-svg {
  transition: all 0.3s ease;
}

.svg-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.decorative-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.decorative-line {
  border-radius: 2px;
}


/* 動畫定義 */
@keyframes doodleFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-8px) rotate(2deg) scale(1.02);
  }
  50% {
    transform: translateY(-4px) rotate(0deg) scale(1);
  }
  75% {
    transform: translateY(-12px) rotate(-2deg) scale(0.98);
  }
}

@keyframes lineDraw {
  0% {
    opacity: 0;
    transform: scaleX(0) rotate(0deg);
  }
  50% {
    opacity: 0.6;
    transform: scaleX(1) rotate(0deg);
  }
  100% {
    opacity: 0.3;
    transform: scaleX(1) rotate(0deg);
  }
}


/* 響應式設計 */
@media (max-width: 768px) {
  .doodle-svg {
    transform: scale(0.8) !important;
  }
  
  
  .decorative-line {
    opacity: 0.4 !important;
  }
}

@media (max-width: 480px) {
  .doodle-svg {
    transform: scale(0.6) !important;
  }
  
}

/* 性能優化 */
@media (prefers-reduced-motion: reduce) {
  .simple-doodle-bg.animated .doodle-svg,
  .simple-doodle-bg.animated .decorative-line {
    animation: none !important;
  }
}

/* 高對比度模式 */
@media (prefers-contrast: high) {
  .svg-image {
    filter: contrast(1.5) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }
  
  .decorative-line {
    opacity: 0.8 !important;
  }
}
</style>
