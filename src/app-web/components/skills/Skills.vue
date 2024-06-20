<script setup lang="ts">
import { inject, onBeforeMount } from 'vue'
import Skill from './Skill.vue'
import type SkillType from './Skill.ts'
import Card from '../common/Card.vue'
import { isSettings } from '../../settings/settings'
import type { Settings } from '../../settings/settings'

let skills: SkillType[] = []

onBeforeMount(() => {
  const settings = inject<Settings>('settings')

  if (isSettings(settings)) {
    skills = settings.skills as SkillType[]
  }
})
</script>

<template>
  <Card title="Skills">
    <Skill
      v-for="skill in skills"
      :title="skill.title"
      :src="skill.src"
      :alt="skill.alt"
      :class="'skill'"
    ></Skill>
  </Card>
</template>

<style>
.skill:not(:first-child) {
  margin-top: 2em;
}
</style>
