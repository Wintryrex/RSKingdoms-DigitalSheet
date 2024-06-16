<script setup lang="ts">
import Skill from './Skill.vue'
import Card from '../common/Card.vue'
</script>

<template>
  <Card title="Skills">
    <Skill :class="'skill'" title="Attack" src="/attack.svg" alt="Attack Skill"></Skill>
    <Skill :class="'skill'" title="Ranged" src="/range.svg" alt="Range Skill"></Skill>
    <Skill :class="'skill'" title="Magic" src="/magic.svg" alt="Magic Skill"></Skill>
    <Skill :class="'skill'" title="Defence" src="/defense.svg" alt="Defence Skill"></Skill>
    <Skill :class="'skill'" title="Thieving" src="/thieving.svg" alt="Thieving Skill"></Skill>
    <Skill :class="'skill'" title="Gathering" src="/gathering.svg" alt="Gathering Skill"></Skill>
    <Skill :class="'skill'" title="Crafting" src="/crafting.svg" alt="Crafting Skill"></Skill>
    <Skill :class="'skill'" title="Cooking" src="/cooking.svg" alt="Cooking Skill"></Skill>
  </Card>
</template>

<style>
.skill:not(:first-child) {
  margin-top: 2em;
}
</style>
