interface Props {
  text: string,
  contrast?: boolean,
  isButton?: boolean
}

export default function Pill ({ text, contrast, isButton }: Props) {
  return (
    <div className={`rounded-lg py-1 px-3 ${isButton ? 'text-md font-bold' : 'text-sm'} uppercase h-min w-min whitespace-nowrap ${contrast ? 'bg-gray-100 text-gray-800' : 'bg-gray-400'}`}>{text}</div>
  )
}