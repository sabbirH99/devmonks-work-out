function ProductCard({ products }) {
    return (
        <div className="product-list">
            {
                products.map((product) => (
                    <div className="product-card">
                        <div className="product-card_head">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-card_rating">
                                {product.rating}
                            </div>
                            <div className="product-card_category">
                                {product.category}
                            </div>
                        </div>
                        <div className="product-card_body">
                            <h3 className="product-card_title">
                                {product.name}
                            </h3>
                            <div className="product-card_pricing">
                                ${product.price}
                                <span className="is-in-stock" data-in-stock={product.inStock}>
                                    {product.inStock ? "Available" : "Out Of Stock"}
                                </span>
                            </div>
                            <div className="product-card_desc">
                                {product.description}
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default ProductCard;