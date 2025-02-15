import { create, StateCreator } from "zustand";

type MemberState = {
  openDrawer: boolean;
  openImportDrawer: boolean;
};

type MemberActions = {
  setOpenDrawer: (value: boolean) => void;
  setImportDrawer: (value: boolean) => void;
};

const memberSlice: StateCreator<MemberState & MemberActions> = (set) => ({
  openDrawer: false,
  setOpenDrawer: (value) => set({ openDrawer: value }),

  openImportDrawer: false,
  setImportDrawer: (value) => set({ openImportDrawer: value }),
});

export const useMemberStore = create<MemberState & MemberActions>(memberSlice);
