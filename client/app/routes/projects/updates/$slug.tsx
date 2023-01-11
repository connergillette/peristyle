import type { LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader = async ({ params }: LoaderArgs) => {
  return json({ slug: params.slug })
}

export default function Update () {
  const { slug } = useLoaderData<typeof loader>()

  return (
    <div>
      {slug}
    </div>
  )
}