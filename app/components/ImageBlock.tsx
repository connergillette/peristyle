import { themeColors } from '~/colors'
import type { ThemeColor } from '~/colors'

interface Props {
  src: string,
  alt: string,
  color?: ThemeColor
}

export default function ImageBlock ({ src, alt, color }: Props) {
  return (
    <div className={`grow rounded-lg bg-white aspect-square w-1/4 border-solid border-2 overflow-hidden ${color ? color.border : themeColors.GRAY.border}`}>
      <img src={src} alt={alt} className="w-full h-full aspect-square object-cover" />
    </div>
  )
}