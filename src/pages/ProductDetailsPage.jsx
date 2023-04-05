import { Link, useLocation, useParams } from "react-router-dom"

export const ProductDetailsPage = () => {
    // const useParamsOutput = useParams()
    const { productId, carpenter } = useParams()
    const location = useLocation();

    const backLinkHref = location.state?.from ?? "/products";

    // fetch(`${urlToBackend}/${productID}`)

    return (
        <div>
            I'm ProductDetailsPage!
            <p>
                My productId is: {productId}
            </p>
            <p>
                My carpenter is: {carpenter}
            </p>
            <Link to={backLinkHref}>Back to products</Link>
        </div>
    )
}