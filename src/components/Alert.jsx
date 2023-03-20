import clsx from "clsx";
import styles from "./Alert.module.css"
import styled from 'styled-components';
import { Component } from "react";

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

// export const Alert = ({ variant, outlined, elevated, children }) => {

//     return (
//         <AlertStyled className={
//             clsx(
//                 styles[variant],
//                 outlined && styles['is-outlined'],
//                 elevated && styles['is-elevated']
//             )
//         }>
//             {children}
//         </AlertStyled>
//     )
// }

class Alert extends Component {
    constructor() {
        super()
        console.log('Alert constructor!')
    }

    componentWillUnmount() {
        console.log(this.props)
        console.log('Alert unmount')
    }

    render() {
        return (
            <div>
                Is true!
            </div>
        )
    }
}

export default Alert