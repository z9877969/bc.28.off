const ProductCard = ({title, description, price, onDelete})=> {

    return (
        <div className="product-card">
            <img src="" alt="" />
            <h4 className="product-card-title">{`Название: ${title}`}</h4>
            <p className="product-card-description">{description}</p>
            <p className="product-card-price">{price / 27}</p>
            <button onClick={onDelete}>Удалить</button>
        </div>
   )
}

export default ProductCard;