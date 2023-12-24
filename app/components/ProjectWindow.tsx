import Pill from './Pill'

interface Props {
  name: string,
  description: string,
  link: string,
  image: string,
}

export default function ProjectWindow({ name, description, link, image }: Props) {
  return (
    <a href={link} className="max-h-24 min-w-48 w-full bg-green-400 rounded-md overflow-hidden relative border-2 border-solid border-gray-300" target="_blank" rel="noreferrer">
      <img src={image} alt={description} className="hover:opacity-80 transition-opacity" />
      <div className="absolute bottom-2 right-2">
        <Pill text={name} />
      </div>
    </a>
  )
}