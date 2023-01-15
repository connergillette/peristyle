import type { LoaderArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { Link, useLoaderData, useLocation } from "@remix-run/react"
import { useEffect, useState } from "react";
import ProgressBar from "~/components/ProgressBar";
import UpdateOverview from "~/components/UpdateOverview";
import { getUpdatesByProject } from "~/models/projects.server";

import peristyle from '../../assets/peristyle.png'

export const loader = async ({ params }: LoaderArgs) => {
  console.log(params)
  return json({ name: params.name, updates: (await getUpdatesByProject(params.name)).data || [] })
};

export default function ProjectName () {
  const { name, updates } = useLoaderData<typeof loader>()
  
  return (
    <div className={`text-white transition duration-500 bg-[#495993] h-full`}>
      <div className="flex flex-col container w-10/12 mx-auto pb-10 pt-5 h-full min-h-screen">
        <div className="flex flex-row h-min mb-5">
          <div className="w-min">
            <h1 className="font-['bely-display'] text-[100px] z-10">Peristyle</h1>
            <div className="mt-[-35px]">
              <ProgressBar progress={80} />
            </div>
          </div>
          <div className="flex grow items-center h-30 m-10 text-stone-300 text-3xl">
            A nice, clean showcase site. You're looking at it right now, in fact.
          </div>
        </div>
        <div className="flex flex-row h-full overflow-hidden text-black mb-5 gap-5">
          <div className="flex flex-col w-full rounded-md text-white">
            <Link to="/">
              <img src={peristyle} alt="Peristyle home page" className="w-full h-auto rounded-md" />
            </Link>
            <h2 className="text-2xl font-bold mt-5">
              Acceptance criteria
            </h2>
            <ul className="list-disc list-inside text-xl">
              <li className="list-item">List 12 projects, each with its own detail page</li>
              <li className="list-item">Have blog functionality for each individual project</li>
              <li className="list-item">Make modifying project details easy</li>
              <li className="list-item">Build with Remix and Supabase</li>
            </ul>
            <h2 className="text-2xl font-bold mt-5">
              Premise
            </h2>
            <p className="text-xl">
              This is my first of 12 projects in 2023, and serves as a showcase site for the future 11 and a much-needed personal portfolio site.
            </p>
            <p className="text-xl mt-5">
              In addition to being a nice place to show off projects and serve as a mini-blog, I wanted to highlight more of the
              process of each project with the inclusion of progress bars and project status.
            </p>
            <p className="text-xl mt-5">
              A stretch goal for this project is to also include basic CMS-like features, which includes authentication, page creation / editing, etc.
              Supabase will make some of things easier, but this will be more involved than the simple static site.
            </p>
            <div className="flex items-center justify-center flex-row text-xl gap-14 text-center mt-12 font-['bely-display']">
              <div>TypeScript</div>
              <div>React</div>
              <div>Tailwind</div>
              <div>Remix</div>
              <div>Supabase</div>
            </div>
          </div>
          <div className="flex flex-col font-['bely-display'] bg-white rounded-md w-[700px] p-5 h-min max-h-screen">
            <h2 className="text-2xl mb-3">Updates</h2>
            <div className="flex flex-col grow gap-3 overflow-y-scroll scroll-smooth w-full h-min">
              {
                updates.map((update: object) => <UpdateOverview key={update.id} slug={`/projects/${name}/${update.slug}`} update={update} /> )
              }
                {/* <UpdateOverview slug={`/projects/${name}/update-1`} />
                <UpdateOverview slug={`/projects/${name}/update-2`} />
                <UpdateOverview slug={`/projects/${name}/update-3`} />
                <UpdateOverview slug={`/projects/${name}/update-4`} />
                <UpdateOverview slug={`/projects/${name}/update-5`} /> */}
            </div>
            <div className="h-32 mt-[-64px] block bottom-0 bg-gradient-to-t from-white to-transparent"></div>
            {/* TODO: Potentially unused */}
            {/* <div className="flex justify-center align-center">
              <button className="button bg-[#495993] text-white w-min p-2 mt-2 rounded-md">More</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
