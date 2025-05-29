import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Addtocart = {
    cartid: string;
    productid: string;
    name: string;
    category: string;
    price: string;
};

export default function Wwe() {
    const [shops, setShops] = useState<Addtocart[]>([]);
    const [showAlert, setShowAlert] = useState(false);
    const [deleteCartId, setDeleteCartId] = useState<string | null>(null);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        // Fetch all records from the API
        fetch('api/addtocart/ssa/sql/get-all', {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => setShops(data.results))
        .finally(() => console.log('added'))
    }, []);

    const handleDelete = (cartId: string) => {
        setDeleteCartId(cartId);
        setShowAlert(true);
    };

    const confirmDelete = () => {
        // Perform delete operation here
        setShowAlert(false);
        setDeleteCartId(null);
        setShowToast(true);
        // You can also fetch data again if needed after deletion
        // fetch('api/...')
    };

    return (
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {shops.map((cart) => (
                <div key={cart.cartid} className="shadow-lg p-4 hover:shadow-xl bg-white rounded-lg">
                    <p className='text-blue-300'>productid: {cart.productid}</p>
                    <p className='text-gray-800 font-semibold'>Name: {cart.name}</p>
                    <p>Category: {cart.category}</p>
                    <p className='text-green-600 font-bold'>Price: {cart.price}</p>
                    <button onClick={() => handleDelete(cart.cartid)} className="block mt-2 text-center text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded">
                        DELETE
                    </button>
                </div>
            ))}
           <Link to="/checkout"><button className="absolute bottom-0 right-0 mb-5 mr-4 px-4 py-3  rounded border border-blue-500 bg-blue-500 text-white hover:bg-blue-800 hover:text-white hover:border-blue-800 transition-colors duration-300">
                CHECK OUT
            </button></Link> 
            {showAlert && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-5 rounded-md shadow-md">
                        <p className="text-xl text-gray-800 mb-3">Are you sure you want to delete?</p>
                        <div className="flex justify-end">
                            <button onClick={confirmDelete} className="px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md mr-2">Yes</button>
                            <button onClick={() => setShowAlert(false)} className="px-4 py-2 bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-md">No</button>
                        </div>
                    </div>
                </div>
            )}
            {showToast && (
                <div className="fixed bottom-0 right-0 mb-5 mr-5 bg-green-500 text-white p-3 rounded-md shadow-md">
                    Successfully! Your item is deleted
                </div>
            )}
        </div>
    );
}