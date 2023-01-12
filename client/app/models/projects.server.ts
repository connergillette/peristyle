import { supabase } from "~/entry.server";


export async function getAllProjects() {
  return await supabase.from('projects').select()
}