import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCharacterStore = defineStore('character', () => {
  const healthPoints = ref(3)

  const increaseHealth = () => {
    healthPoints.value++
  }
  const decreaseHealth = () => {
    healthPoints.value--
  }

  return { healthPoints, increaseHealth, decreaseHealth }
})
