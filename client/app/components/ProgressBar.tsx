
export default function ProgressBar ({ progress }: { progress: number }) {
  return (
    <>
      {(progress || 0) < 100 && (
        <div className="flex flex-row">
          <div className="flex h-[12px] bg-white opacity-70 rounded-lg m-3 w-full pl-0.5 pr-0.5">
            <div className="bg-green-400 h-[8px] rounded-lg p-0 m-0 self-center" style={{width: `${progress}%`}}></div>
          </div>
          <div className="flex grow my-1 mr-3 justify-end">{progress}%</div>
        </div>
      )}
      {progress === 100 && <div className="my-1 text-green-400 text-center font-bold w-full">Complete!</div>}
    </>
  )
}
