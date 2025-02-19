import { create, StateCreator } from "zustand";

type MemberState = {
  openDrawer: boolean;
  openImportDrawer: boolean;
  file: any;
};

type MemberActions = {
  setOpenDrawer: (value: boolean) => void;
  setImportDrawer: (value: boolean) => void;
  setFile: (value: any) => void;
};

const memberSlice: StateCreator<MemberState & MemberActions> = (set) => ({
  openDrawer: false,
  setOpenDrawer: (value) => set({ openDrawer: value }),

  openImportDrawer: false,
  setImportDrawer: (value) => set({ openImportDrawer: value }),

  file: null,
  setFile: (file) => set({ file }),
});

export const useMemberStore = create<MemberState & MemberActions>(memberSlice);
