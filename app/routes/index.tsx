import { json } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
import ProjectTile from "~/components/ProjectTile";
import { getAllProjects } from "~/models/projects.server";

export const loader = async() => {
  return json({ projects: (await getAllProjects()).data })
}

export default function Index() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <div className={`w-screen h-screen transition-colors duration-1000 overflow-x-hidden`}>
      <div className={`container mx-auto flex h-screen`}>
        <div className="flex flex-col items-center fixed align-center mt-[30vh] text-center font-['Bely_Display'] h-full -z-10">
          <h1 className="text-[200px] leading-[200px] text-center">2023</h1>
          <h2 className="text-center text-2xl">Project-A-Month</h2>
          <h3 className="font-['Bely'] mt-3 text-2xl">Conner Gillette</h3>
        </div>
        <div className="flex flex-col w-[60%] h-screen items-center content-center justify-center align-center gap-10 ml-auto">
          <div className="h-24 w-full fixed top-0 bg-gradient-to-t from-transparent to-white z-10"></div>
          <div className="flex flex-col gap-3 snap-y snap-mandatory ml-auto w-10/12 pb-[400px] h-full pt-[25vh]">
            {
              projects && projects.map((project) => (
                <ProjectTile
                  key={project.id}
                  month={project.label}
                  bg={`bg-[${project.theme_color}]`}
                  text={`text-[${project.theme_color}]`}
                  projectName={project.name?.toUpperCase() || '???'}
                  progress={project.progress}
                  next={project.is_next}
                  theme_color={project.theme_color}
                />
              ))
            }
            {
              !projects && "Projects coming soon!"
            }
          </div>
          <div className="h-24 w-full fixed bottom-0 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
}
