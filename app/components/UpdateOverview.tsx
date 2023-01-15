import { Link } from "@remix-run/react";

export default function UpdateOverview ({ update, slug }: { update: object, slug: string }) {
  return (
    <Link to={slug}>
      <div className="flex flex-row">
        <div className="pr-3 pt-1">
          <div className="h-16 w-16 border-solid border-2 border-gray-400 rounded-md ">
            <img className="h-full w-full object-cover rounded-md" src={update.main_image_url} alt={update.title} />
          </div>
        </div>
        <div>
          <h4 className="font-['bely']">{new Date(update.created_at).toLocaleDateString()}</h4>
          <h3>{update.title}</h3>
          <p className="font-['bely'] text-gray-400">
            {update.body.split('.')[0]}
          </p>
        </div>
      </div>
    </Link>
  )
}
