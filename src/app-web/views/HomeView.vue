<script setup lang="ts">
import Card from '../components/common/CardPanel.vue'
import Skills from '../components/skills/SkillsList.vue'
import WoundsList from '../components/health/wounds/WoundsList.vue'
</script>

<template>
  <main class="row">
    <div class="col-lg-6">
      <div class="row">
        <div class="col-lg-6">
          <Card title="Name">
            <input
              type="text"
              class="form-control rs-input"
              placeholder="Username"
              aria-label="Username"
            />
          </Card>
        </div>
        <div class="col-lg-6">
          <Card title="Last Location">
            <input
              type="text"
              class="form-control rs-input"
              placeholder="Location"
              aria-label="Location"
            />
          </Card>
        </div>
        <div class="col-lg-6 mt-4">
          <WoundsList />
        </div>
        <div class="col-lg-6 mt-4">
          <Card title="Death Tally">
            <input
              type="text"
              class="form-control rs-input"
              placeholder="Amount"
              aria-label="Death Amount"
            />
          </Card>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <Skills />
    </div>
  </main>
</template>
