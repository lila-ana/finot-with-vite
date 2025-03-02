import {
  CalendarDays,
  LayoutDashboard,
  School,
  Settings,
  Users,
} from "lucide-react";
import { ReactNode } from "react";
import { MdElderly } from "react-icons/md";

export interface MenuItem {
  key: string;
  icon: ReactNode;
  path: string;
  label: string;
}

export const SidebarData: MenuItem[] = [
  {
    key: "landing",
    icon: <LayoutDashboard size={18} />,
    path: "landing",
    label: "Dashboard",
  },
  {
    key: "attendance",
    icon: <Users size={18} />,
    path: "attendance",
    label: "Attendance",
  },
  {
    key: "member",
    icon: <Users size={18} />,
    path: "members",
    label: "Members",
  },

  {
    key: "elder",
    icon: <MdElderly size={18} />,
    path: "elders",
    label: "Elders",
  },
  {
    key: "events",
    icon: <CalendarDays size={18} />,
    path: "events",
    label: "Events",
  },
  {
    key: "classes",
    icon: <School size={18} />,
    path: "classes",
    label: "Class",
  },
  {
    key: "settings",
    icon: <Settings size={18} />,
    path: "settings",
    label: "Settings",
  },
];
