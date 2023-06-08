interface Props {
  text: string,
}

export default function Pill ({ text }: Props) {
  return (
    <div className="rounded-lg border-solid border-2 border-gray-300 bg-white py-1 px-2 text-sm uppercase h-min w-min whitespace-nowrap opacity-60">{text}</div>
  )
}