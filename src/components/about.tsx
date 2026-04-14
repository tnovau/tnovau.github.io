interface AboutProps {
  title?: string
  text?: string
}

export default function About({ title = 'about', text = '' }: AboutProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}
