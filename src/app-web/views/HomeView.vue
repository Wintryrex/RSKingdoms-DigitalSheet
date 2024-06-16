<script setup lang="ts">
import Card from '../components/common/Card.vue'
import Skills from '../components/skills/Skills.vue'
</script>

<template>
  <main class="row">
    <div class="col-6">
      <div class="row">
        <div class="col-6">
          <Card title="Name">
            <input
              type="text"
              class="form-control rs-input"
              placeholder="Username"
              aria-label="Username"
            />
          </Card>
        </div>
        <div class="col-6">
          <Card title="Last Location">
            <input
              type="text"
              class="form-control rs-input"
              placeholder="Location"
              aria-label="Location"
            />
          </Card>
        </div>
        <!-- Left Elements -->
      </div>
    </div>
    <div class="col-6">
      <Skills />
    </div>
  </main>
</template>
