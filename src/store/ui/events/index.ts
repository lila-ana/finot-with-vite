import { create, StateCreator } from "zustand";
import { EventFormValues } from "./interface";

type EventState = {
  openDrawer: boolean;
  selectedEventId: string;
  currentEvent: EventFormValues | null;
};

type EventActions = {
  setOpenDrawer: (value: boolean) => void;
  setSelectedEventId: (value: string) => void;
};

const memberSlice: StateCreator<EventState & EventActions> = (set) => ({
  openDrawer: false,
  setOpenDrawer: (value) => set({ openDrawer: value }),

  selectedEventId: "",
  setSelectedEventId: (value) => set({ selectedEventId: value }),

  currentEvent: null,
});

export const useEventStore = create<EventState & EventActions>(memberSlice);
