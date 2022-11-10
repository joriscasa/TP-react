export const products = [
  {
    id: 1,
    name: "Product 1",
    stocks: 10,
    price: 10,
  },
  {
    id: 2,
    name: "Product 2",
    stocks: 0,
    price: 20,
  },
  {
    id: 3,
    name: "Product 3",
    stocks: 10,
    price: 30,
  },
];

export default function ProductList() {
  return (
    <div>
      <ul>
        {products
          .filter((p) => p.stocks)
          .map((product) => (
            <li id={product.id}>{product.name}</li>
          ))}
      </ul>
      Total Stock : {products.reduce((acc, p) => acc + p.stocks, 0)}
    </div>
  );
}

//[
//    "product 1",
//    "product 2",
//    "product 3"
//];
