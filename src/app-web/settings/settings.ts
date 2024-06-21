interface Skill {
  title: string
  src: string
  alt: string
}
export const isSettings = (obj: unknown): obj is Settings => {
  if (typeof obj === 'object' && obj !== null && 'skills' in obj) {
    const skills = (obj as Settings).skills
    return Array.isArray(skills) && skills.every(isSkill)
  }
  return false
}

const isSkill = (obj: unknown): obj is Skill => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'title' in obj &&
    typeof obj.title === 'string' &&
    'src' in obj &&
    typeof obj.src === 'string' &&
    'alt' in obj &&
    typeof obj.alt === 'string'
  )
}

export default interface Settings {
  skills: Skill[]
}
