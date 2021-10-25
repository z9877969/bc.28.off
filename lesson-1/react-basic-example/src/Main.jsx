import ProductCard from "./ProductCard";

import { items } from "./items";

const Main = ()=> {

  const productElements = items.map(item => <ProductCard key={item.id} {...item} />);

    return (
      <main>
        {productElements}
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