import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./ReverseButton.module.css";

// class Component {
//     constructor(obj){
//         this.props = {...obj};
//     }
// }

class ReverseButton extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {}
    // }

    static defaultProps = {
        text: "Button"
    };

    state = {
        isActive: false,
        value: "New"
    }

    handleClick = ()=> {
        this.setState(prevState => {
            // console.log(prevState);
            const {isActive} = prevState;
            return {
                isActive: !isActive
            }
        });
    }

    render(){
        console.log(this.state);
        const {text} = this.props;
        const {isActive} = this.state;
        const {handleClick} = this;
        const fullClassName = isActive ? styles.btnActive : styles.btn;
        return (
            <button 
                onClick={handleClick} 
                className={fullClassName}>{text}
            </button>
        )
    }
}

// const ReverseButton = ({text})=> {
//     const handleClick = ()=> {
//         console.log("Button click")
//     }

//     return (
//         <button 
//             onClick={handleClick} 
//             className={styles.btn}>{text}
//         </button>
//     )
// }

export default ReverseButton;

// ReverseButton.defaultProps = {
//     text: "Button"
// }

ReverseButton.propTypes = {
    text: PropTypes.string
}