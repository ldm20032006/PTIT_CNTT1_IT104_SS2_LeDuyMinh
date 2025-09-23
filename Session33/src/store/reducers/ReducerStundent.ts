<<<<<<< HEAD
interface User {
  id: number;
  name: string;
}

interface StudentsState {
  users: User[];
}

// Định nghĩa Action cụ thể thay vì any
type Action =
  | { type: "ADD"; payload: User }
  | { type: "EDIT"; payload: User }
  | { type: "DELETE"; payload: { id: number } };

  const initialState: StudentsState = {
    users: [
      { id: 1, name: "Quach Bach" },
      { id: 2, name: "Phuong Linh" },
      { id: 3, name: "Nhat Minh" },
    ],
  };
  
  export const reducerStudents = (
    state: StudentsState = initialState,
    action: Action
  ): StudentsState => {
    switch (action.type) {
      case "ADD":
        return { ...state, users: [...state.users, action.payload] };
      case "EDIT":
        return {
          ...state,
          users: state.users.map((u) =>
            u.id === action.payload.id ? action.payload : u
          ),
        };
      case "DELETE":
        return {
          ...state,
          users: state.users.filter((u) => u.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
=======
interface User {
    id: number;
    name: string;
  }
  
  interface StudentsState {
    users: User[];
  }
  
  interface Action {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
  }
  
  const initialState: StudentsState = {
    users: [
      { id: 1, name: "Quach Bach" },
      { id: 2, name: "Phuong Linh" },
      { id: 3, name: "Nhat Minh" },
    ],
  };
  
  export const reducerStudents = (
    state: StudentsState = initialState,
    action: Action
  ): StudentsState => {
    switch (action.type) {
      case "ADD":
        return state;
      case "EDIT":
        return state;
      case "DELETE":
        return state;
      default:
        return state;
    }
  };
>>>>>>> 9ff6c1a591451acca643a6e60899e7d056a54a8c
  