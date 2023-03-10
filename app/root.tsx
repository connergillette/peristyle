import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";
import styles from "./tailwind.css"
import logo from './assets/logo-bw.png'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: 'https://use.typekit.net/fcx3qmb.css'}
]

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Peristyle",
  author: "Conner Gillette",
  description: "A site designed to showcase my personal projects that I plan to ship each month of 2023. A site by Conner Gillette.",
  keywords: "conner, gillette, showcase, software, engineer, web, dev, 2023, seattle",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body style={{ fontFamily: "Bely, system-ui, serif" }}>
        <Link to="/">
          <img data-gktag="gk-01-03" src={logo} alt="Peristyle logo" className={`transition duration-400 h-16 w-16 max-xl:w-12 max-xl:h-12 fixed ml-8 mt-5 max-xl:ml-4 max-xl:mt-2 z-20 hover:scale-110 drop-shadow-xl`} />
        </Link>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
