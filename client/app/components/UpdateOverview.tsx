
export default function UpdateOverview ({ slug }: { slug: string }) {
  return (
    <a href={slug}>
      <div className="flex flex-row">
        <div className="pr-3 pt-1">
          <div className="h-16 w-16 bg-gray-400 rounded-md"></div>
        </div>
        <div>
          <h4 className="font-['Bely']">JAN 06, 2023</h4>
          <h3>Update Title</h3>
          <p className="font-['Bely'] text-gray-400">
            This is preview text for the update in question.
          </p>
        </div>
      </div>
    </a>
  )
}
