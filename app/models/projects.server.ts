import { supabase } from "~/entry.server";

export async function getAllProjects() {
  return await supabase.from('projects').select().order('id', { ascending: true })
}

export async function getUpdatesByProject(projectName: string) {

  const project = (await getProjectBySlug(projectName))
  return await supabase.from('updates').select().eq('project_id', project.id)
}

async function getProjectBySlug(name: string) {
  return (await supabase.from('projects').select().eq('slug', name)).data[0]
}