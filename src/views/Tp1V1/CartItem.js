import Button from "../../components/Button";
import { products } from "../../components/ProductList";

export default function CartItem({ item, onChangeQuantity, onRemove }) {
  const product = products.find((p) => p.id === item.product);
  const totalPrice = item.quantity * product.price;
  return (
    <div>
      {product.name} - {product.price}€ * {item.quantity} =&gt; {totalPrice}
      <Button
        disabled={item.quantity === 1}
        rounded={true}
        title="-"
        onClick={() => onChangeQuantity(-1)}
      />
      <Button
        disabled={item.quantity === product.stocks}
        rounded={true}
        title="+"
        onClick={() => onChangeQuantity(1)}
      />
      <Button title="Remove" onClick={onRemove} />
    </div>
  );
}
