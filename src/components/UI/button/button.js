import React from "react";
import './button.scss';

const Button = ({children, mix}) => {
    return(
        <button type='button' className={`button ${mix}`}>{children}</button>
    )
}

export default Button;