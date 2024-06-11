<script setup lang="ts">
import Card from '../components/common/Card.vue'
</script>

<template>
  <main class="row">
    <div class="col-5">
      <Card title="Name" placeholder="Username" ariaLabel="Username" />
    </div>
    <div class="col-5">
      <Card title="Last Location" placeholder="Location" ariaLabel="Location" />
    </div>
  </main>
</template>
