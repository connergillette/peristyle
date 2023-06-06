import Pill from './Pill'

interface Props {
  text: string
}

export default function MainHeader (props: Props) {
  return (
    <div className="flex m-5 grow gap-4">
      <div className="flex flex-col grow">
        <a href="/">
          <h1 {...props} className="text-2xl font-bold">{props.text}</h1>
        </a>
        <h2 className="text-xl italic opacity-40 max-xl:text-base">Full-stack software engineer based in Redmond, WA, USA.</h2>
      </div>
      <a href="https://linkedin.com/in/connergillette"><Pill text="LinkedIn" /></a>
      <a href="https://github.com/connergillette"><Pill text="GitHub" /></a>
    </div>
  )
}