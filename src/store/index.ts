import { create } from "zustand";

type IUseMacbookStore = {
  color: string;
  scale: number;
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  texture: string;
  setTexture: (texture: string) => void;
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
  reset: () => void;
};

export const useMacbookStore = create<IUseMacbookStore>((set) => ({
  color: "#2e2e2e",
  setColor: (color: string) => set({ color }),
  scale: 0.08,
  setScale: (scale: number) => set({ scale }),

  texture: "/videos/feature-1.mp4",
  setTexture: (texture: string) => set({ texture }),

  isMobile: false,
  setIsMobile: (isMobile: boolean) => set({ isMobile }),

  reset: () =>
    set({
      color: "#2e2c2e",
      scale: 0.08,
      texture: "/videos/feature-1.mp4",
    }),
}));
