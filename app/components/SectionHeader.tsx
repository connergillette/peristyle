import Pill from './Pill'

interface Props {
  title: string,
  date?: string
}

export default function SectionHeader ({ title, date }: Props) {
  return (
    <div className="flex border-b-[2px] border-b-solid border-b-gray-200 border-opacity-30">
      <div className="uppercase font-bold text-xl grow">{title}</div>
      {
        date && <Pill text={date} />
      }
    </div>
  )
}