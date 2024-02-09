import { create } from 'zustand';

interface UseModalZustandStore {
  isOpen: boolean;
  content: React.ReactNode | null;
  open: (content: React.ReactNode) => void;
  close: () => void;
}

const useModalZustandStore = create<UseModalZustandStore>((set) => ({
  isOpen: false,
  content: null,
  open: (content) => set((state) => ({ ...state, isOpen: true, content })),
  close: () => set((state) => ({ ...state, isOpen: false })),
}));

export default useModalZustandStore;
