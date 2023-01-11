import type { LoaderArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import ProgressBar from "~/components/ProgressBar";
import UpdateOverview from "~/components/UpdateOverview";

export const loader = async ({ params }: LoaderArgs) => {
  return json({ name: params.name })
};

export default function ProjectName () {
  const { name } = useLoaderData<typeof loader>()

  return (
    <div className="w-screen h-screen text-white bg-[#495993]">
      <div className="flex flex-col container mx-auto mb-10 pt-5 h-full">
        <div className="flex flex-row h-min mb-5">
          <div className="w-min">
            <h1 className="font-['Bely_Display'] text-[100px]">Peristyle</h1>
            <div className="mt-[-35px]">
              <ProgressBar progress={40} />
            </div>
          </div>
          <div className="flex grow items-center h-30 m-10 text-stone-300 text-3xl">
            A nice, clean showcase site. You're looking at it right now, in fact.
          </div>
        </div>
        <div className="flex flex-row h-full overflow-hidden text-black mb-5 gap-5">
          <div className="flex flex-col items-center justify-center border-solid border-2 border-white w-full rounded-md">
          </div>
          <div className="flex flex-col font-['Bely_Display'] bg-white rounded-md w-[700px] p-5">
            <h2 className="text-2xl mb-3">Updates</h2>
            <div className="flex flex-col gap-3 overflow-y-scroll scroll-smooth w-full h-min">
                <UpdateOverview slug={`/${name}/update-1`} />
                <UpdateOverview slug={`/${name}/update-2`} />
                <UpdateOverview slug={`/${name}/update-3`} />
                <UpdateOverview slug={`/${name}/update-4`} />
                <UpdateOverview slug={`/${name}/update-5`} />
                <UpdateOverview slug={`/${name}/update-1`} />
                <UpdateOverview slug={`/${name}/update-2`} />
                <UpdateOverview slug={`/${name}/update-3`} />
                <UpdateOverview slug={`/${name}/update-4`} />
                <UpdateOverview slug={`/${name}/update-5`} />
                <UpdateOverview slug={`/${name}/update-1`} />
                <UpdateOverview slug={`/${name}/update-2`} />
                <UpdateOverview slug={`/${name}/update-3`} />
                <UpdateOverview slug={`/${name}/update-4`} />
                <UpdateOverview slug={`/${name}/update-5`} />
                <UpdateOverview slug={`/${name}/update-1`} />
                <UpdateOverview slug={`/${name}/update-2`} />
                <UpdateOverview slug={`/${name}/update-3`} />
                <UpdateOverview slug={`/${name}/update-4`} />
                <UpdateOverview slug={`/${name}/update-5`} />
            </div>
            <div className="h-32 mt-[-64px] block bottom-0 bg-gradient-to-t from-white to-transparent"></div>
            <div className="flex justify-center align-center">
              <button className="button bg-[#495993] text-white w-min p-2 mt-2 rounded-md">More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
