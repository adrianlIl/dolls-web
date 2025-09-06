<template>
  <div class="features-grid" :class="`grid-cols-${columns}`">
    <div 
      v-for="feature in features" 
      :key="feature.id || feature.title"
      class="feature-card"
      @click="handleFeatureClick(feature)"
    >
      <div class="feature-icon">{{ feature.icon }}</div>
      <h3 class="feature-title">{{ feature.title }}</h3>
      <p class="feature-description">{{ feature.description }}</p>
      <div v-if="feature.features && feature.features.length > 0" class="feature-tags">
        <span 
          v-for="tag in feature.features" 
          :key="tag"
          class="feature-tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  features: {
    type: Array,
    required: true
  },
  columns: {
    type: Number,
    default: 4
  },
  clickable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['feature-click'])

const handleFeatureClick = (feature) => {
  if (props.clickable) {
    emit('feature-click', feature)
  }
}
</script>

<style scoped>
.features-grid {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.grid-cols-1 {
  grid-template-columns: 1fr;
}

.grid-cols-2 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.grid-cols-4 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.feature-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.feature-card:hover {
  transform: translateY(-5px);
  z-index: 10;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.feature-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.feature-tag {
  background: #ff6b9d;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .feature-tags {
    justify-content: flex-start;
  }
}
</style>
