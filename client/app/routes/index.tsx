import ProjectTile from "~/components/ProjectTile";

export default function Index() {
  return (
    <div className="container mx-auto w-screen">
      <div className="flex flex-col h-screen items-center content-center justify-center align-center gap-10 w-full" style={{ fontFamily: "Bely, system-ui, sans-serif" }}>
        <div className="flex flex-row w-full justify-center gap-3">
          <ProjectTile month="JAN" color="bg-[#495993]" projectName="PERISTYLE" progress={30} />
          <ProjectTile month="FEB" color="bg-[#6E81C7]" projectName="???" />
          <ProjectTile month="MAR" color="bg-[#98AAEC]" projectName="???" />
          <ProjectTile month="APR" color="bg-[#73AFAF]" projectName="???" />
          <ProjectTile month="MAY" color="bg-[#3F9292]" projectName="???" />
          <ProjectTile month="JUN" color="bg-[#139072]" projectName="???" />
        </div>
        <div className="flex flex-col align-center align-middle justify-center text-center h-96">
          <h1 className="font-['Bely_Display'] text-[120px] text-center">2023</h1>
          <h2 className="font-['Bely_Display'] text-center text-2xl">Project-A-Month</h2>
        </div>
        <div className="flex flex-row w-full justify-center gap-3">
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
