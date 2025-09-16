import React, { Component } from "react";

type State = {
  isLoggedIn: boolean;
};

export default class LoginStatus extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoggedIn: false, // mặc định chưa đăng nhập
    };
  }

  // Hàm toggle trạng thái đăng nhập
  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>
          {isLoggedIn ? "Xin chào, User!" : "Vui lòng đăng nhập để tiếp tục."}
        </h2>
        <button
          onClick={this.toggleLogin}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: isLoggedIn ? "#e74c3c" : "#2ecc71",
            color: "#fff",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}
