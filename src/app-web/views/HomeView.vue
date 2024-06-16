<script setup lang="ts">
import Card from '../components/common/Card.vue'
import Skills from '../components/skills/Skills.vue'
</script>

<template>
  <main class="row">
    <div class="col-6">
      <div class="row">
        <div class="col-6">
          <Card title="Name" placeholder="Username" ariaLabel="Username" />
        </div>
        <div class="col-6">
          <Card title="Last Location" placeholder="Location" ariaLabel="Location" />
        </div>
        <!-- Left Elements -->
      </div>
    </div>
    <div class="col-6">
      <Skills />
    </div>
  </main>
</template>
