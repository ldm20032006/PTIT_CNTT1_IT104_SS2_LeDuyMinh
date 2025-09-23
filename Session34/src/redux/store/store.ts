import { createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import type { Student } from "../../utils/types";

const STORAGE_KEY = "students";

const loadPreloadedState = (): { students: Student[] } | undefined => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as Student[];
    if (!Array.isArray(parsed)) return undefined;
    return { students: parsed };
  } catch {
    return undefined;
  }
};

export const store = createStore(rootReducer, loadPreloadedState());

// lấy RootState từ rootReducer
export type RootState = ReturnType<typeof rootReducer>;

store.subscribe(() => {
  try {
    const state: RootState = store.getState();
    const students: Student[] = state.students ?? [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  } catch {
    // ignore
  }
});
