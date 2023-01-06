import type { LoaderArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import ProgressBar from "~/components/ProgressBar";

export const loader = async ({ params }: LoaderArgs) => {
  return json({ name: params.name });
};

export default function ProjectName () {
  const { name } = useLoaderData<typeof loader>();

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
        <div className="flex flex-row gap-5 h-full mb-10 text-black">
          <div className="flex flex-col items-center justify-center bg-white w-full rounded-md">
            {/* SCREENSHOT / EMBED */}
          </div>
          <div className="flex flex-col font-['Bely_Display'] bg-white rounded-md w-[700px] p-5">
            <h2>Updates</h2>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
