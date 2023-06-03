interface Props {
  text: string
}

export default function MainHeader (props: Props) {
  return (
    <div className="max-w-[800px] m-5 ml-3">
      <h1 {...props} className="text-2xl font-bold">{props.text}</h1>
    </div>
  )
}