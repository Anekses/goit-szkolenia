import PropTypes from 'prop-types';

const Product = ({ index, shouldRenderChildren, children, header = "Product Information", price = 0, name, description, buttonName = "DELETE" }) => {

    return (
        <div id={1}>
            <h2>{header}</h2>
            <h5>Name: {name}</h5>
            <div>Price: {price} zł</div>
            <p>{description}</p>
            <button type="button">{buttonName}</button>
            {shouldRenderChildren && children}
        </div>
    )
}

Product.propTypes = {
    header: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string.isRequired,
}

export default Product