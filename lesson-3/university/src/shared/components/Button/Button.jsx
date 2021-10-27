import PropTypes from "prop-types";

import "./Button.css";

const Button = ({text})=> {
    return <button className="btn">{text}</button>
}

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired
}