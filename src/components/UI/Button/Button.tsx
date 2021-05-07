import React from 'react'
import classes from './Button.module.css'

type ButtonPropsType = {
    text: string
    onClick?: () => void
    disabled?: boolean
}

const Button = (props: ButtonPropsType) => {
    return (
        <button
            onClick={props.onClick}
            className={classes.button}
            disabled={props.disabled}
        >
            {props.text}
        </button>
    )
}

export default Button
