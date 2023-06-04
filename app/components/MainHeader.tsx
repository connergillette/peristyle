interface Props {
  text: string
}

export default function MainHeader (props: Props) {
  return (
    <div className="max-w-[800px] m-5 ml-3">
      <a href="/">
        <h1 {...props} className="text-2xl font-bold">{props.text}</h1>
      </a>
      <h2 className="text-xl italic  opacity-40">Full-stack software engineer based in Redmond, WA, USA.</h2>
    </div>
  )
}