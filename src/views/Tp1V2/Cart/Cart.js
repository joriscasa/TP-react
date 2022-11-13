
import CartItem from "./CartItem";
import CartForm from "./CartForm";
import ListContainer from "../../../components/ListContainer";

export default function Cart() {
  return (
    <>
      <h1>Cart</h1>
      <ListContainer ListItem={CartItem} AddForm={CartForm} keyProp="product" />
    </>
  );
}
