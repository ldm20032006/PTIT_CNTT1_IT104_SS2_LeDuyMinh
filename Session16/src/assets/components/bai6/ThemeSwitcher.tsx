import { Component } from 'react'
import "./ThemeSwitcher.css"
type StateType = {
    isDarkMode : boolean;
}
export default class ThemeSwitched extends Component<object, StateType> {
    constructor(props:object){
        super(props);

        this.state = {
            isDarkMode: false,
        }
    }
    handleClick = () => {
        this.setState((prevState) => (
            {isDarkMode: !prevState.isDarkMode}
        ))
    }
  render() {
    return (
      <div style={{
          padding: '20px',
          backgroundColor: this.state.isDarkMode ? '#333' : '#fff',
          color: this.state.isDarkMode ? '#fff' : '#000',
          borderRadius: "5px",
          marginTop: "15px",
        }}>
        <p>{this.state.isDarkMode ? "🌙Chế độ tối đang bật" : "☀️Chế độ sáng đang bật"}</p>
        <button className='btn' onClick={this.handleClick}>Chuyen theme</button>
      </div>
    )
  }
}