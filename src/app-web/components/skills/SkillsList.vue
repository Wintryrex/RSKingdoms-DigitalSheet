<script setup lang="ts">
import { inject, onBeforeMount } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import SkillItem from './SkillItem.vue'
import type SkillItemType from './SkillItem.ts'
import Card from '../common/CardPanel.vue'
import { isSettings } from '../../settings/settings'
import type Settings from '../../settings/settings'

let skills: SkillItemType[] = []

onBeforeMount(() => {
  const settings = inject<Settings>('settings')

  if (isSettings(settings)) {
    skills = settings.skills.map((item) => {
      const skill: SkillItemType = {
        id: uuidv4(),
        title: item.title,
        src: item.src,
        alt: item.alt
      }
      return skill
    })
  }
})
</script>

<template>
  <Card title="Skills">
    <SkillItem
      v-for="skill in skills"
      :key="skill.id"
      :id="skill.id"
      :title="skill.title"
      :src="skill.src"
      :alt="skill.alt"
      :class="'skill'"
    />
  </Card>
</template>

<style>
.skill:not(:first-child) {
  margin-top: 2em;
}
</style>
