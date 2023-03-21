import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    username: "",
    email: "",
    userId: "",
    token: "",
  },
  setUser: (user) => set({ user }),
}));

export default useUserStore;
