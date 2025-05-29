import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Shop = {
    id: string;
    name: string;
    category: string;
    description: string;
    price: string;
    image: string;
};

export default function Wwe() {
    const [shops, setShops] = useState<Shop[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        // Fetch all records from the API
        fetch('api/ssa/sql/get-all', {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => setShops(data.results))
        .finally(() => console.log('added'))
    }, []);

    const addToCart = async (shop: Shop) => {
        try {
            // Post item information to the addtocart table
            await fetch('api/addtocart/sql/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cartid:10 , 
                    productid: shop.id,
                    name: shop.name,
                    category: shop.category,
                    price: shop.price,
                })
            });
            console.log('Item added to cart successfully');
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    // Filter shops based on search term
    const filteredShops = shops.filter(shop => shop.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="mx-auto max-w-screen-lg p-4 bg-slate-200">
            <div className="relative ">
                <input
                    type="text"
                    placeholder="Search by product name"
                    className="p-2 border rounded-md pl-8 "
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 30 30" className="absolute left-2 top-2 text-gray-500 hover:text-gray-700 cursor-pointer">
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {filteredShops.map((shop) => (
                    <div key={shop.id} className="bg-slate-200 p-4 shadow-md rounded-lg hover:shadow-lg">
                        <img src={shop.image} alt="Product" className="rounded-lg max-w-full h-auto mb-4" />
                        <div>
                            <p>Description: {shop.id}</p>
                            <p>Name: {shop.name}</p>
                            <p>Category: {shop.category}</p>
                            <p>Description: {shop.description}</p>
                            <p>Price: {shop.price}</p>
                            <div className="flex justify-center">
                                <Link to="/postfetch">
                                    <button onClick={() => addToCart(shop)} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                        Add to Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}