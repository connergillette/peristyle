import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from 'react-router'
import { themeColors } from '~/colors'
import ImageGrid from '~/components/ImageGrid'
import ListItem from '~/components/ListItem'
import SectionHeader from '~/components/SectionHeader'

import { supabase } from '~/supabase'

const activities = ['professional', 'side_projects', 'hobbies']

interface Event {
  id: number,
  created_at: Date,
  data_content: string,
  name: string,
  image_url: string,
  body: string,
  pill_contents: string[],
  activity_type: string,
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Conner Gillette" },
    { name: "description", content: "Full-stack software engineer with experience in ecommerce and web scraping." },
  ]
}

export async function loader () {
  const eventsRequest = await supabase.from('events').select()
  let events : any = {}
  if (eventsRequest.error) {
    return { error: eventsRequest.error }
  } else {
    for (const event of eventsRequest.data) {
      if (event.activity_type in Object.keys(event)) {
        events[event.activity_type].push(event)
      } else {
        events[event.activity_type] = [event]
      }
    }
  }

  return { events }
}

export default function Index() {
  const { events } = useLoaderData()

  return (
    <div className="flex flex-col gap-10 mb-10">
      <div className="grid grid-flow-row grid-cols-2 max-md:grid-cols-1 gap-10">
        <div className="flex flex-col gap-4 mx-auto px-5">
          <SectionHeader title="Professional" />
          <ListItem title="Koji">
            <div className="grow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </ListItem>
          <ListItem title="Abound">
            <div className="grow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </ListItem>
          <ListItem title="G2 Web Services">
            <div className="grow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </ListItem>
        </div>
        <div className="flex flex-col gap-4 mx-auto px-5">
          <SectionHeader title="Side Projects" />
          <ListItem title="Peristyle">
            <div className="grow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </ListItem>
          <ListItem title="Eight">
          <div className="grow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </ListItem>
          <ListItem title="Lootsheet">
          <div className="grow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </ListItem>
        </div>
        <div className="flex flex-col gap-4 mx-auto px-5">
          <SectionHeader title="Hobbies" />
          <ListItem title="Hobby">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ListItem>
          <ListItem title="Hobby">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ListItem>
          <ListItem title="Hobby">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ListItem>
        </div>
        <ImageGrid />
      </div>
    </div>
  )
}
