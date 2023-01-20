import { ActionArgs, redirect } from "@remix-run/node"
import { updateProjectById } from "~/models/projects.server"

export async function action ({ request }: ActionArgs) {
  const body = await request.formData()
  const error = await updateProjectById(body)
  if (error) {
    console.error(error)
  }
  return redirect(`/projects/${body.get('slug')}`)
}

export default function Edit () {
  return <div>Editing :)</div>
}
