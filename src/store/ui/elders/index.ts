import { create, StateCreator } from "zustand";
import { Elder } from "./interface";

type ElderState = {
  openDrawer: boolean;
  selectedElderId: string;
  currentPage: number;
  pageSize: number;
  currentElder: Elder | null;
};

type ElderActions = {
  setOpenDrawer: (value: boolean) => void;
  setSelectedElderId: (value: string) => void;
  setCurrentPage: (value: number) => void;
  setPageSize: (value: number) => void;
};

const memberSlice: StateCreator<ElderState & ElderActions> = (set) => ({
  openDrawer: false,
  setOpenDrawer: (value) => set({ openDrawer: value }),

  selectedElderId: "",
  setSelectedElderId: (value) => set({ selectedElderId: value }),

  currentPage: 1,
  setCurrentPage: (valueType) => set({ currentPage: valueType }),

  pageSize: 10,
  setPageSize: (valueType) => set({ pageSize: valueType }),

  currentElder: null,
});

export const useElderStore = create<ElderState & ElderActions>(memberSlice);
