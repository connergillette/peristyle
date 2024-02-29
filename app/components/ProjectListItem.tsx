import Pill from './Pill'

interface Props {
  name: string,
  description: string,
  link: string,
  isWIP?: boolean
}

export default function ProjectListItem({ name, description, link, isWIP = false }: Props) {
  return (
    <a href={link} className="p-4 min-w-48 w-full flex max-lg:flex-col max-lg:gap-2 rounded-md overflow-hidden relative outline outline-white/20 hover:opacity-70 transition-opacity" target="_blank" rel="noreferrer">
      <div className="flex gap-2 w-[30%]">
        <Pill text={name} />
        {
          isWIP && (
            <div className="opacity-70">
              <Pill text="WIP" bgColor="amber-600" />
            </div>
          )
        }
      </div>
      <div className="flex w-full">
        <div className="opacity-70 grow pr-2">{description}</div>
      </div>
    </a>
  )
}