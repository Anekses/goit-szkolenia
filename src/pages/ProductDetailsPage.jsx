import { useParams } from "react-router-dom"

export const ProductDetailsPage = () => {
    // const useParamsOutput = useParams()
    const { productId, carpenter } = useParams()

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
        </div>
    )
}