import { create } from 'zustand';

export const usePagination = create((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
