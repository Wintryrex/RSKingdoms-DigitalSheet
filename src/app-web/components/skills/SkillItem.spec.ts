import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Skill from '../skills/SkillItem.vue'

it('displays a Skill with the specified icon source', () => {
  const id = '1'
  const skillName = 'Attack'
  const imagePath = '/img/attack.svg'
  const alternativeImageText = 'An icon of the skill Attack '

  const wrapper = mount(Skill, {
    props: {
      id: id,
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
