import peristyle from '../../assets/peristyle.png'
import type { LoaderArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { Link, useLoaderData, useLocation } from "@remix-run/react"
import { useEffect, useState } from "react";
import ProgressBar from "~/components/ProgressBar";
import UpdateOverview from "~/components/UpdateOverview";
import { getProjectBySlug, getUpdatesByProject, Update } from "~/models/projects.server";

const md = require('markdown-it')('commonmark')


export const loader = async ({ params }: LoaderArgs) => {
  return json({ name: params.name, project: await getProjectBySlug(params.name) || {}, updates: (await getUpdatesByProject(params.name)) || [] })
};

export default function ProjectName () {
  const { name, project, updates } = useLoaderData<typeof loader>()

  return (
    <div className={`text-white transition duration-500 bg-[#495993] h-full`}>
      <div className="flex flex-col container w-10/12 mx-auto pb-10 pt-5 h-full min-h-screen">
        <div className="flex flex-row h-min mb-5">
          <div className="w-min">
            <h1 className="font-['bely-display'] text-[100px] z-10">{project.name}</h1>
            <div className="mt-[-35px]">
              <ProgressBar progress={project.progress} />
            </div>
          </div>
          <div className="flex grow items-center h-30 m-10 text-stone-300 text-3xl">
            {project.description}
          </div>
        </div>
        <div className="flex flex-row h-full overflow-hidden text-black mb-5 gap-5">
          <div className="flex flex-col w-full rounded-md text-white items-center">
            <Link to="/">
              <img src={peristyle} alt="Peristyle home page" className="w-full h-auto rounded-md" />
            </Link>
            <article className="p-5 pt-10 prose-lg prose-invert w-full" dangerouslySetInnerHTML={{__html: md.render(project.details)}}/>
            <div className="flex items-center justify-center flex-row text-xl gap-14 text-center mt-12 font-['bely-display']">
              {
                project.tech_items.split(',').map(techItem => <div key={techItem.trim()}>{techItem.trim()}</div>)
              }
            </div>
          </div>
          <div className="flex flex-col font-['bely-display'] bg-white rounded-md w-[700px] p-5 h-min max-h-screen">
            <h2 className="text-2xl mb-3">Updates</h2>
            <div className="flex flex-col grow gap-3 overflow-y-scroll scroll-smooth w-full h-min">
              {
                updates.map((update: Update) => update && <UpdateOverview key={update.id} slug={`/projects/${name}/${update.slug}`} update={update} /> )
              }
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
