interface Props {
  text: string,
  contrast?: boolean,
  isButton?: boolean,
  bgColor?: string
}

export default function Pill ({ text, contrast, isButton, bgColor }: Props) {
  // const outlineColor = `outline outline-${bgColor}`
  // const textColor = `text-${bgColor}`

  // const styles = outlineColor + ' ' + textColor

  return (
    <div className={`rounded-lg py-1 px-3 ${isButton ? 'text-md font-bold' : 'text-sm'} uppercase h-min w-min whitespace-nowrap ${contrast ? 'bg-gray-100 text-gray-800' : (bgColor ? 'outline outline-1' : 'bg-green-400 text-gray-800 font-bold')}`}>{text}</div>
  )
}