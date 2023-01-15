import UpdateOverview from "~/components/UpdateOverview";

export default function UpdateIndex () {
  return (
    <div className="flex flex-col font-['bely-display'] bg-white rounded-md w-[700px] p-5">
      <h2 className="text-2xl mb-3">Updates</h2>
      <div className="flex flex-col gap-3">
        <UpdateOverview slug={`/${name}/update-1`} />
        <UpdateOverview slug={`/${name}/update-2`} />
        <UpdateOverview slug={`/${name}/update-3`} />
        <UpdateOverview slug={`/${name}/update-4`} />
        <UpdateOverview slug={`/${name}/update-5`} />
      </div>
      <div className="flex justify-center align-center">
        <button className="button bg-[#495993] text-white w-min p-2 mt-2 rounded-md">More</button>
      </div>
    </div>
  )
}
