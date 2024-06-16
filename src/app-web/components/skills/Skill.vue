<script setup lang="ts">
import { ref, watch } from 'vue'

defineProps({
  title: String,
  src: String,
  alt: String
})

const finishedXpSlots = ref([])
const currentLevel = ref(1)
const xpSlots = 3

const handleXpChange = () => {
  if (finishedXpSlots.value.length === xpSlots) {
    finishedXpSlots.value = []
    currentLevel.value++
  }
}

const increaseLevel = () => {
  currentLevel.value++
}

const decreaseLevel = () => {
  currentLevel.value--
}

watch(finishedXpSlots, handleXpChange)
</script>

<template>
  <div class="row">
    <div class="col-lg-2 skill-logo-container align-self-center">
      <div class="row">
        <div class="col-lg-12">
          <img :src="src" :alt="alt" />
        </div>
        <div class="col-lg-12">
          <h5>{{ title }}</h5>
        </div>
      </div>
    </div>
    <div class="col-lg-5 skill-text-container align-self-center">
      <div class="input-group">
        <button
          @click="decreaseLevel"
          class="btn btn-outline-secondary"
          type="button"
          :disabled="currentLevel <= 1"
        >
          -
        </button>
        <input
          type="number"
          :value="currentLevel"
          class="form-control current-level"
          placeholder="Current Level"
        />
        <button @click="increaseLevel" class="btn btn-outline-secondary" type="button">+</button>
      </div>
    </div>
    <div class="col-lg-4 offset-lg-1 skill-checkbox-container align-self-center">
      <template v-for="xp in xpSlots">
        <label>
          <input type="checkbox" :value="xp" v-model="finishedXpSlots" />
          <span>XP</span>
        </label>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.skill-logo-container {
  text-align: center;

  img {
    width: 3.5em;
    height: 3.5em;
  }

  h4 {
    margin-top: 0.5em;
  }
}

.skill-text-container {
  .current-level {
    border-color: #6c757d;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  input[type='number'] {
    appearance: none;
    -moz-appearance: textfield;
  }
}

.skill-checkbox-container {
  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #3f51b5;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 4em;
    height: 4em;
    border: 0.2em solid #3f51b5;
    border-radius: 0.25em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
    cursor: pointer;
  }

  input[type='checkbox']::before {
    content: '';
    width: 3em;
    height: 3em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background: #a43d0a;
    outline: 1px #a43d0a solid;
  }

  input[type='checkbox']:checked::before {
    transform: scale(1);
  }

  label {
    position: relative;
    cursor: pointer;
    padding: 0.4em;
  }

  label span {
    position: absolute;
    top: 35%;
    left: 35%;
    color: white;
    display: inline-block;
    line-height: 1;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}
</style>
