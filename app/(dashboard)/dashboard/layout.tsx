"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/app/lib/auth";

export default function DashboardLayout({ children }: any) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">SaaS App</aside>
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
