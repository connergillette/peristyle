interface Props {
  text: string
}

export default function MainHeader (props: Props) {
  return (
    <h1 {...props} className="text-2xl font-bold">{props.text}</h1>
  )
}