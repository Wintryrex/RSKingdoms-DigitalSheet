import { beforeEach, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { useCharacterStore } from '@/stores/characterStore'
import WoundsList from '@/components/health/WoundsList.vue'
import { nextTick } from 'vue'

let characterStore: ReturnType<typeof useCharacterStore>

beforeEach(() => {
  setActivePinia(createPinia())
  characterStore = useCharacterStore()
})

it('renders an amount of health points', () => {
  const healthAmount = 3
  characterStore.healthPoints = healthAmount

  const wrapper = mount(WoundsList)
  const healthIcons = wrapper.findAll('svg')

  expect(healthIcons.length).toBe(healthAmount)
})

it('renders a wound', async () => {
  characterStore.healthPoints = 3

  const wrapper = mount(WoundsList)
  await wrapper.find('path').trigger('click')
  await nextTick()

  const wound = wrapper.find('.wounded')

  expect(wound.exists()).toBe(true)
})
