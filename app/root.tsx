import { cssBundleHref } from "@remix-run/css-bundle"
import type { LinksFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

import styles from "./tailwind.css"
import MainHeader from './components/MainHeader'
import LandingPage from './components/LandingPage'

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'},
  { rel: 'stylesheet', href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-800 text-gray-100">
        <LandingPage />
        {/* <div className="flex flex-col gap-5 font-['Cabin'] mx-auto max-w-[1000px]">
          <MainHeader text="Conner Gillette" />
          <Outlet />
        </div> */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
