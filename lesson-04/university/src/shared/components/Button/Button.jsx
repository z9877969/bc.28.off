import PropTypes from "prop-types";

import { btnStyle } from "./style";

const Button = ({text})=> {
    return <button style={btnStyle}>{text}</button>
}

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired
}