import { json, LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import ProgressBar from "~/components/ProgressBar";
import { getProjectBySlug } from "~/models/projects.server";

export const loader = async({ params }: LoaderArgs) => {
  return json({ project: (await getProjectBySlug(params.name || '')) })
}

export default function EditProject () {
  const { project } = useLoaderData<typeof loader>()

  return (
    <div className={`w-full h-full text-white`} style={{backgroundColor: project?.theme_color}}>
      <div className="container mx-auto">
        <div className="pt-20 pb-10">
          <h3 className="">EDITING</h3>
          <h1 className="text-[70px] leading-[70px]">{project?.name}</h1>
        </div>

        <form method="post" action={`/projects/edit`} className="flex flex-col gap-5">
          <label className="flex flex-col w-1/2">
            <span>ID</span>
            <input name="id" className="text-black p-2" defaultValue={project?.id} contentEditable={false}/>
          </label>
          <label className="flex flex-col w-1/2">
            <span>Name</span>
            <input name="name" className="text-black p-2" defaultValue={project?.name} />
          </label>
          <label className="flex flex-col w-1/2">
            <span>Slug</span>
            <input name="slug" className="text-black p-2"  defaultValue={project?.slug} />
          </label>
          <label className="flex flex-col w-1/2">
            <span>Label</span>
            <input name="label" className="text-black p-2" defaultValue={project?.label} />
          </label>
          <label className="flex flex-col w-1/2">
            <span>Description</span>
            <input name="description" className="text-black p-2" defaultValue={project?.description} />
          </label>
          <label className="flex flex-col w-1/2">
            <span>Progress (%)</span>
            <input name="progress" className="text-black p-2" defaultValue={project?.progress} />
          </label>
          <label className="flex flex-col w-1/2">
            <span>Is next</span>
            <input type="checkbox" name="progress" className="text-black p-2" checked={project?.is_next} />
          </label>
          <label className="flex flex-col w-1/2">
            <span>Theme color</span>
            <input name="theme_color" className="text-black p-2" defaultValue={project?.theme_color} />
          </label>
          
          <label className="flex flex-col">
            <span>Details (Markdown)</span>
            <textarea name="details" className="text-black p-2 h-56" defaultValue={project?.details} />
          </label>

          <label className="flex flex-col">
            <span>Tech items</span>
            <input name="tech_items" className="text-black p-2" defaultValue={project?.tech_items}  />
          </label>

          <label className="flex flex-col">
            <span>Service key</span>
            <input name="service_key" className="text-black p-2 bg-yellow-500" />
          </label>

          <button className="rounded-md bg-white bg-opacity-30 px-5 py-3 mb-10 w-max">Save</button>
        </form>
      </div>
    </div>
  )
}
