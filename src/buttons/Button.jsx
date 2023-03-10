import clsx from 'clsx';

const Button = ({ variant, children }) => {
    return <button className={clsx("button", variant)}>{children}</button>
}

export default Button