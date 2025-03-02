import { create } from "zustand";

export interface Attendance {
  id: string;
  employee: string;
  employeeId: string;
  date: string;
  day: string;
  checkIn: string;
  inDate: string;
  checkOut: string | null;
  outDate: string | null;
  shift: string;
}

export interface MemberDataType {
  id: string;
  fullName?: string;
  profileImage?: string;
  email?: string;
  class?: string; // Added for "Class level"
  elder?: string; // Added for "Elder Name"
  date?: string;
  day?: string;
}

interface AttendanceState {
  attendances: Attendance[];
  current: number;
  pageSize: number;
  selectedAttendance: Record<string, boolean>;

  //   Setters
  validateAttendance: (id: number) => void;
  setCurrent: (current: number) => void;
  setPageSize: (pageSize: number) => void;
  setAttendance: (
    member_id: string,
    status: boolean,
    class_id: string,
    elder_id: string
  ) => void;
}

export const useAttendanceStore = create<AttendanceState>((set) => ({
  attendances: [
    {
      id: "",
      employee: "",
      employeeId: "",
      date: "",
      day: "",
      checkIn: "",
      inDate: "",
      checkOut: "",
      outDate: "",
      shift: "",
    },
  ],

  current: 1,
  pageSize: 5,
  setCurrent: (value: number) => set({ current: value }),
  setPageSize: (pageSize) => set({ pageSize }),
  validateAttendance: (id: number) =>
    set((state) => ({
      attendances: state.attendances.filter(
        (item) => item.id !== id.toString()
      ),
    })),

  selectedAttendance: {},
  setAttendance: (userId, status) =>
    set((state) => ({
      selectedAttendance: { ...state.selectedAttendance, [userId]: status },
    })),
}));
