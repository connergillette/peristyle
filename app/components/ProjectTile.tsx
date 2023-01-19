import { Link } from "@remix-run/react";
import ProgressBar from "./ProgressBar";

export default function ProjectTile(
  { month, projectName, progress, bg, text, description, next, theme_color }:
  { month: string, projectName?: string, progress?: number, bg?: string, text?: string, description?: string, next?: boolean, theme_color: string }
) {

  const style = progress ? { backgroundColor: theme_color, color: 'white' } : { color: theme_color }

  return (
    <Link 
      to={`/projects/${projectName?.toLowerCase()}`} 
      className={`flex flex-row gap-10 max-xl:gap-1 shrink-0 rounded-2xl ${next ? ' border-dashed border-gray-400 border-4' : ((!progress || progress === 0) && 'border-gray-100 border-2')} items-center p-5 scale-100 hover:scale-105 transition w-full`}
      style={style}
    >
      <div className="flex text-center max-xl:text-left align-center w-1/4">
        {month}
      </div>
      <div className="flex max-xl:flex-col w-full items-center">
        <span className="flex flex-col font-['bely-display'] text-2xl w-full h-full max-xl:pl-3">
          {projectName}
          <div className={`${(progress ? `text-white` : `text-gray-400`)} font-['bely'] text-base`}>
            {description}
          </div>
        </span>
        {
          progress != null && progress > 0 && progress < 100 &&
          <div className={`${(progress ? '' : 'opacity-0')} grow w-full`}>
            <ProgressBar progress={progress || 0} />
          </div>
        }
      </div>
    </Link>
  )
}
