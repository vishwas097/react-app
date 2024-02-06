import { useDispatch, useSelector } from "react-redux";
import ResturantCategoryItem from "./ResturantCategoryItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatchEvent = useDispatch(clearCart);
   const handleClearCart = () => {
    dispatchEvent(clearCart());
  }
  return (
    <div className="text-center m-5 p-5">
      <div className="w-6/12 flex justify-between mx-auto">
        <h1 className="font-bold text-2xl">Cart</h1>
        {cartItems.length > 0 ? (
          <button onClick={() => handleClearCart()} className="bg-red-500 text-white rounded-xl p-3">
            clear cart
          </button>
        ) : (
          <h1 className="font-bold">
            No Items Found! Please add some items to Cart
          </h1>
        )}
      </div>

      <div className="w-6/12 mx-auto">
        {cartItems?.map((item) => (
          <ResturantCategoryItem info={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
