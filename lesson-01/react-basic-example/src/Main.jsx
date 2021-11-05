import ProductCard from "./ProductCard";

import { items } from "./items";

const Main = ()=> {

  const productElements = items.map(item => 
    <ProductCard key={item.id} {...item} />); 

    // ProductCard({key: item.id, title: item.title, description: item.description, price: item.price})
    // const productElements = items.map(item => 
    // ProductCard({key: item.id, title: item.title}));
    // console.log(productElements);
    /*
    productElements = [
          "<div className="product-card">
            <img src="" alt="" />
            <h4 className="product-card-title">iPhone X</h4>
            <p className="product-card-description">лучший подарок на новый год</p>
            <p className="product-card-price">630</p>
        </div>",
          "<div className="product-card">
            <img src="" alt="" />
            <h4 className="product-card-title">GeForce 3090</h4>
            <p className="product-card-description">лучший подарок на новый год</p>
            <p className="product-card-price">630</p>
        </div>",
    ]
    */
    return (
      <main>
        {productElements}
        {/* ProductCard() */}
            {/* {null}
            {undefined}
            {true}
            {false} */}
        {/* <ProductCard {...items[0]} /> */}
        {/* <ProductCard 
        title={items[0].title}
        description={items[0].description}
        price={items[0].price}
         /> */}
        {/* ProductCard({
          title: "iPhone X", 
          description: "Лучший подарок на новый год"
          }) */}
        {/* <ProductCard  {...items[1]}/>
        <ProductCard  {...items[2]} /> */}
      </main>
    )
  }

  export default Main;