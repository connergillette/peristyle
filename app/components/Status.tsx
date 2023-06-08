interface Props {
  text: string
}

export default function Status ({ text }: Props) {
  return (
    <div className="flex gap-2 rounded-full bg-slate-100 w-min py-1 pl-2 pr-4 whitespace-nowrap uppercase text-center text-xs align-middle self-center">
      <div className="bg-green-400 w-3 h-3 rounded-full self-center"></div>
      <div>{text}</div>
    </div>
  )
}