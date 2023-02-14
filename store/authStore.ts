import create from "zustand";
import axios from "axios";
import { persist } from 'zustand/middleware';

const authStore = (set: any) => {
  return ({ userProfile: null, addUser: (user: any) => set({ userProfile: user }), removeUser: () => set({ userProfile: null }) })
}

const useAuthStore = create(
  persist(authStore, {
    name: 'auth',
  })
)

export default useAuthStore;
