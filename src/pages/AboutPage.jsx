import { Link, Outlet } from "react-router-dom"

export const AboutPage = () => {
    return (
        <>
            <h2>Lorem Ipsum, AboutPage</h2>
            <ul>
                <li>
                    <Link to="mission">Read about missions</Link>
                </li>
                <li>
                    <Link to="team">Meet our Team!</Link>
                </li>
                <li>
                    <Link to="reviews">See what people think!</Link>
                </li>
                <li>
                    <Link to="/products">Again Products</Link>
                </li>
            </ul>
            <Outlet />
        </>
    )
}