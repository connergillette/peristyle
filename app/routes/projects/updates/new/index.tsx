import { ActionArgs, redirect } from "@remix-run/node"
import { createProjectUpdate, getProjectById, updateProjectUpdateById } from "~/models/projects.server"

export async function action ({ request }: ActionArgs) {
  const body = await request.formData()
  const response = await createProjectUpdate(body)
  if (response.error) {
    console.error(response.error)
  }
  return redirect(response.redirect)
}
