import { Component, type ReactNode } from "react";

interface State {
  name: string;
}

class Bai1 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "Lê Duy Minh", 
    };
  }

  render(): ReactNode {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Xin chào ReactJS </h1>
        {/* Truy cập và hiển thị state */}
        <p>Tôi là: <strong>{this.state.name}</strong></p>
      </div>
    );
  }
}

export default Bai1;
