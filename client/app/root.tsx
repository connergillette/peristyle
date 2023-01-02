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
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
