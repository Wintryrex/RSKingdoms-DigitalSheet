import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillsList from '../skills/SkillsList.vue'

it('displays a list of skills', () => {
  const wrapper = mount(SkillsList, {
    global: {
      provide: {
        settings: {
          skills: [
            {
              title: 'Cooking',
              src: '/cooking.svg',
              alt: 'Cooking skill'
            },
            {
              title: 'Attack',
              src: '/attack.svg',
              alt: 'Attack skill'
            }
          ]
        }
      }
    }
  })

  const skillsImages = wrapper.findAll('img')

  expect(skillsImages.length).toEqual(2)
  expect(wrapper.text()).toContain('Attack')
  expect(wrapper.text()).toContain('Cooking')
})
