export interface Student {
    id: string;
    name: string;
    age: number;
    gender: "Nam" | "Nữ";
    birthday?: string;
    hometown?: string;
    address?: string;
  }
  
  // Định nghĩa Action rõ ràng hơn
  export type Action =
    | { type: "ADD_STUDENT"; payload: Student }
    | { type: "UPDATE_STUDENT"; payload: Student }
    | { type: "DELETE_STUDENT"; payload: { id: string } };
  