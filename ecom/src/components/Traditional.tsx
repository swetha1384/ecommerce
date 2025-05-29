import React, { useEffect, useState } from 'react';

type Traditional = {
    id: string;
    name: string;
    category: string;
    description: string;
    price: string;
    image: string;
};

export default function Traditional() {
    const [traditional, setTraditional] = useState<Traditional[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        fetch('/api/traditional/ssa/sql/get-all', {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => setTraditional(data.results))
        .finally(() => console.log('Success'))
    }, []);

    const addToCart = (id: string) => {
        console.log(`Item with id ${id} added to cart`);
    };

    // Filter items based on search term
    const filteredTraditional = traditional.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="grid grid-cols-3 gap-4 mx-auto">
            <input
                type="text"
                placeholder="Search by product name"
                className="p-2 border rounded-md col-span-3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredTraditional.map((item) => (
                <div key={item.id} className="bg-black text-white p-4 rounded-lg hover:shadow-lg transition duration-300">
                    <img src={item.image} alt="Product" className="max-w-full h-auto rounded-lg mb-4" />
                    <div>
                        <p className="font-semibold text-lg">Name: {item.name}</p>
                        <p className="text-lg">Description: {item.description}</p>
                        <p className="text-lg">Category: {item.category}</p>
                        <p className="text-lg">Price: {item.price}</p>
                        <button onClick={() => addToCart(item.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto block mt-4">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}