import Pill from './Pill'

interface Props {
  title: string,
  date?: string
}

export default function SectionHeader ({ title, date }: Props) {
  return (
    <div className="flex border-b-[1px] border-b-solid border-b-gray-200 pb-2">
      <div className="uppercase py-1 px-2 font-bold grow">{title}</div>
      {
        date && <Pill text={date} />
      }
    </div>
  )
}