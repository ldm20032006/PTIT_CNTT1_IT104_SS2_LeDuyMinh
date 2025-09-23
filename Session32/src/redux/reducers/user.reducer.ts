<<<<<<< HEAD
const initialState = [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      gender: "Nam",
      dateOfBirth: "20/11/2023",
      address: "Thanh Xuân, Hà Nội",
    },
    {
      id: 2,
      userName: "Nguyễn Thị B",
      gender: "Nữ",
      dateOfBirth: "20/11/2023",
      address: "Cầu Giấy, Hà Nội",
    },
  ];
  
  type ActionTypes = {
    type: string;
    payload?: unknown;
  };
  
  const userReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
=======
const initialState = [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      gender: "Nam",
      dateOfBirth: "20/11/2023",
      address: "Thanh Xuân, Hà Nội",
    },
    {
      id: 2,
      userName: "Nguyễn Thị B",
      gender: "Nữ",
      dateOfBirth: "20/11/2023",
      address: "Cầu Giấy, Hà Nội",
    },
  ];
  
  type ActionTypes = {
    type: string;
    payload?: unknown;
  };
  
  const userReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
>>>>>>> 9ff6c1a591451acca643a6e60899e7d056a54a8c
  export default userReducer;