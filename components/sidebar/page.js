"use client";

import {
  Home,
  FileText,
  Briefcase,
  Users,
  MessageSquare,
  Wrench,
} from "lucide-react";

import { usePathname } from "next/navigation";
import { SidebarItem } from "/sidebar-item/.";
import { ResourceCard, ToolCard } from "@/resource-card";
import { ProgressItem } from "@/card";

export default function Dashboard() {
  const pathname = usePathname();

  return (
   
      <button
        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition ${
          active
            ? "bg-blue-50 text-blue-600 font-medium"
            : "hover:bg-gray-100 text-gray-700"
        }`}
      >
        {icon}
        {label}
      </button>
    
  );
}
