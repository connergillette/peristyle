import type { LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import logo from "~/assets/logo-bw.png"

export const loader = async ({ params }: LoaderArgs) => {
  return json({ name: params.name, slug: params.slug })
}

export default function Update () {
  const { name, slug } = useLoaderData<typeof loader>()

  return (
    <div className="text-white bg-[#495993] h-full min-h-screen overflow-hidden">
      <div className="bg-white bg-opacity-10 w-screen p-20">
        <div className="container text-center w-full mx-auto">
          <h4 className="text-lg">JAN 10, 2023</h4>
          <h1 className="w-fulltext-center text-[80pt] font-['bely'] leading-snug">{slug}: Long Update Title That Tests Layout Limits Even Further</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center container mx-auto p-20 h-min">
        <div className="container w-8/12 mx-auto text-2xl flex flex-col gap-8 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at. Eget velit aliquet sagittis id consectetur purus ut. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Velit egestas dui id ornare arcu odio ut sem nulla. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Suspendisse ultrices gravida dictum fusce. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. In hendrerit gravida rutrum quisque non. Sagittis nisl rhoncus mattis rhoncus urna. Et tortor at risus viverra adipiscing at in tellus. Enim nulla aliquet porttitor lacus luctus. Eros donec ac odio tempor. Magna fermentum iaculis eu non diam phasellus.
          </p>
          <p>
            Sed elementum tempus egestas sed sed risus pretium quam. Tortor at auctor urna nunc id cursus metus. Tortor at risus viverra adipiscing at in tellus integer feugiat. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Est placerat in egestas erat imperdiet sed euismod. Eu turpis egestas pretium aenean pharetra magna ac. Cras tincidunt lobortis feugiat vivamus at augue. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Orci sagittis eu volutpat odio facilisis mauris. Egestas tellus rutrum tellus pellentesque eu. Dui id ornare arcu odio ut sem nulla pharetra. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Eget velit aliquet sagittis id. Arcu cursus vitae congue mauris rhoncus. Egestas diam in arcu cursus euismod quis viverra nibh. Senectus et netus et malesuada fames.
          </p>
          <p>
            Est sit amet facilisis magna etiam tempor orci eu. Condimentum lacinia quis vel eros donec ac odio tempor orci. Aenean euismod elementum nisi quis. Cras sed felis eget velit aliquet sagittis id consectetur purus. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam tempor. Dignissim enim sit amet venenatis urna cursus eget. In arcu cursus euismod quis viverra nibh cras. Libero id faucibus nisl tincidunt eget nullam non. Feugiat pretium nibh ipsum consequat nisl vel pretium. Quisque id diam vel quam elementum pulvinar etiam non. Tristique nulla aliquet enim tortor at.
          </p>
        </div>
        <div>
          <img src={logo} alt="Peristyle logo" className="h-16 w-16 m-12" />
        </div>
      </div>
    </div>
  )
}