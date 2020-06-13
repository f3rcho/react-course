import React from 'react'

const Button = props => {
    //destructuring
    const { text, text2 } = props;
    return(
        <div>
            {/* <button type="button">{props.text}</button> */}
            <button type="button">{text} {text2} </button>
        </div>
    )
};
export default Button
