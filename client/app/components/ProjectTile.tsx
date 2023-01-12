import { Link } from "@remix-run/react";
import ProgressBar from "./ProgressBar";

export default function ProjectTile(
  { month, projectName, progress, bg, text, description, next }:
  { month: string, projectName?: string, progress?: number, bg?: string, text?: string, description?: string, next?: boolean }
) {
  return (
    <Link 
      to={`/projects/${projectName?.toLowerCase()}`} 
      className={`flex flex-row gap-10 shrink-0 snap-always snap-center rounded-2xl ${(progress ? `${bg} text-white` : text)} ${next ? ' border-dashed border-gray-400 border-4' : ''} items-center p-10`}
    >
      <div className="flex text-center align-center w-1/4">
        {month}
      </div>
      <span className="flex flex-col font-['Bely_Display'] text-2xl w-full h-full">
        {projectName}
        <div className={`${(progress ? `text-white` : `text-gray-400`)} font-['Bely'] text-base`}>
          {description || "This is the project description."}
        </div>
      </span>
      <div className={`${(progress ? '' : 'opacity-0')} grow w-full`}>
        <ProgressBar progress={progress || 0} />
      </div>
    </Link>
  )
}
