import { create } from 'zustand';

type ThemeState = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'light',
  toggleTheme: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
  setTheme: (theme) => set({ theme }),
}));
