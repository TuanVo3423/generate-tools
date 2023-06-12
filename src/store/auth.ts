import { ResponseWithPagination } from './../api/commonTypes';
import { create } from 'zustand';

type TData = {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
};

interface IAuth {
  profile: ResponseWithPagination<TData> | null;
  setProfile: (data: ResponseWithPagination<TData>) => void;
  clearProfile: () => void;
}

export const useAuth = create<IAuth>((set) => ({
  profile: null,
  setProfile: (data) => set(() => ({ profile: data })),
  clearProfile: () => set(() => ({ profile: null })),
}));
