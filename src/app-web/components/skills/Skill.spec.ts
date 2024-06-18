import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Skill from '../skills/Skill.vue'

it('Should display a Skill with the specified icon source', () => {
  const skillName = 'Attack'
  const imagePath = '/img/attack.svg'
  const alternativeImageText = 'An icon of the skill Attack '

  const wrapper = mount(Skill, {
    props: {
      title: skillName,
      src: imagePath,
      alt: alternativeImageText
    }
  })

  const imageTag = wrapper.find('img').element

  expect(wrapper.text()).toContain(skillName)
  expect(imageTag.src).toContain(imagePath)
  expect(imageTag.alt).toBe(alternativeImageText)
})
