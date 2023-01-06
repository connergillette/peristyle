import ProgressBar from "./ProgressBar";

export default function ProjectTile({ month, projectName, progress, color, next }: { month: string, projectName?: string, progress?: number, color?: string, next?: boolean }) {

  return (
    <a href={`/projects/${projectName?.toLowerCase()}`} className={`flex flex-col text-center w-1/6 shrink-0 rounded-md ${color} text-white ${next ? ' border-dashed border-black border-4' : ''}`}>
      {month}
      <span className="flex grow items-center justify-center font-['Bely_Display'] text-2xl w-full">
        {projectName}
      </span>
      <div className={"flex flex-row w-full self-end align-center " + (progress ? '' : ' opacity-0')}>
        <ProgressBar progress={progress || 0} />
      </div>
    </a>
  )
}
