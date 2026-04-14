const SkillBar = ({ name, level }) => {
  return (
    <div className="w-full">
      <label htmlFor={`${name}-bar`}>{name}</label>
      <div id={`${name}-bar`} className="w-full h-[10px] bg-gray-300 p-px">
        <div
          className="skill-level animate-on-scroll"
          style={{ '--skill-width': `${level || 0}%` }}
        ></div>
      </div>
    </div>
  )
}

export default SkillBar
