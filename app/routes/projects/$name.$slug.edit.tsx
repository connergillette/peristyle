import { json, LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import ProgressBar from "~/components/ProgressBar";
import { getProjectBySlug, getUpdateBySlug } from "~/models/projects.server";

export const loader = async({ params }: LoaderArgs) => {
  return json({ project: (await getProjectBySlug(params.name || '')), update: (await getUpdateBySlug(params.name || '', params.slug || '')) })
}

export default function EditUpdate () {
  const { project, update } = useLoaderData<typeof loader>()

  return (
    <div className={`w-full h-full text-white min-h-screen`} style={{backgroundColor: project?.theme_color}}>
      <div className="container mx-auto">
        <div className="pt-20 pb-10">
          <h3 className="">EDITING</h3>
          <h1 className="text-[70px] leading-[70px]">{update?.title}</h1>
        </div>

        <form method="post" action={`/projects/updates/edit`} className="flex flex-col gap-5">
          <label className="flex flex-col w-1/2 rounded-md">
            <span>ID</span>
            <input name="id" className="text-black p-2 rounded-md" defaultValue={update?.id} contentEditable={false}/>
          </label>
          <label className="flex flex-col w-1/2">
            <span>Title</span>
            <input name="title" className="text-black p-2 rounded-md" defaultValue={update?.title} />
          </label>
          <label className="flex flex-col w-1/2">
            <span>Preview line</span>
            <input name="preview_line" className="text-black p-2 rounded-md" defaultValue={update?.preview_line} />
          </label>
          <label className="flex flex-col w-1/2">
            <span>Slug</span>
            <input name="slug" className="text-black p-2 rounded-md"  defaultValue={update?.slug} />
          </label>          
          <label className="flex flex-col">
            <span>Body (Markdown)</span>
            <textarea name="body" className="text-black p-2 h-56 rounded-md" defaultValue={update?.body} />
          </label>
          <label className="flex flex-col">
            <span>Main image URL</span>
            <input name="main_image_url" className="text-black p-2 rounded-md" defaultValue={update?.main_image_url}  />
          </label>
          <label className="flex flex-col">
            <span>Project ID</span>
            <input name="project_id" className="text-black p-2 rounded-md" defaultValue={update?.project_id}  />
          </label>

          <label className="flex flex-col">
            <span>Service key</span>
            <input name="service_key" className="text-black p-2 bg-yellow-500 rounded-md" />
          </label>

          <button className="rounded-md bg-white bg-opacity-30 px-5 py-3 mb-10 w-max">Save</button>
        </form>
      </div>
    </div>
  )
}
