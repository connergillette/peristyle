import { supabase } from "~/entry.server";

export type Project = {
  id: number,
  created_at: Date,
  description: string,
  details: string,
  is_next: boolean,
  label: string,
  name: string,
  progress: number, // between 0 and 100, inclusive
  slug: string,
  theme_color: string,
  tech_items: string,
}

export type Update = {
  id: number,
  created_at: Date,
  title: string,
  slug: string,
  body: string,
  project_id: string,
  preview_line: string,
  main_image_url: string
}

export async function getAllProjects() {
  return await supabase.from('projects').select().order('id', { ascending: true })
}

export async function getUpdatesByProject(projectName: string) {
  const project = (await getProjectBySlug(projectName))
  if (project) {
    const response = await supabase.from('updates').select().eq('project_id', project.id)
    if (!response.error) {
      return response.data
    }
  }
  return [] // TODO: Do something smarter than this when error returned
}

export async function getUpdateBySlug(projectName: string, slug: string) {
  const project = await getProjectBySlug(projectName)
  if (project) {
    const response = await supabase.from('updates').select().eq('project_id', project.id).eq('slug', slug)
    if (!response.error) {
      return response.data[0]
    }
  }

  return null // TODO: Do something smarter than this when error returned
}

export async function getProjectBySlug(name: string) : Promise<Project | null> {
  const response = await supabase.from('projects').select().eq('slug', name)
  if (!response.error) {
    return response.data[0]
  }
  return null // TODO: Do something smarter than this when error returned
}