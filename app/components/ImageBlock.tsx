import { themeColors } from '~/colors'
import type { ThemeColor } from '~/colors'

interface Props {
  alt?: string,
  src?: string,
  color?: ThemeColor
}

export default function ImageBlock ({ src, alt, color }: Props) {
  return (
    <div className={`self-right rounded-lg aspect-square border-solid object-cover overflow-hidden ${ src ? '' : 'bg-blue-100'} ${color ? color.border : themeColors.GRAY.border}`}>
      { src && <img src={src} alt={alt} className="w-full h-full aspect-square object-cover hover:scale-105 transition" />}
    </div>
  )
}