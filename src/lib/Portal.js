"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // ensure we only render on the client (prevents SSR mismatches)
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // check that the target node exists (created in the root layout)
  let portalRoot = document.getElementById("portal-root");
  if (!portalRoot) {
    // fallback: create the node dynamically if missing (safe in dev)
    portalRoot = document.createElement("div");
    portalRoot.id = "portal-root";
    document.body.appendChild(portalRoot);
  }

  return createPortal(children, portalRoot);
}
