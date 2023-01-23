import { ActionArgs, redirect } from "@remix-run/node"
import { getProjectById, updateProjectUpdateById } from "~/models/projects.server"

export async function action ({ request }: ActionArgs) {
  const body = await request.formData()
  const response = await updateProjectUpdateById(body)
  if (response.error) {
    console.error(response.error)
  }
  return redirect(response.redirect)
}
