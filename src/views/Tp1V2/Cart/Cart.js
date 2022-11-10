/**
 * Gérer un panier de produits.
 *
 * - Possibilité d'ajouter un produit avec sa quantité.
 *  (Sélection du produit parmis une liste + quantité)
 * - Possibilité de changer la quantité d'un produit.
 * - Possibilité de supprimer un produit complètement du panier.
 *
 * - Afficher la liste des produits du panier (name, quantity, total price).
 * - Afficher le prix total du panier ainsi que le nombre de produits.
 */
/**
 * Product = {
 *  id: number,
 *  name: string,
 *  price: number
 * }
 * CartItem = {
 *  product: number
 *  quantity: number
 * }
 */

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
