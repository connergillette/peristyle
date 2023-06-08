import Pill from './Pill'
import { themeColors } from '~/colors'
import type { ThemeColor } from '~/colors'
import ImageBlock from './ImageBlock'
import Status from './Status'

export interface Event {
  id: number,
  created_at: Date,
  date_content: string,
  name: string,
  image_url?: string,
  body: string,
  pill_contents: string[],
  activity_type: string,
}

interface Props {
  event: Event,
  children?: any,
  color?: ThemeColor,
  pills?: string[],
  dateContent?: string,
  compact?: boolean,
  isFirst?: boolean
}

export default function ListItem ({ event, children, color, pills, dateContent, compact, isFirst }: Props) {
  return (
    <a href={`/${event.id}`}>
      {
        !compact && (
          <div className={`flex flex-col gap-2 min-h-[170px] w-full max-w-full rounded-lg p-2 ${color ? `${color.border} ${color.bg} border-solid border-2` : ``}`}>
            <div className="flex">
              <div className="uppercase py-1 font-bold grow">{event.name}</div>
              <Pill text={event.date_content} />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-3/4 gap-4 grow opacity-60">
                {children}
              </div>
              <div className="w-24 h-24">
                <ImageBlock 
                  src={event.image_url}
                  alt={`${event.name} event image`}
                  color={color}
                />
              </div>
            </div>
            {pills && (
              <div className="overflow-auto no-scrollbar">
                <div className={`flex gap-2 ${pills.length >= 3 && 'hover:-translate-x-[50%] transition duration-[2000ms] ease-in-out'}`}>
                  {
                    pills.map((content, index) => <Status text={content} key={`${event.name?.replace(' ', '')}-pill${index}`} />)
                  }
                </div>
              </div>
            )}
          </div>
        )
      }
      {
        compact && (
          <div className={`flex gap-2 w-full rounded-lg p-2 ${!isFirst ? 'px-5' : ''} ${color ? `${color.border} ${color.bg} border-solid border-2` : ``}`}>
            <div className="flex flex-col w-full">
              <div className="uppercase py-1 font-bold grow">{event.name}</div>
              <div className="flex gap-2">
                <Pill text={event.date_content} />
              </div>
            </div>
            <div className="flex gap-4 grow">
              <div className="w-16 h-16">
                <ImageBlock
                  src={event.image_url}
                  alt={`${event.name} event image`}
                  color={color}
                />
              </div>
            </div>
          </div>
        )
      }
      
    </a>
  )
}