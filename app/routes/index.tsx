import { json } from "@remix-run/node";
import { Link, useLoaderData, useLocation } from "@remix-run/react";
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
    <div className={`w-screen h-screen container mx-auto max-xl:overflow-y-hidden`}>
      <div className={`mx-auto h-screen flex flex-col`}>
        <div className={`flex transition ${transitionProgress ? 'opacity-100' : 'opacity-0'} fixed duration-1000 ease-in-out mt-[30vh] max-xl:mt-[5vh] text-center font-['bely-display'] h-full max-xl:w-full`}>
          <div className="max-xl:mx-auto max-xl:w-full ml-auto z-30">
            <h1 className={`text-[200px] leading-[200px] max-xl:text-[75px] max-xl:leading-[75px] text-center`}>2023</h1>
            <h2 className="text-center text-2xl">Project-A-Month</h2>
            <div className="flex w-full align-center justify-center">
              <Link to="/about" className="flex text-center mt-3 align-center justify-center w-auto max-w-[200px]">
                <div className="flex text-center hover:text-white hover:drop-shadow-md hover:border-none hover:bg-teal-400 bg-opacity-30 hover:bg-opacity-100 px-5 py-3 transition hover:scale-105 rounded-md align-center justify-center w-full">
                  <h3 className="font-['bely'] text-2xl" data-gktag="gk-02-01">Conner Gillette</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative max-xl:top-56 max-xl:overflow-x-hidden h-full max-xl:h-max w-[700px] self-end max-xl:min-w-0 max-xl:w-full">
          <div className="flex h-24 w-full fixed bg-gradient-to-t from-transparent to-[#fffcf5] pointer-events-none top-0 max-xl:top-56 z-20"></div>
          <div className="flex flex-col max-xl:w-full gap-10 ml-auto max-xl:mx-auto h-max max-w-[700px] pt-[20vh] max-xl:pt-[100px] pb-[40%] max-xl:pb-[100%] p-5 overflow-x-hidden overflow-y-hidden z-10">
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
            <div className="h-24 w-full fixed bottom-0 bg-gradient-to-t from-[#fffcf5] to-transparent pointer-events-none z-20"></div>
          </div>
        </div>
      </div>
  );
}
