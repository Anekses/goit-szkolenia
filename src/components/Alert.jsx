import clsx from "clsx";
import styles from "./Alert.module.css"
import styled from 'styled-components';

const getBgColor = (variant) => {
    switch (variant) {
        case "info":
            return "blue";
        case "success":
            return "green";
        case "error":
            return "red";
        case "warning":
            return "orange";
        default:
            throw new Error(`Unsuported: , ${variant}`)

    }
}

const AlertStyled = styled.p`
    margin: 8px
`

export const Alert = ({ variant, outlined, elevated, children }) => {

    return (
        <AlertStyled className={
            clsx(
                styles[variant],
                outlined && styles['is-outlined'],
                elevated && styles['is-elevated']
            )
        }>
            {children}
        </AlertStyled>
    )
}

export default Alert