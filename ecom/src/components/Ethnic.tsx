import React, { useEffect, useState } from 'react';

type Ethnic = {
    id: string;
    name: string;
    category: string;
    description: string;
    price: string;
    image: string;
};

export default function Ethnic() {
    const [ethnic, setEthnic] = useState<Ethnic[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [cart, setCart] = useState<Ethnic[]>([]);

    useEffect(() => {
        fetch('/api/ethnic/ssa/sql/get-all', {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => setEthnic(data.results))
        .finally(() => console.log('Success'))
    }, []);

    const addToCart = (id: string) => {
        const selectedItem = ethnic.find(item => item.id === id);
        if (selectedItem) {
            setCart([...cart, selectedItem]);
        }
    };

    const removeFromCart = (id: string) => {
        setCart(cart.filter(item => item.id !== id));
    };

    // Filter items based on search term
    const filteredEthnic = ethnic.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="grid grid-cols-3 gap-4 mx-auto">
            <div className="col-span-2">
                <input
                    type="text"
                    placeholder="Search by product name"
                    className="p-2 border rounded-md w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="grid grid-cols-2 gap-4">
                    {filteredEthnic.map((item) => (
                        <div key={item.id} className="bg-black text-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <img src={item.image} alt="Product" className="max-w-full h-auto rounded-md mb-4" />
                            <div className="text-left">
                                <p className="font-semibold text-lg">Name: {item.name}</p>
                                <p className="text-lg mb-2">Description: {item.description}</p>
                                <p className="text-lg mb-2">Category: {item.category}</p>
                                <p className="text-lg mb-4">Price: {item.price}</p>
                                <button onClick={() => addToCart(item.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto block">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-span-1">
                <h2 className="text-center text-2xl font-bold">Cart</h2>
                {cart.map((item) => (
                    <div key={item.id} className="bg-gray-200 p-4 mb-4 rounded-md shadow-md">
                        <p className="font-semibold text-lg">Name: {item.name}</p>
                        <p className="text-lg mb-2">Category: {item.category}</p>
                        <p className="text-lg mb-4">Price: {item.price}</p>
                        <button onClick={() => removeFromCart(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mx-auto block">
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}