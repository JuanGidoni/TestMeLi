import Product from "../../molecules/Product"
import { Link } from 'react-router-dom'

const ProductsContainer = ({ products }) => {
    return (
        <div className="row pr-0 pl-0">
            {products && products.length > 0 ? products.map(
                (v, i) => (
                    <Link to={`/product/${v.id}`} key={i} className="col-12 col-md-4 col-lg-4">
                        <Product id={v.id} title={v.title} price={v.price} original_price={v.original_price ? v.original_price : 0} shipping={v.shipping} thumbnail={v.thumbnail} />
                    </Link>
                )
            ) : 'Products not found or error in the backend.'}
        </div>
    )
}

export default ProductsContainer