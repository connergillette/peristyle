import type { LoaderArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { Link, useLoaderData, useLocation } from "@remix-run/react"
import { useEffect, useState } from "react";
import ProgressBar from "~/components/ProgressBar";
import UpdateOverview from "~/components/UpdateOverview";
import { getProjectBySlug, getUpdatesByProject } from "~/models/projects.server"
import type { Update } from '~/models/projects.server'

const md = require('markdown-it')('commonmark')

export const loader = async ({ params }: LoaderArgs) => {
  return json({ name: params.name, project: await getProjectBySlug(params.name) || {}, updates: (await getUpdatesByProject(params.name)) || [] })
};

export default function ProjectName () {
  const { name, project, updates } = useLoaderData<typeof loader>()

  return (
    <div className={`text-white transition duration-500 h-full`} style={{backgroundColor: project.theme_color}}>
      <div className="flex flex-col container w-10/12 mx-auto pb-10 pt-16 h-full min-h-screen">
        <div className="flex max-xl:flex-col h-min mb-5">
          <div className="w-min">
            <h1 className="font-['bely-display'] text-[100px] max-xl:text-[50px] z-10 drop-shadow-xl">{project.name}</h1>
            <div className="mt-[-35px] max-xl:mt-[-20px]">
              <ProgressBar progress={project?.progress} />
            </div>
          </div>
          <div className="flex grow items-center h-30 m-10 max-xl:m-0 text-stone-300 text-3xl max-xl:text-xl">
            {project?.description || "Coming soon"}
          </div>
        </div>
        {
          !project.details && (
            <div className="flex w-full h-full content-center items-center align-center justify-center mt-[10%] max-xl:mt-[20%]">
              <h2 className="flex text-center text-[42px] max-xl:text-2xl opacity-50">Coming soon.</h2>
            </div>
          )
        }
        {
          project.details && (
            <div className="flex h-full text-[#333333] mb-5 gap-5">
              <div className="flex flex-col w-full rounded-md">
                <div className="flex flex-row max-xl:flex-col gap-5 justify-center">
                  {
                    project?.image_url && (
                      <Link to="/" className="w-8/12 max-xl:w-full">
                        {
                          <img src={project?.image_url} alt={`${project.name} home screen`} className="w-full h-auto rounded-md" />
                        }
                      </Link>
                    )
                  }
                    
                  <div className="flex flex-col font-['bely-display'] relative bg-white rounded-md max-xl:w-full w-4/12 min-h-[400px]">
                    <div className="p-5">
                      <h2 className="text-2xl mb-3">Updates</h2>
                      <div className="flex flex-col grow gap-3 scroll-smooth w-full h-full overflow-y-auto rounded-md max-h-[400px] pb-[100px]">
                        {
                          updates.map((update: Update) => update && <UpdateOverview key={update.id} slug={`/projects/${name}/${update.slug}`} update={update} /> )
                        }
                        {
                          updates.map((update: Update) => update && <UpdateOverview key={update.id} slug={`/projects/${name}/${update.slug}`} update={update} /> )
                        }
                        {
                          updates.map((update: Update) => update && <UpdateOverview key={update.id} slug={`/projects/${name}/${update.slug}`} update={update} /> )
                        }
                      </div>
                    </div>
                    {/* TODO: Potentially unused */}
                    {/* <div className="flex justify-center align-center">
                      <button className="button bg-[#495993] text-white w-min p-2 mt-2 rounded-md">More</button>
                    </div> */}
                    <div className="h-32 w-full absolute bottom-0 bg-gradient-to-t from-white to-transparent select-none pointer-events-none rounded-md"></div>
                  </div>
                </div>
                <div className="text-white w-8/12 max-xl:w-full">
                  { project.details && 
                    <article className="p-5 pt-10 prose-lg prose-invert" dangerouslySetInnerHTML={{__html: md.render(project.details)}}/>
                  }
                  <div className="flex flex-row text-xl gap-x-1 gap-y-3 align-center mt-12 font-['bely-display'] p-5 w-full flex-wrap justify-evenly">
                    {
                      project.tech_items && project.tech_items.split(',').map(techItem => <div key={techItem.trim()} className="flex rounded-md bg-white bg-opacity-30 px-5 py-3 transition hover:scale-105">{techItem.trim()}</div>)
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
