import { create } from "zustand";

// File filter types for BlockRoll
export interface FileFilters {
  fileType?: string; // e.g., "image", "document", "video", etc.
  accessType?: "public" | "private"; // File access level
  dateFrom?: string; // ISO date string
  dateTo?: string; // ISO date string
  searchQuery?: string; // Search by filename or description
  sharedWith?: string; // Filter by wallet address
  tag?: string; // Filter by tag
}

interface FilterInputState {
  filters: FileFilters;
  updateFilters: (newFilter: Partial<FileFilters>) => void;
  resetFilters: () => void;
}

export const useFilterInputStore = create<FilterInputState>((set) => ({
  filters: {},
  updateFilters: (newFilter) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilter },
    })),
  resetFilters: () => set({ filters: {} }),
}));
