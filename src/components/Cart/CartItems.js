import React from 'react';
import { increase, decrease, remove } from "../state/Slice/CartSlice";
import { useDispatch } from "react-redux";
import { AiFillDelete } from 'react-icons/ai';

const CartItems = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <div
      key={cartItem._id}
      className="flex justify-between items-center border border-solid border-glass p-4 mb-6"
    >
      <div className='flex items-center gap-4'>
        <img
          src={cartItem.imageURLs[0]}
          alt={cartItem.fulhausProductName}
          className="w-20 h-auto object-cover"
        />
      </div>

      <div className="flex flex-col items-start max-w-[6.8rem]">
        <div>{cartItem.fulhausProductName}</div>
        <div className="flex items-center gap-4 mt-2">
          <button
            className="w-8 h-8 text-white bg-black rounded-full "
            onClick={() => dispatch(decrease(cartItem))}
          >
            -
          </button>
          <div>{cartItem.amount}</div>
          <button
            className="w-8 h-8 text-white bg-black rounded-full "
            onClick={() => dispatch(increase(cartItem))}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <AiFillDelete
          className="cursor-pointer text-xl"
          onClick={() => dispatch(remove(cartItem))}
        />
        <div>${(cartItem.retailPrice * cartItem.amount).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartItems;
