import React, { useState } from 'react';

interface Review {
  name: string;
  productName: string;
  review: string;
}

const ReviewPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [productName, setProductName] = useState('');
  const [review, setReview] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() !== '' && productName.trim() !== '' && review.trim() !== '') {
      const newReview: Review = {
        name: name,
        productName: productName,
        review: review,
      };
      setReviews([...reviews, newReview]);
      setName('');
      setProductName('');
      setReview('');
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md">
      <div className="flex flex-row items-center mb-4">
        <img src="https://cdn-icons-png.flaticon.com/128/2839/2839244.png" alt="g" className="w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold">Reviews</h1>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} className="w-full p-2 border rounded text-slate-700" />
      </div>
      <div className="mb-4">
        <label htmlFor="productName" className="block mb-1">Product Name:</label>
        <input type="text" id="productName" value={productName} onChange={handleProductNameChange} className="w-full p-2 border rounded text-slate-700" />
      </div>
      <div className="mb-4">
        <label htmlFor="review" className="block mb-1">Product Review:</label>
        <textarea id="review" value={review} onChange={handleReviewChange} className="w-full p-2 border rounded text-slate-700" />
      </div>
      <button onClick={handleSubmit} className="w-full bg-gradient-to-r from-red-600 to-pink-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>

      <div className="mt-8">
        {reviews.map((r, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center mb-2">
              <img src="https://cdn2.iconfinder.com/data/icons/marketing-25/64/positive_feedback-64.png" alt="g" className="w-8 h-8 mr-2" />
              <h3 className="text-lg font-semibold">{r.name}</h3>
            </div>
            <p><strong>Product Name:</strong> {r.productName}</p>
            <p><strong>Review:</strong> {r.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;