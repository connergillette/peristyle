import { json } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import ProjectTile from "~/components/ProjectTile";
import { getAllProjects } from "~/models/projects.server";

export const loader = async() => {
  return json({ projects: (await getAllProjects()).data })
}

export default function Index() {
  const { projects } = useLoaderData<typeof loader>();

  const [transitionProgress, setTransitionProgress] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setTransitionProgress(true)
  }, [location])

  return (
    <div className={`w-screen h-screen container mx-auto`}>
      <div className={`mx-auto h-screen flex flex-col`}>
        <div className={`flex transition ${transitionProgress ? 'opacity-100' : 'opacity-0'} fixed duration-1000 mt-[30vh] max-xl:mt-[5vh] text-center font-['bely-display'] h-full max-xl:w-full -z-10`}>
          <div className="max-xl:mx-auto max-xl:w-full ml-auto">
            <h1 className={`text-[200px] leading-[200px] max-xl:text-[75px] max-xl:leading-[75px] text-center`}>2023</h1>
            <h2 className="text-center text-2xl">Project-A-Month</h2>
            <h3 className="font-['bely'] mt-3 text-2xl">Conner Gillette</h3>
          </div>
        </div>
        <div className="relative max-xl:top-56 max-xl:h-[700px] max-xl:overflow-hidden w-full h-full">
          <div className="flex flex-col max-xl:w-full items-center content-center justify-center align-center gap-10 ml-auto max-xl:mx-auto h-full max-xl:pt-[230%] max-w-[700px] pt-[80%] pb-[100%] max-xl:pb-[200vh] p-5 max-xl:overflow-y-scroll">
            <div className="flex h-24 w-full fixed bg-gradient-to-t from-transparent to-[#fffcf5] z-10 pointer-events-none top-0 max-xl:top-56"></div>
              {
                projects && projects.map((project) => (
                    <ProjectTile
                      key={project.id}
                      month={project.label}
                      bg={`bg-[${project.theme_color}]`}
                      text={`text-[${project.theme_color}]`}
                      projectName={project.name?.toUpperCase() || '???'}
                      description={project.description ? project.description.split('.')[0] : "Coming soon"}
                      progress={project.progress}
                      next={project.is_next}
                      theme_color={project.theme_color}
                    />
                  )
                )
              }
              {
                !projects && "Projects coming soon!"
              }
            </div>
            <div className="h-24 w-full fixed bottom-0 bg-gradient-to-t from-[#fffcf5] to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>
  );
}
