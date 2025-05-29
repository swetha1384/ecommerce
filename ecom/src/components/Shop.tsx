import React from 'react';
import { Link } from 'react-router-dom';

function GlamGirlAttire() {
  return (
    <div >
      <div className="p-5 bg-pink-100">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="flex flex-row items-start">
            <img src="https://t3.ftcdn.net/jpg/03/63/88/66/240_F_363886643_L9Q9kL3ju7H7OePZxbllSGxZtOLzu7C6.jpg" style={{ height: '3rem', width: '3.25rem', marginRight: '0.75rem', marginTop: '0.25rem', backgroundColor: '#CBD5E0' }} alt="Logo" />
            <div className="font-serif text-3xl mt-1">GlamGirl Attire</div>
          </div>
          <div className="text-black flex flex-row items-center space-x-4 bg-pink-100">
            <a href="#" className="font-bold hover:text-pink-700">Home</a>
            <a href="#" className="font-bold hover:text-pink-700">Shop</a>
            <a href="/review" className="font-bold hover:text-pink-700">Review</a>
            <a href="#" className="font-bold hover:text-pink-700">Contact</a>
           <Link to="/postfetch">
            <button className="font-bold bg-pink-500 text-gray-100 hover:text-pink-900 px-1 py-1 rounded-full md:px-3 md:py-3"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem', display: 'inline-block' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              CART
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-20 mx-auto p-5">
        <div className="w-2/5 flex flex-col justify-center mb-6 mr-4">
          <h2 className="font-serif text-4xl text-black hover:text-pink-600">GlamGirl Attire</h2>
          <p className="text-slate-600 tracking-wide">Elevate Your Wardrobe, Embrace Your Glam!</p>
          <p className="text-slate-600 tracking-wide">Style That Speaks Volumes!</p>
          <Link to="/category">
         <button className="font-bold bg-gradient-to-r from-red-600 to-pink-500 text-gray-50 hover:text-pink-900 rounded-full py-2 px-4 text-xl self-start my-5">Shop Now</button>
         </Link>
        </div>
        <div className="w-3/5">
            <img src="https://i.pinimg.com/564x/f9/f6/23/f9f6230c2f72a722760a38c70d5a31ef.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default GlamGirlAttire;
