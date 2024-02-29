export default function LightListItem({ superheader, header, description, context }) {
  return (
    <div className="flex max-lg:flex-col gap-10 max-lg:gap-1 whitespace-nowrap max-lg:whitespace-normal">
      <div className="flex flex-col w-full">
        <span className="text-gray-400">{superheader}</span>
        <span className="font-bold">{header}</span>
      </div>
      <span className="text-gray-400 mt-auto text-left max-lg:text-left w-full">{description}</span>
      <span className="text-gray-200 mt-auto italic text-right max-lg:text-left w-full">{context}</span>
    </div>
  )
}