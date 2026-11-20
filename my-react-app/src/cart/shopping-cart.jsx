import react, { useState, useEffect } from "react";
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
    // const findItems = addedToCart.find((item) => item.id === product.id);
    let findItems = false;
    for (let i = 0; i < addedToCart.length; i++) {
      if (product.id === addedToCart[i].id) {
        findItems = true;
      }
    }

    if (findItems === false) {
      console.log("Hello world");

      setAddedToCart([...addedToCart, { ...product, quantity: 1 }]);
    } else {
      console.log("HELLO KEC LINKEDIN");
      setAddedToCart(
        addedToCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : { item },
        ),
      );
    }
  };
  const removeCart = (product) => {
    const arrData = addedToCart.filter((item) => item.id !== product.id);
    setAddedToCart(arrData);
  };
  const decrementFunction = (product) => {
    for (let i = 0; i < addedToCart.length; i++) {
      if (product.id === addedToCart[i].id && addedToCart[i].quantity == 1) {
        removeCart(product);
        return;
      }
    }
    setAddedToCart(
      addedToCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : { item },
      ),
    );
  };
  useEffect(() => {
    console.log("Cart:", addedToCart);
  }, [addedToCart]);
  return (
    <div className="main__parent">
      <h1>Products</h1>
      <div className="parent">
        {shoppingItemData?.map((item, index) => {
          return (
            <div className="parent__item">
              <div className="heading">{item?.name}</div>
              <div className="pricing">{item?.price}</div>
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
      <div className="cart">
        <h1>Cart {addedToCart?.length}</h1>
        {addedToCart?.length == 0 ? (
          <div>Cart is empty</div>
        ) : (
          <div className="cart__item">
            {
              // addToCart.map((item,index)=>{
              //   return(
              //   <strong>{item.name}</strong>
              //   <p>{item.price}</p>)
              // })
              addedToCart?.map((item, index) => {
                return (
                  <div className="cart__item-row" key={item.id}>
                    <div className="cart__item-details">
                      <strong>{item.name}</strong>
                      <p>{item.price}</p>
                    </div>
                    <div className="cart__quantity-controls">
                      <button
                        className="cart__quantity-button"
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => decrementFunction(item)}
                      >
                        −
                      </button>
                      <span className="cart__quantity-value">
                        {item.quantity}
                      </span>
                      <button
                        className="cart__quantity-button"
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        removeCart(item);
                      }}
                      className="cart__remove-button"
                      type="button"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                );
              })
            }
          </div>
        )}
      </div>
    </div>
  );
};
export default ShoppingCart;
