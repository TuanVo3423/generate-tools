import { create } from 'zustand';

interface IGlobalLoading {
  toggle: string;
  toggleLoading: (data: string) => void;
  closeLoading: () => void;
}

export const useGlobalLoading = create<IGlobalLoading>((set) => ({
  toggle: '',
  toggleLoading: (data) => set(() => ({ toggle: data })),
  closeLoading: () => set(() => ({ toggle: '' })),
}));
