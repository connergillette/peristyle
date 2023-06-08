interface Props {
  text: string
}

export default function Status ({ text }: Props) {
  return (
    <div className="rounded-full bg-slate-100 w-min px-4 py-1 whitespace-nowrap uppercase text-center text-xs">
      {text}
    </div>
  )
}