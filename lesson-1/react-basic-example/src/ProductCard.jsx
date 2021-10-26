const ProductCard = ({title, description, price})=> {

    return (
        <div className="product-card">
            <img src="" alt="" />
            <h4 className="product-card-title">{`Название: ${title}`}</h4>
            <p className="product-card-description">{description}</p>
            <p className="product-card-price">{price / 27}</p>
        </div>
   )
}

export default ProductCard;