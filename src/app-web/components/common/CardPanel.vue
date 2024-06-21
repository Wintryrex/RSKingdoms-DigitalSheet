<script setup lang="ts">
import type CardPanel from './CardPanel.ts'

defineProps<CardPanel>()
</script>

<template>
  <div class="card">
    <div class="card-header">{{ title }}</div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>
