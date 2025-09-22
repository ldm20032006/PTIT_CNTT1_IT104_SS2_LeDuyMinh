import type { Student } from "../../../utils/types";

type AddStudentAction = {
  type: "ADD_STUDENT";
  payload: Student;
};

type UpdateStudentAction = {
  type: "UPDATE_STUDENT";
  payload: Student;
};

type DeleteStudentAction = {
  type: "DELETE_STUDENT";
  payload: { id: string };
};

type Action = AddStudentAction | UpdateStudentAction | DeleteStudentAction;

const initialState: Student[] = [
  {
    id: "ST001",
    name: "Nguyễn Nhật Minh",
    age: 19,
    gender: "Nam",
    birthday: "28/03/2006",
    hometown: "Hà Nội",
    address: "Thượng Phúc, Hà Nội",
  },
  {
    id: "ST002",
    name: "Lê Phương Linh",
    age: 19,
    gender: "Nữ",
    birthday: "17/05/2006",
    hometown: "Hà Nội",
    address: "Thượng Phúc, Hà Nội",
  },
  {
    id: "ST003",
    name: "Lê Duy Minh",
    age: 19,
    gender: "Nam",
    birthday: "20/03/2006",
    hometown: "Hà Nội",
    address: "Thượng Phúc, Hà Nội",
  },
];

export const reducerStudent = (
  state: Student[] = initialState,
  action: Action
): Student[] => {
  switch (action.type) {
    case "ADD_STUDENT": {
      const newStudent = action.payload;
      if (!newStudent || !newStudent.id) return state;
      const exists = state.some((s) => s.id === newStudent.id);
      if (exists) return state;
      return [...state, newStudent];
    }
    case "UPDATE_STUDENT": {
      const updated = action.payload;
      if (!updated || !updated.id) return state;
      return state.map((s) => (s.id === updated.id ? updated : s));
    }
    case "DELETE_STUDENT": {
      const toDelete = action.payload;
      if (!toDelete || !toDelete.id) return state;
      return state.filter((s) => s.id !== toDelete.id);
    }
    default:
      return state;
  }
};
