import type { LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import logo from "~/assets/logo-bw.png"
import { getUpdateBySlug } from '~/models/projects.server'

const md = require('markdown-it')('commonmark')

export const loader = async ({ params }: LoaderArgs) => {
  const {name, slug} = params
  return json({ update: (await getUpdateBySlug(params.name, params.slug)), name, slug })
}

export default function Update () {
  const { name: projectName, update, slug } = useLoaderData<typeof loader>()

  return (
    <div className="text-white bg-[#495993] h-full min-h-screen overflow-hidden">
      <div className="bg-white bg-opacity-10 w-screen p-20 pb-10">
        <div className="container text-center w-full mx-auto">
          <h4 className="text-lg">{new Date(update.created_at).toLocaleDateString()}</h4>
          <h1 className="w-fulltext-center text-[80pt] font-['bely'] leading-snug max-xl:text-[36pt] max-xl:font-bold">{update.title}</h1>
          <h2 className="font-['bely']">{update.preview_line}</h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center container mx-auto h-min">
          <a href={update.main_image_url} target="_blank" rel="noreferrer">
            <div className="flex w-full items-center justify-center pt-10">
              <img src={update.main_image_url} className="flex items-center align-center w-8/12 rounded-2xl object-contain max-h-[100vh]" alt={update.title} />
            </div>
          </a>
        <div className="container mx-auto text-2xl flex flex-col items-center gap-8 leading-relaxedm p-10">
          <article className="w-10/12 prose-lg prose-invert" dangerouslySetInnerHTML={{__html: md.render(update.body)}}>
            
          </article>
        </div>
        <div>
          <img src={logo} alt="Peristyle logo" className="h-16 w-16 m-12" />
        </div>
      </div>
    </div>
  )
}