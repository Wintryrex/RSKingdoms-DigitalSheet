<script setup lang="ts">
import { reactive, ref } from 'vue'
import CardPanel from '../../common/CardPanel.vue'
import { useCharacterStore } from '@/stores/characterStore'
import { v4 as uuidv4 } from 'uuid'

const hearts = reactive([
  {
    id: uuidv4(),
    full: true
  },
  {
    id: uuidv4(),
    full: true
  },
  {
    id: uuidv4(),
    full: true
  }
])

const characterStore = useCharacterStore()

const toggleHealthPoint = (index: number) => {
  if (hearts[index].full) {
    characterStore.increaseHealth()
  } else {
    characterStore.decreaseHealth()
  }

  hearts[index].full = !hearts[index].full
}
</script>

<template>
  <CardPanel title="Wounds">
    <div class="health-container">
      <div class="hit-point" v-for="(hitPoint, index) in hearts" :key="hitPoint.id">
        <svg viewBox="0 0 32 29.6">
          <path
            @click="toggleHealthPoint(index)"
            :class="hitPoint.full ? 'healthy' : 'wounded'"
            stroke="black"
            stroke-width="1"
            d="M23.6,0c-3.4,0-6.1,2.6-7.6,5.3C14.5,2.6,11.8,0,8.4,0C3.6,0,0,3.6,0,8.4
        c0,6.9,11.6,15.4,16,17.5c4.4-2.1,16-10.6,16-17.5C32,3.6,28.4,0,23.6,0z"
          />
        </svg>
      </div>
    </div>
  </CardPanel>
</template>

<style scoped>
.health-container {
  justify-content: center;
  display: flex;
  gap: 1.5em;

  .hit-point {
    width: 3.8em;
    height: 3.8em;

    svg {
      cursor: pointer;
      pointer-events: none;
    }

    path {
      pointer-events: fill;
    }

    .healthy {
      fill: #a43d0a;
    }

    .wounded {
      fill: #424242;
    }
  }
}
</style>
