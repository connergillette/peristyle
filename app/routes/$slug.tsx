import { useLoaderData } from 'react-router'
import type { Event } from '~/components/ListItem'
import SectionHeader from '~/components/SectionHeader'
import { supabase } from '~/supabase'

export async function loader ({ params }) {
  const slug = params['slug']
  console.log(params)
  const eventResponse = await supabase.from('events').select().eq('id', slug).limit(1)

  let event : Event
  if (eventResponse.error) {
    return { error: eventResponse.error }
  } else {
    event = eventResponse.data[0]
  }
  
  return { event }
}

export default function Detail() {
  const { event, error } = useLoaderData()

  return (
    <div className="flex flex-col px-5">
      <div className="rounded-md max-h-100 mb-10 overflow-hidden flex justify-center">
        <img src={event.image_url} className="object-contain" />
      </div>
      <SectionHeader title={event.name} date={event.date_content} />
      <div className="p-2">
        {event.body}
      </div>
    </div>
  )
}
