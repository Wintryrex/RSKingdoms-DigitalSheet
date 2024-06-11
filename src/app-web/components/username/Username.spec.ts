import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Username from '../username/Username.vue'

it('renders component with right label', () => {
  const wrapper = mount(Username)
  expect(wrapper.text()).toContain('Name')
})
