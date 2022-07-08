import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation,
  useOutlet,
} from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const outlet = useOutlet()
  const location = useLocation()
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>

        <AnimatePresence exitBeforeEnter>
          {outlet}
        </AnimatePresence>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html >
  );
}
