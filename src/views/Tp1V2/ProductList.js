//import { products } from "../../components/ProductList";
import ListContainer from "../../components/ListContainer";
import { useEffect, useState } from "react";

function ProductItem({ item }) {
  return (
    <div>
      {item.name} - {item.price}€ -
    </div>
  );
}

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <h1>Products</h1>
      <ListContainer
        initialItems={products}
        ListItem={ProductItem}
        availableActions={{}}
      />
    </>
  );
}
