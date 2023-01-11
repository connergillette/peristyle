import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css"
import logo from './assets/logo.png'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
]

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Peristyle",
  viewport: "width=device-width,initial-scale=1",
});


export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="stylesheet" href="https://use.typekit.net/fcx3qmb.css" />
      </head>
      <body style={{ fontFamily: "Bely, system-ui, serif" }}>
        <a href="/">
          <img src={logo} alt="Peristyle logo" className="h-20 w-20 absolute ml-8 mt-5" />
        </a>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
