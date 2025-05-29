import React, { useState } from 'react';

export default function OrderCheckout() {
    const [formData, setFormData] = useState({
        name: '',
        mobileNo: '',
        state: '',
        pincode: '',
        address: ''
    });

    const [showToast, setShowToast] = useState(false);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Perform any necessary validation here before submitting
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000); // Hide the toast after 3 seconds
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-slate-200 shadow-md rounded-md">
            <div className="flex items-center justify-center mb-4">
                <img src="https://cdn-icons-png.flaticon.com/128/12474/12474978.png" alt="Checkout" className="h-8 mr-2" />
                <h2 className="text-2xl font-semibold">Order Checkout</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-md w-full px-3 py-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="mobileNo" className="block text-gray-600 font-semibold mb-2">Mobile No:</label>
                    <input type="tel" id="mobileNo" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="border border-gray-300 rounded-md w-full px-3 py-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="state" className="block text-gray-600 font-semibold mb-2">State:</label>
                    <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="border border-gray-300 rounded-md w-full px-3 py-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="pincode" className="block text-gray-600 font-semibold mb-2">Pincode:</label>
                    <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} className="border border-gray-300 rounded-md w-full px-3 py-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-600 font-semibold mb-2">Address:</label>
                    <textarea id="address" name="address" value={formData.address} onChange={handleChange} className="border border-gray-300 rounded-md w-full px-3 py-2 resize-none" required />
                </div>
                <button 
                    type="submit" 
                    className="bg-gradient-to-r from-red-600 to-pink-500 text-gray-50 hover:text-pink-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-pink-500 rounded-full font-semibold py-2 px-4"
                >
                    Submit
                </button>
            </form>
            {showToast && (
                <div className="fixed bottom-5 right-5 bg-gray-900 text-white p-3 rounded-md">
                    Order placed! Your items will be delivered soon.
                </div>
            )}
        </div>
    );
}