import { useState } from "react";
import { products } from "../../components/ProductList";

export default function CartForm({ onSubmit }) {
  const [itemId, setSelectedProduct] = useState(products[0].id);
  const [quantity, setQuantity] = useState(1);
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
