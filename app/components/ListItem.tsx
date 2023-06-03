import Pill from './Pill'
import { themeColors } from '~/colors'
import type { ThemeColor } from '~/colors'
import ImageBlock from './ImageBlock'

interface Props {
  children?: string,
  color?: ThemeColor
}

export default function ListItem ({ children, color }: Props) {

  return (
    <div className={`flex flex-col gap-4 w-full rounded-lg p-2 ${color ? `${color.border} ${color.bg} border-solid border-2` : ``}`}>
      <div className="flex border-b-2 border-b-solid border-b-gray-200 pb-2">
        <Pill text={'06/01/2023'} />
        <div className="uppercase py-1 px-2 font-bold grow">Title of item</div>
        <div className="mr-1 opacity-50">
          Secondary
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-3/4 mt-2">
          {children}
        </div>
        <ImageBlock 
          src="https://media.licdn.com/dms/image/D5635AQEUr6E1M5kJOA/profile-framedphoto-shrink_400_400/0/1671171070141?e=1686301200&v=beta&t=Qt7TjIBotCHFPGixDrU1nuKozIqTmtm0dqsceQp8GyU" 
          alt="Man with dark hair and glasses"
          color={color}
        />
      </div>
    </div>
  )
}