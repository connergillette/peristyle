import { createClient } from "@supabase/supabase-js";
import { supabase } from "~/entry.server";
const dotenv = require('dotenv')
dotenv.config()

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

export async function getProjectById(id: string) {
  const response = await supabase.from('projects').select().eq('id', id)
  if (!response.error) {
    return response.data[0]
  }
  return null
}

export async function getUpdatesByProject(projectName: string) {
  const project = (await getProjectBySlug(projectName))
  if (project) {
    const response = await supabase.from('updates').select().eq('project_id', project.id).order('id', { ascending: false })
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

export async function updateProjectById(formData: FormData) {
  const providedServiceKey = formData.get('service_key')
  if (providedServiceKey !== process.env.SUPABASE_SERVICE_KEY) {
    return 'bad'
  }

  const supabase = createClient(process.env.SUPABASE_URL || '', formData.get('service_key') || '')

  const response = await supabase.from('projects').update({
    name: formData.get('name'),
    slug: formData.get('slug'),
    label: formData.get('label'),
    description: formData.get('description'),
    progress: formData.get('progress'),
    is_next: formData.get('is_next'),
    theme_color: formData.get('theme_color'),
    details: formData.get('details'),
    tech_items: formData.get('tech_items'),
  }).eq('id', formData.get('id'))

  if (!response.error) {
    console.log('success!')
  }
  console.log(response.error)
}

export async function updateProjectUpdateById(formData: FormData) {
  const providedServiceKey = formData.get('service_key')
  if (providedServiceKey !== process.env.SUPABASE_SERVICE_KEY) {
    return 'bad'
  }

  const supabase = createClient(process.env.SUPABASE_URL || '', formData.get('service_key') || '')

  const response = await supabase.from('updates').update({
    title: formData.get('title'),
    slug: formData.get('slug'),
    preview_line: formData.get('preview_line'),
    body: formData.get('body'),
    main_image_url: formData.get('main_image_url'),
    project_id: formData.get('project_id'),
  }).eq('id', formData.get('id'))

  if (formData.get('project_id')) {
    const projectSlug = (await getProjectById(formData.get('project_id') || ''))?.slug

    if (!response.error) {
      return { error: null, redirect: `/projects/${projectSlug}/${formData.get('slug')}` }
    }
  }
  return { error: response.error }
}

export async function createProjectUpdate(formData: FormData) {
  const providedServiceKey = formData.get('service_key')
  if (providedServiceKey !== process.env.SUPABASE_SERVICE_KEY) {
    return 'bad'
  }

  const supabase = createClient(process.env.SUPABASE_URL || '', formData.get('service_key') || '')

  const response = await supabase.from('updates').insert({
    title: formData.get('title'),
    slug: formData.get('slug'),
    preview_line: formData.get('preview_line'),
    body: formData.get('body'),
    main_image_url: formData.get('main_image_url'),
    project_id: formData.get('project_id'),
  }).eq('id', formData.get('id'))

  if (formData.get('project_id')) {
    const projectSlug = (await getProjectById(formData.get('project_id') || ''))?.slug

    if (!response.error) {
      return { error: null, redirect: `/projects/${projectSlug}/${formData.get('slug')}` }
    }
  }
  return { error: response.error }
}
