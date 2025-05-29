import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

type Shop = {
    id: string;
    name: string;
    category: string;
    description: string;
    price: string;
    image: string;
};

export function AddToCart() {
    const { id } = useParams();
    const [shops, setShops] = useState<Shop[]>([]);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    useEffect(() => {
        // Fetch item information from the Shop table based on the provided ID
        fetch('api/ssa/sql/get/' + id, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => setShops(data.results))
        .finally(() => console.log('Data fetched'))
    }, [id]);

    const addToCart = async (shop: Shop) => {
        try {
            // Post item information to the addtocart table
            await fetch('api/addtocart/sql/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cartid: generateCartId(), // You need to generate a unique cart ID
                    productid: shop.id,
                    username: 'exampleUser', // You can get the username from the authentication context or session
                    price: shop.price,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                })
            });
            console.log('Item added to cart successfully');
            // Redirect to another UI page (e.g., CartPage)
            navigate('/cartpage'); // Use navigate function for navigation
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const generateCartId = () => {
        // You need to implement a function to generate a unique cart ID
        // This can be a random string or you can use some ID generation library
        return 'cart_' + Math.random().toString(36).substr(2, 9);
    };

    return (
        <div>
            <h2>SHOP</h2>
            {shops.map((shop, index) => (
                <div key={index}>
                    <p>Description: {shop.description}</p>
                    <p>Name: {shop.name}</p>
                    <p>Category: {shop.category}</p>
                    <p>Price: {shop.price}</p>
                    {/* Add to Cart button */}
                    <button onClick={() => addToCart(shop)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}