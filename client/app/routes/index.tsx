import { useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import ProjectTile from "~/components/ProjectTile";

export default function Index() {
  return (
    <div className={`w-screen h-screen transition-colors duration-1000`}>
      <div className={`container mx-auto flex flex-row h-screen`}>
        <div className="flex flex-col items-center w-[30%] fixed align-center align-middle mt-[30vh] text-center font-['Bely_Display'] h-full">
          <h1 className="text-[200px] leading-[200px] text-center">2023</h1>
          <h2 className="text-center text-2xl">Project-A-Month</h2>
          <h3 className="font-['Bely'] mt-3 text-lg">Conner Gillette</h3>
        </div>
        <div className="flex flex-col w-[60%] h-screen items-center content-center justify-center align-center gap-10 ml-auto">
          <div className="h-24 w-full fixed top-0 bg-gradient-to-t from-transparent to-white"></div>
          <div className="flex flex-col gap-3 snap-y snap-mandatory ml-auto w-10/12 pb-[400px] pt-[130%]">
            <ProjectTile month="JAN" bg="bg-[#495993]" text="text-[#495993]" projectName="PERISTYLE" progress={80} />
            <ProjectTile month="FEB" bg="bg-[#6E81C7]" text="text-[#6E81C7]" projectName="TYMORRAH" progress={20} />
            <ProjectTile month="MAR" bg="bg-[#98AAEC]" text="text-[#98AAEC]" projectName="LINA" progress={10} />
            <ProjectTile month="APR" bg="bg-[#73AFAF]" text="text-[#73AFAF]" projectName="RYLAI" progress={5} />
            <ProjectTile month="MAY" bg="bg-[#3F9292]" text="text-[#3F9292]" projectName="APPARITION" progress={2} />
            <ProjectTile month="JUN" bg="bg-[#139072]" text="text-[#139072]" projectName="TEMPLAR" next />
            <ProjectTile month="JUL" bg="bg-[#D7B849]" text="text-[#D7B849]" projectName="???" />
            <ProjectTile month="AUG" bg="bg-[#D79E49]" text="text-[#D79E49]" projectName="???" />
            <ProjectTile month="SEP" bg="bg-[#D77C49]" text="text-[#D77C49]" projectName="???" />
            <ProjectTile month="OCT" bg="bg-[#962F0E]" text="text-[#962F0E]" projectName="???" />
            <ProjectTile month="NOV" bg="bg-[#EB859D]" text="text-[#EB859D]" projectName="???" />
            <ProjectTile month="DEC" bg="bg-[#B490FF]" text="text-[#B490FF]" projectName="???" />
          </div>
          <div className="h-24 w-full fixed bottom-0 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
