import { useEffect, useState } from "react";
//import { products } from "../../../components/ProductList";

export default function CartForm({ onSubmit }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const [itemId, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!itemId && products.length) {
      setSelectedProduct(products[0].id);
    }
  }, [products]);

  function handleSubmit(e) {
    e.preventDefault();
    // Récupération des valeurs du formulaire en JS natif
    //const formData = new FormData(e.target);
    //const itemId = parseInt(formData.get("product"));
    //const quantity = parseInt(formData.get("quantity"));
    onSubmit({ product: itemId, quantity });
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        name="product"
        onChange={(e) => setSelectedProduct(parseInt(e.target.value))}
      >
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="quantity"
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <input type="submit" value="Add to Cart" />
    </form>
  );
}
