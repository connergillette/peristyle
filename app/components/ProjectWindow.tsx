import Pill from './Pill'

interface Props {
  name: string,
  description: string,
  link: string,
  image: string,
}

export default function ProjectWindow({ name, description, link, image }: Props) {
  return (
    <a href={link} className="max-h-24 min-w-48 w-full bg-green-400 rounded-md overflow-hidden relative outline outline-white/20" target="_blank" rel="noreferrer">
      <img src={image} alt={description} className="hover:opacity-80 transition-opacity" />
      <div className="absolute top-2 left-2">
        <Pill text={name} />
      </div>
    </a>
  )
}