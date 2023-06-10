import { themeColors } from '~/colors'
import type { ThemeColor } from '~/colors'
import Pill from './Pill'
import { useState } from 'react'

interface Props {
  alt?: string,
  src?: string,
  caption?: string,
  color?: ThemeColor,
  borderOnHover?: boolean,
}

export default function ImageBlock ({ src, alt, color, caption, borderOnHover }: Props) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`
        self-right rounded-lg aspect-square border-solid object-cover overflow-hidden \
        ${ src ? '' : 'bg-blue-100'} ${color ? color.border : themeColors.GRAY.border} \
        ${borderOnHover ? ' border-4 border-solid border-gray-100 border-opacity-0 hover:border-opacity-100 transition' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      { src && <img src={src} alt={alt} className="w-full h-full aspect-square object-cover hover:scale-105 transition" />}
      { caption && (
        <div className={`relative ${isHovered ? 'opacity-100' : 'opacity-0'} transition`}>
          <div className="absolute bottom-2 right-2">
            <Pill text={caption} />
          </div>
        </div> 
      )}
    </div>
  )
}