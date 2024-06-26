import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CardPanel from '@/components/common/CardPanel.vue'

it('renders component with the right label', () => {
  const wrapper = mount(CardPanel, {
    props: {
      title: 'Name',
      placeholder: 'Username',
      ariaLabel: 'Username'
    }
  })
  expect(wrapper.text()).toContain('Name')
})
