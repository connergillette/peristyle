import type { V2_MetaFunction } from "@remix-run/node";
import { themeColors } from '~/colors'
import ImageGrid from '~/components/ImageGrid'
import ListItem from '~/components/ListItem'
import SectionHeader from '~/components/SectionHeader'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Conner Gillette" },
    { name: "description", content: "Full-stack software engineer with experience in ecommerce and web scraping." },
  ]
}

export default function Index() {
  return (
    <div className="flex flex-col gap-10 max-w-[800px] mb-10">
      <div className="grid grid-flow-row grid-cols-2 max-xl:grid-cols-1 gap-10">
        <div className="flex flex-col gap-4 mx-auto px-5">
          <SectionHeader title="Professional" />
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ListItem>
        </div>
        <div className="flex flex-col gap-4 mx-auto px-5">
          <SectionHeader title="Side Projects" />
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ListItem>
        </div>
        <div className="flex flex-col gap-4 mx-auto px-5">
          <SectionHeader title="Hobbies" />
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ListItem>
        </div>
        <ImageGrid />
      </div>
    </div>
  )
}
