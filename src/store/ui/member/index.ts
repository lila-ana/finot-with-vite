import { create, StateCreator } from "zustand";

type MemberState = {
  openDrawer: boolean;
  openImportDrawer: boolean;
  file: any;

  current: number;
  pageSize: number;
};

type MemberActions = {
  setOpenDrawer: (value: boolean) => void;
  setImportDrawer: (value: boolean) => void;
  setFile: (value: any) => void;
  setCurrent: (current: number) => void;
  setPageSize: (pageSize: number) => void;
};

const memberSlice: StateCreator<MemberState & MemberActions> = (set) => ({
  openDrawer: false,
  setOpenDrawer: (value) => set({ openDrawer: value }),

  openImportDrawer: false,
  setImportDrawer: (value) => set({ openImportDrawer: value }),

  file: null,
  setFile: (file) => set({ file }),

  current: 1,
  pageSize: 8,
  setCurrent: (value: number) => set({ current: value }),
  setPageSize: (value: number) => set({ pageSize: value }),
});

export const useMemberStore = create<MemberState & MemberActions>(memberSlice);
