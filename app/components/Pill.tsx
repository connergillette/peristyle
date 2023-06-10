interface Props {
  text: string,
  contrast?: boolean,
  isButton?: boolean
}

export default function Pill ({ text, contrast, isButton }: Props) {
  return (
    <div className={`rounded-lg py-1 px-3 ${isButton ? 'text-md font-bold' : 'text-sm'} uppercase h-min w-min whitespace-nowrap ${contrast ? 'bg-white' : 'bg-gray-50'}`}>{text}</div>
  )
}