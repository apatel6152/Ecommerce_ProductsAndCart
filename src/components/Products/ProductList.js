import React, { useState, useEffect } from 'react';
import { BiCartAdd } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { add } from "../state/Slice/CartSlice";
import { useDispatch } from "react-redux";

import axios from 'axios';

const ProductList = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        'https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6'
      )
      .then((response) => {
        setItems(response.data.data.products);
        console.log(items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [items]);

  return (
    <React.Fragment>
      <div className="flex flex-col lg:flex-row ">
        <div className="grid grid-cols-1 gap-4  lg:w-[40%] lg:ml-6 lg:mr-6 mb-4 md:mb-0 lg:mb-0">
          <div className="bg-white rounded-lg shadow-xl shadow-[#8ca1b3] overflow-hidden ">
            <img
              src='images/d1.jpg'
              alt={''}
              className="w-full h-[250px] lg:h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {items.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-lg h-auto overflow-hidden">
              <img
                src={item.imageURLs[0]}
                alt={item.fulhausProductName}
                className="w-full h-64 object-contain"
              />
              <div className="px-4 py-2 flex flex-col">
                <h2 className="text-lg font-bold mb-2 text-left">
                  {item.fulhausProductName}
                </h2>
                <div className='flex mb-3'>
                    <AiFillStar color="orange"/>
                    <AiFillStar color="orange"/>
                    <AiFillStar color="orange"/>
                    <AiFillStar color="orange"/>
                    <AiFillStar color="orange"/>
                </div>
                <div className='flex justify-between'>
                  <p className="font-bold text-gray-900 mt-2">
                    ${item.retailPrice}
                  </p>
                  <button onClick={() => dispatch(add(item))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full mt-2">
                    <BiCartAdd />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
