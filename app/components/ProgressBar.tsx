import { useLocation, useNavigate } from "@remix-run/react"
import { useEffect, useState } from "react"

export default function ProgressBar ({ progress }: { progress: number }) {
  const [transitionProgress, setTransitionProgress] = useState(0)

  const location = useLocation()

  useEffect(() => {
    setTransitionProgress(progress)
  }, [progress, location])

  return (
    <>
      {(progress || 0) < 100 && (
        <div className="flex flex-row">
          <div className="flex h-[12px] bg-white opacity-70 rounded-lg m-3 w-full pl-0.5 pr-0.5 max-xl:h-[8px]">
            <div 
              className={`transition bg-green-400 h-[8px] max-xl:h-[6px] rounded-lg p-0 m-0 self-center`} 
              style={{width: `${transitionProgress}%`, transition: 'width', transitionDuration: `${ progress * 10 }ms`}}
            ></div>
          </div>
          <div className="flex grow my-1 mr-3 justify-end">{progress}%</div>
        </div>
      )}
      {progress === 100 && <div className="my-1 text-green-400 text-center font-bold w-full">Complete!</div>}
    </>
  )
}
