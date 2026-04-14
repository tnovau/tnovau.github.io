import SkillBar from './skill-bar'

export default function Skills({ title = 'Skills', skills = [] }) {
  return (
    <div className="w-full">
      <h1>{title}</h1>
      {skills.map(skill => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  )
}
