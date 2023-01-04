export default function ProjectTile({ month, projectName, progress, color, next }: { month: string, projectName?: string, progress?: number, color?: string, next?: boolean }) {

  return (
    <div className={`flex flex-col text-center w-1/6 shrink-0 rounded-md ${color} text-white ${next ? ' border-dashed border-black border-4' : ''}`}>
      <div>
        {month}
      </div>
      <div className="flex grow items-center justify-center font-['Bely_Display'] text-2xl w-full">
        {projectName}
      </div>
      <div className={"flex flex-row w-full self-end align-center " + (progress ? '' : ' opacity-0')}>
        {(progress || 0) < 100 && (
          <>
            <div className="flex h-[12px] bg-white rounded-lg m-3 w-full pl-0.5 pr-0.5">
              <div className="bg-green-400 h-[8px] rounded-lg p-0 m-0 self-center" style={{width: `${progress}%`}}></div>
            </div>
            <div className="flex grow my-1 mr-3 justify-end">{progress}%</div>
          </>
        )}
        {progress === 100 && <div className="my-1 text-green-400 text-center font-bold w-full">Complete!</div>}
      </div>
    </div>
  )
}
