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
  