import { themeColors } from '~/colors'
import ListItem from './ListItem'
import type { Event } from './ListItem'
import SectionHeader from './SectionHeader'

interface Props {
  activity: string,
  events: Event[]
}

export default function ActivitySection ({ activity, events }: Props) {
  return (
    <div className="flex flex-col gap-4 mx-auto px-5 max-w-full w-full">
      <SectionHeader title={activity} />
      {
        events.map((event, index) => (
          <ListItem event={event} pills={event.pill_contents} key={event.id} isFirst={index === 0} color={index === 0 ? themeColors.GRAY : null} compact>
            <div className="grow">
              {event.body}
            </div>
          </ListItem>
        ))
      }
    </div>
  )
}
