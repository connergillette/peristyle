export default function ProjectTile({ month, projectName, progress, color }: { month: string, projectName?: string, progress?: number, color?: string }) {

  return (
    <div className={`flex flex-col text-center grow shrink-0 h-32 rounded-md ${color}`}>
      <div>
        {month}
      </div>
      <div className="font-['Bely_Display'] text-2xl m-4">
        {projectName}
      </div>
      <div className="flex flex-row w-full">
        {progress && progress < 100 && (
          <>
            <div className="h-[5px] bg-green-400 rounded-md m-4" style={{width: `${progress}%`}}></div>
            <div className="flex grow my-1 mr-3 justify-end">{progress}%</div>
          </>
        )}
        {progress && progress === 100 && <div className="my-1 text-green-400 text-center font-bold w-full">Complete!</div>}
      </div>
    </div>
  )
}
