<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <div class="card">
    <div class="card-header">{{ title }}</div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>
