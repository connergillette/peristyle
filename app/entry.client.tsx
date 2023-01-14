import { RemixBrowser } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";
import { startTransition, StrictMode, createContext } from "react";
import { hydrateRoot } from "react-dom/client";
import {supabase, SupabaseProvider} from './contexts/SupabaseContext'

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
