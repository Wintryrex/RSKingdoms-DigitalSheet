import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '../common/Card.vue'

it('renders component with the right label', () => {
  const wrapper = mount(Card, {
    props: {
      title: 'Name',
      placeholder: 'Username',
      ariaLabel: 'Username'
    }
  })
  expect(wrapper.text()).toContain('Name')
})
