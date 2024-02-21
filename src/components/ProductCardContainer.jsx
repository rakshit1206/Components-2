import ProductCard from "./ProductCard";
import {products} from "../constant/Products";

const product = products[0];

export default function ProductCardContainer() {
  return (
    <>
      <h1>Discover Your Favorites</h1>
      {
        products.map(
          (product) =>(

            <ProductCard product = {product}/>
          )
          
        )
      }
      
    </>
  );
}
