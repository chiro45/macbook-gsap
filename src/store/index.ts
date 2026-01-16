import { create } from "zustand";

type IUseMacbookStore = {
  color: string;
  scale: number;
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
};

export const useMacbookStore = create<IUseMacbookStore>((set) => ({
  color: "#2e2e2e",
  setColor: (color: string) => set({ color }),
  scale: 0.08,
  setScale: (scale: number) => set({ scale }),
}));
