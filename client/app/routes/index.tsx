import ProjectTile from "~/components/ProjectTile";

export default function Index() {
  return (
    <div className="container mx-auto w-screen h-screen">
      <div className="flex flex-col h-screen items-center content-center justify-center align-center gap-10 w-full">
        <div className="flex flex-row w-full justify-center gap-3 h-1/4 max-h-[200px]">
          <ProjectTile month="JAN" color="bg-[#495993]" projectName="PERISTYLE" progress={20} />
          <ProjectTile month="FEB" color="bg-[#6E81C7]" projectName="TYMORRAH" next />
          <ProjectTile month="MAR" color="bg-[#98AAEC]" projectName="LINA" />
          <ProjectTile month="APR" color="bg-[#73AFAF]" projectName="RYLAI" />
          <ProjectTile month="MAY" color="bg-[#3F9292]" projectName="APPARITION" />
          <ProjectTile month="JUN" color="bg-[#139072]" projectName="TEMPLAR" />
        </div>
        <div className="flex flex-col align-center align-middle justify-center text-center h-64 font-['Bely_Display']">
          <h1 className="text-[150px] leading-[150px] text-center">2023</h1>
          <h2 className="text-center text-2xl">Project-A-Month</h2>
          <h3 className="font-['Bely'] mt-3 text-lg">Conner Gillette</h3>
        </div>
        <div className="flex flex-row w-full justify-center gap-3 h-1/4 max-h-[200px]">
          <ProjectTile month="JUL" color="bg-[#D7B849]" projectName="???" />
          <ProjectTile month="AUG" color="bg-[#D79E49]" projectName="???" />
          <ProjectTile month="SEP" color="bg-[#D77C49]" projectName="???" />
          <ProjectTile month="OCT" color="bg-[#962F0E]" projectName="???" />
          <ProjectTile month="NOV" color="bg-[#EB859D]" projectName="???" />
          <ProjectTile month="DEC" color="bg-[#B490FF]" projectName="???" />
        </div>
      </div>
    </div>
  );
}
