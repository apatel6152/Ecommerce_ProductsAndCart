import React from 'react';
import { BsBag } from 'react-icons/bs';
import { open } from '../state/Slice/CheckoutSlice';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../Cart/Cart';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.checkout);
  const { amount } = useSelector((state) => state.cart);

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            ECommerce Store
          </span>
        </div>
        <div className="flex items-center">
          <div className="relative mr-4">
            <button
              onClick={() => dispatch(open())}
              className="text-white font-bold "
            >
              <BsBag />
              <div className="text-white font-semibold ml-1 absolute w-4 h-4 rounded-full z-2 right-[-3px] bottom-[-3px] flex items center justify-center text-[10px] bg-black">{amount}</div>
            </button>
          </div>
        </div>
      </nav>
      {isOpen && <Cart />}
    </div>
  );
};

export default Navbar;
