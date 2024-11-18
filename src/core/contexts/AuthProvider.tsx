import { create } from "zustand";

type AuthState = {
  token: string | null;
  setToken: (token: string | null) => void;
};

export const useAuthProvider = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}));
