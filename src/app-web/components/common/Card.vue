<script setup lang="ts">
defineProps({
  title: String,
  placeholder: String,
  ariaLabel: String
})
</script>

<template>
  <div class="card">
    <div class="card-header">{{ title }}</div>
    <div class="card-body">
      <input
        type="text"
        class="form-control rs-input"
        :placeholder="placeholder"
        :aria-label="ariaLabel"
      />
    </div>
  </div>
</template>
