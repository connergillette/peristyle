import { Link } from "@remix-run/react";
import type { Update } from "~/models/projects.server";

export default function UpdateOverview ({ update, slug }: { update: Update, slug: string }) {
  return (
    <Link to={slug} data-gktag="gk-01-02">
      <div className="flex flex-row rounded-md">
        <div className="pr-3 pt-1">
          <div className="h-16 w-16">
            <img className="h-full w-full object-cover border-solid border-2 border-gray-400 rounded-md" src={update.main_image_url} alt={update.title} />
          </div>
        </div>
        <div>
          <h4 className="font-['bely']">{new Date(update.created_at).toLocaleDateString()}</h4>
          <h3>{update.title}</h3>
          <p className="font-['bely'] text-gray-400">
            {update.preview_line}
          </p>
        </div>
      </div>
    </Link>
  )
}
