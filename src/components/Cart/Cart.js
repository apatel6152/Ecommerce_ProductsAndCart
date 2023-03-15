import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { open } from '../state/Slice/CheckoutSlice';
// import { clear } from "./State/Slice/CartSlice";
import { useDispatch, useSelector } from 'react-redux';
import CartItems from './CartItems';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  return (
    <div className="-right-2 w-full bg-white fixed top-0 h-full shadow-lg md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-200 px-4 lg:px-[35px]">
      <div className="flex items-center justify-between  py-6 border-6">
        {/* <div
          onClick={() => dispatch(open())}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <BsArrowLeft color="black" />
        </div> */}
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({amount})
        </div>
        <div
          onClick={() => dispatch(open())}
          className="cursor-pointer w-8 h-8 flex justify-center items-center text-3xl"
        >
          <AiOutlineCloseCircle  />
        </div>
      </div>
      <div className="mt-8">
        {cartItems.length === 0 ? (
          <div className="uppercase text-center text-3xl">
            Your cart is empty
          </div>
        ) : (
          <div className=" text-center ">
            <>
              <div className="text-left font-semibold text-2xl mb-6">
                Your Order
              </div>
              {cartItems.map((cartItem) => {
                return <CartItems key={cartItem._id} cartItem={cartItem} />;
              })}
              <div className="flex justify-between items-center mt-12 text-2xl">
                <div>Total: ${total.toFixed(2)}</div>
                {/* <HiTrash
                    className="cursor-pointer text-3xl"
                    onClick={() => dispatch(clear())}
                  /> */}
              </div>
              <div className="text-center cursor-pointer bg-black text-white p-3 mt-8">
                CheckOut
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
