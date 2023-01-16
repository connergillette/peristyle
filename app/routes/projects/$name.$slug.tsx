import type { LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import logo from "~/assets/logo-bw.png"
import { getUpdateBySlug } from '~/models/projects.server'

export const loader = async ({ params }: LoaderArgs) => {
  const {name, slug} = params
  return json({ update: (await getUpdateBySlug(params.name, params.slug)), name, slug })
}

export default function Update () {
  const { name: projectName, update, slug } = useLoaderData<typeof loader>()

  return (
    <div className="text-white bg-[#495993] h-full min-h-screen overflow-hidden">
      <div className="bg-white bg-opacity-10 w-screen p-20">
        <div className="container text-center w-full mx-auto">
          <h4 className="text-lg">JAN 10, 2023</h4>
          <h1 className="w-fulltext-center text-[80pt] font-['bely'] leading-snug">{update.title}</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center container mx-auto h-min">
        <div className="flex w-full items-center justify-center pt-10">
          <img src={update.main_image_url} className="flex items-center align-center w-8/12 rounded-md" alt={update.title} />
        </div>
        <div className="container w-8/12 mx-auto text-2xl flex flex-col gap-8 leading-relaxedm p-10">
          {update.body}
        </div>
        <div>
          <img src={logo} alt="Peristyle logo" className="h-16 w-16 m-12" />
        </div>
      </div>
    </div>
  )
}