// reducer bản chất là những cái hàm, mục của hàm để tính toán trả state mới dựa vào action
const initialState = {
    count: 0,
    status: true,
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const reducerCounter: any = (state = initialState, action: any) => {
    switch (action.type) {
      case "INCREMENT":
        console.log("thực hiện tăng count");
        state.count = state.count + 1;
        return {...state};    
  
      default:
        return state;
    }
  };