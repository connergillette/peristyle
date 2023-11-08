export default function LightListItem({ superheader, header, description, context }) {
  return (
    <div className="flex max-lg:flex-col gap-10 max-lg:gap-1 whitespace-nowrap max-lg:whitespace-normal">
      <div className="flex flex-col">
        <span className="opacity-70">{superheader}</span>
        <span className="font-bold">{header}</span>
      </div>
      <span className="opacity-70 mt-auto text-center max-lg:text-left">{description}</span>
      <span className="opacity-70 mt-auto italic text-right max-lg:text-left w-full">{context}</span>
    </div>
  )
}