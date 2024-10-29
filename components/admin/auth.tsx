'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function AdminAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("wsc_admin") === "true";
    if (!isAuthenticated) {
      router.push("/admin");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  return children;
}