import type { Skill } from '../../data/siteConfig'
import SkillBar from './skill-bar'

interface SkillsProps {
  title?: string
  skills?: Skill[]
}

export default function Skills({ title = 'Skills', skills = [] }: SkillsProps) {
  return (
    <div className="w-full">
      <h1>{title}</h1>
      {skills.map(skill => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  )
}
