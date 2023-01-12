import { useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import ProjectTile from "~/components/ProjectTile";

export default function Index() {
  // const [backgroundColor, setBackgroundColor] = useState('#495993')

  // const location = useLocation()

  // useEffect(() => {
  //   setTimeout(() => setBackgroundColor('white'), 0)
  // }, [location])


  return (
    <div className={`w-screen h-screen transition-colors duration-1000`}>
      <div className={`container mx-auto flex flex-row h-screen`}>
        <div className="flex flex-col items-center align-center align-middle mt-[30vh] text-center font-['Bely_Display'] h-full">
          <h1 className="text-[250px] leading-[250px] text-center">2023</h1>
          <h2 className="text-center text-2xl">Project-A-Month</h2>
          <h3 className="font-['Bely'] mt-3 text-lg">Conner Gillette</h3>
        </div>
        <div className="flex flex-col h-screen items-center content-center justify-center align-center gap-10 w-6/12 ml-auto max-h-screen">
          <div className="flex flex-col w-full gap-3 overflow-y-scroll h-screen snap-y snap-mandatory pt-[30vh] pb-[30vh] max-h-screen">
            <ProjectTile month="JAN" color="bg-[#495993]" projectName="PERISTYLE" progress={80} />
            <ProjectTile month="FEB" color="bg-[#6E81C7]" projectName="TYMORRAH" next />
            <ProjectTile month="MAR" color="bg-[#98AAEC]" projectName="LINA" />
            <ProjectTile month="APR" color="bg-[#73AFAF]" projectName="RYLAI" />
            <ProjectTile month="MAY" color="bg-[#3F9292]" projectName="APPARITION" />
            <ProjectTile month="JUN" color="bg-[#139072]" projectName="TEMPLAR" />
            <ProjectTile month="JUL" color="bg-[#D7B849]" projectName="???" />
            <ProjectTile month="AUG" color="bg-[#D79E49]" projectName="???" />
            <ProjectTile month="SEP" color="bg-[#D77C49]" projectName="???" />
            <ProjectTile month="OCT" color="bg-[#962F0E]" projectName="???" />
            <ProjectTile month="NOV" color="bg-[#EB859D]" projectName="???" />
            <ProjectTile month="DEC" color="bg-[#B490FF]" projectName="???" />
          </div>
          <div className="h-96 w-full fixed bottom-0 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
