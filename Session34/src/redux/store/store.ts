<<<<<<< HEAD
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
=======
import { createStore } from "redux";
import { rootReducer } from "./reducer/rootReducer";
import type { Student } from "../../utils/types";

const STORAGE_KEY = "students";

const loadPreloadedState = (): { student: Student[] } | undefined => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return undefined;
        const parsed = JSON.parse(raw) as Student[];
        if (!Array.isArray(parsed)) return undefined;
        return { student: parsed };
    } catch {
        return undefined;
    }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const store = createStore(rootReducer, loadPreloadedState() as any);

store.subscribe(() => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const state = store.getState() as any;
        const students: Student[] = state?.student ?? [];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
    } catch {
        // ignore
    }
});

export type RootState = ReturnType<typeof rootReducer>;
>>>>>>> 9ff6c1a591451acca643a6e60899e7d056a54a8c
