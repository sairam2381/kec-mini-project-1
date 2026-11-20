import react, { useState } from "react";
import "./shopping-cart.css";
const ShoppingCart = () => {
  const [addedToCart, setAddedToCart] = useState([]);
  const shoppingItemData = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 15000 },
    { id: 5, name: "Headphones", price: 2000 },
    { id: 6, name: "Webcam", price: 3000 },
  ];
  const addToCart = (product) => {
    console.log("Data:", product);
  };
  return (
    <div className="main__parent">
      <h1>Products</h1>
      <div className="parent">
        {shoppingItemData.map((item, index) => {
          return (
            <div className="parent__item">
              <div className="heading">{item.name}</div>
              <div className="pricing">{item.price}</div>
              <button
                className="button__style"
                onClick={() => {
                  addToCart(item);
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
      <div className="cart__item">
        <h1>Cart {addedToCart.length}</h1>
        {addedToCart.length == 0 ? <div>Cart is empty</div> : <div></div>}
      </div>
    </div>
  );
};
export default ShoppingCart;
