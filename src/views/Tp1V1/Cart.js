import { useState } from "react";
import { products } from "../../components/ProductList";
import CartItem from "./CartItem";
import CartForm from "./CartForm";

export default function Cart({ initialItems }) {
  const [cart, setCart] = useState([]);

  const totalPrice = cart.reduce((acc, cartItem) => {
    const product = products.find((p) => p.id === cartItem.product);
    const totalPriceItem = cartItem.quantity * product.price;
    return acc + totalPriceItem;
  }, 0);
  const totalItems = cart.reduce((acc, cartItem) => {
    return acc + cartItem.quantity;
  }, 0);

  const handleAddItem = function (itemId, quantity) {
    setCart([...cart, { product: itemId, quantity: quantity }]);
  };

  const handleRemoveItem = function () {
    setCart(cart.filter((cartItem) => cartItem.product !== this.product));
  };

  const handleChangeQuantityItem = function (value) {
    if (value === -1 && this.quantity === 1) {
      return handleRemoveItem.call(this);
    } else {
      setCart(
        cart.map((cartItem) => {
          if (cartItem.product === this.product) {
            return { ...cartItem, quantity: this.quantity + value };
          }
          return cartItem;
        })
      );
    }
  };
  return (
    <>
      <CartForm onSubmit={handleAddItem} />
      {cart.map((cartItem) => (
        <CartItem
          key={cartItem.product}
          item={cartItem}
          onChangeQuantity={handleChangeQuantityItem.bind(cartItem)}
          onRemove={handleRemoveItem.bind(cartItem)}
        />
      ))}
      Total panier : {totalPrice}€ ({totalItems} products)
    </>
  );
}
