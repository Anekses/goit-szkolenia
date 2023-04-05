import { useMemo } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom"

export const ProductsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    
    // const name = searchParams.get('name');
    // const maxAge = Number(searchParams.get('maxAge'));
    // const color = searchParams.get('color');
    // const maxPrice = searchParams.get('maxPrice');

    const handleNameChange = event => {
        const value = event.target.value;

        setSearchParams({
            ...params,
            name: value
        })
    }

    const params = useMemo(
        () => Object.fromEntries([...searchParams]),
        [searchParams]
    )

    const {maxAge, color, maxPrice} = params;
    const name = params?.name || location?.state?.previousSearch

    return (
        <>
            <h4>I'm Product</h4>
            <p>Name: {name}</p>
            <p>MaxAge: {maxAge}</p>
            <p>Color: {color}</p>
            <p>MaxPrice: {maxPrice}</p>

            <input type="text" value={name} onChange={handleNameChange} />

            <p>
                <Link to="/products/abc-123" state={{ from: location, previousSearch: name }}>
                    Navigate to product number abc-123
                </Link>
            </p>
        </>
    )
}