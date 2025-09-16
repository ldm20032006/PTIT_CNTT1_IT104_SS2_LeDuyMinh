import React, {Component} from "react";
import Children from "./Children";

type StateTypes = {
    isShow: boolean;
}

export default class ParentComponents extends Component<object, StateTypes> {
    constructor(props: object){
        super(props);
        // Định nghĩa State
        this.state = {
            isShow: false,
        };
    }
    render() {
        const handleToggle = () => {
            this.setState ({
                isShow: !this.state.isShow
            }) 
        }
        return(
            <div>
                <h2>ParentComponent</h2>
                <button onClick={handleToggle}>Show</button>
                {
                    
                }
            </div>
        )
        
    }
}