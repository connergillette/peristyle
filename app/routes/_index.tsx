import type { V2_MetaFunction } from "@remix-run/node";
import { PostgrestError } from '@supabase/postgrest-js'
import { useLoaderData } from 'react-router'
import { themeColors } from '~/colors'
import ActivitySection from '~/components/ActivitySection'
import ImageGrid from '~/components/ImageGrid'
import ListItem from '~/components/ListItem'
import SectionHeader from '~/components/SectionHeader'

import { supabase } from '~/supabase'

interface ActivityEvents {
  [key: string]: Event[]
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Conner Gillette" },
    { name: "description", content: "Full-stack software engineer with experience in ecommerce and web scraping." },
  ]
}

export async function loader () {
  const eventsResponse = await supabase.from('events').select()
  let events : any = {}
  if (eventsResponse.error) {
    console.error(eventsResponse.error)
    return { error: eventsResponse.error }
  } else {
    for (const event of eventsResponse.data) {
      if (events[event.activity_type]) {
        events[event.activity_type].push(event)
      } else {
        events[event.activity_type] = [event]
      }
    }
  }

  const imagesResponse = await supabase.from('images').select()
  let images : any = {}
  if (imagesResponse.error) {
    console.error(imagesResponse.error)
    return { error: imagesResponse.error }
  } else {
    images = imagesResponse.data
  }

  return { events, images }
}

export default function Index() {
  const { events, images } = useLoaderData()

  return (
    <div className="flex flex-col gap-10 mb-10">
      <div className="grid grid-flow-row grid-cols-2 max-md:grid-cols-1 gap-10">
        {
          events && Object.keys(events).map((activity) => (
            <ActivitySection activity={activity} events={events[activity]} key={activity} />
          ))
        }
        {
          !events && <span className="text-center font-bold text-red-400">Something went wrong loading these items. Sorry!</span>
        }
        {
          images && <ImageGrid images={images} />
        }
        {
          !images && <span className="text-center font-bold text-red-400">Something went wrong loading these images. Sorry!</span>
        }
      </div>
    </div>
  )
}
