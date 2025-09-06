<template>
  <div class="countdown-timer">
    <div class="timer-item">
      <span class="timer-number">{{ timeLeft.days }}</span>
      <span class="timer-label">天</span>
    </div>
    <div class="timer-item">
      <span class="timer-number">{{ timeLeft.hours }}</span>
      <span class="timer-label">時</span>
    </div>
    <div class="timer-item">
      <span class="timer-number">{{ timeLeft.minutes }}</span>
      <span class="timer-label">分</span>
    </div>
    <div class="timer-item">
      <span class="timer-number">{{ timeLeft.seconds }}</span>
      <span class="timer-label">秒</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  endTime: {
    type: Date,
    required: true
  }
})

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

let countdownInterval = null

const startCountdown = () => {
  countdownInterval = setInterval(() => {
    const now = new Date().getTime()
    const distance = props.endTime.getTime() - now
    
    if (distance < 0) {
      clearInterval(countdownInterval)
      return
    }
    
    timeLeft.value = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }
  }, 1000)
}

onMounted(() => {
  startCountdown()
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>

<style scoped>
.countdown-timer {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
}

.timer-item {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.8rem 1rem;
  text-align: center;
  min-width: 70px;
  flex: 0 0 auto;
}

.timer-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  line-height: 1;
}

.timer-label {
  font-size: 0.8rem;
  opacity: 0.8;
  line-height: 1;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .countdown-timer {
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .timer-item {
    padding: 0.75rem 0.4rem;
    min-width: 50px;
    flex: 1;
    max-width: 60px;
  }
  
  .timer-number {
    font-size: 1.3rem;
    line-height: 1;
  }
  
  .timer-label {
    font-size: 0.7rem;
    margin-top: 0.25rem;
  }
}

@media (max-width: 480px) {
  .countdown-timer {
    gap: 0.3rem;
    padding: 0 1rem;
  }
  
  .timer-item {
    padding: 0.6rem 0.3rem;
    min-width: 45px;
    max-width: 55px;
  }
  
  .timer-number {
    font-size: 1.1rem;
  }
  
  .timer-label {
    font-size: 0.65rem;
  }
}
</style>
