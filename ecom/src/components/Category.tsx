import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const categories = [
  'Western Wear',
  'Ethnic Wear',
  'Traditional Wear',
  'Accessories'
];

const Category: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();  
    setSearchTerm(term);
    const filtered = categories.filter(category =>
      category.toLowerCase().includes(term)
    );
    setFilteredCategories(filtered);
  };

  return (
    <div className="container mx-auto p-5 bg-red-50 h-screen ">
      <div className="mb-4 mt-4">
        <input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCategories.includes('Western Wear') && (
          <div>
          <Link to="/Westernwear" className="category-link">
            <button
              className="category-button bg-white shadow-lg hover:shadow-lg px-4 py-3 rounded-md" // Added padding and rounded-md
            >
              <h3 className="text-xl font-semibold mb-2">Western Wear</h3>
              <p className="text-slate-600">Description of Western Wear</p>
            </button>
          </Link>
          <img src="https://i.pinimg.com/474x/16/22/c6/1622c6da6f57e6b2a0d777b6c9c80a95.jpg" alt="Traditional Wear" className="mt-4 mx-auto" style={{ maxWidth: "100%" }} />
          </div>
        )}
        {filteredCategories.includes('Ethnic Wear') && (
          <div>
          <Link to="/Ethnicwear" className="category-link">
            <button
              className="category-button bg-white shadow-lg hover:shadow-lg px-4 py-3 rounded-md" // Added padding and rounded-md
            >
              <h3 className="text-xl font-semibold mb-2">Ethnic Wear</h3>
              <p className="text-slate-600">Description of Ethnic Wear</p>
            </button>
          </Link>
          <img src="https://i.pinimg.com/474x/27/b1/0c/27b10c63380470df40cb541c7101c30a.jpg" alt="Traditional Wear" className="mt-4 mx-auto" style={{ maxWidth: "100%" }} />
          </div>
        )}
        {filteredCategories.includes('Traditional Wear') && (
          <div>
            <Link to="/Traditionalwear" className="category-link">
              <button
                className="category-button bg-white shadow-lg hover:shadow-lg px-4 py-3 rounded-md" // Added padding and rounded-md
              >
                <h3 className="text-xl font-semibold mb-2">Traditional Wear</h3>
                <p className="text-slate-600">Description of Traditional Wear</p>
              </button>
             
            </Link>
            <img src=" http://i.pinimg.com/474x/24/04/80/2404809560200db44b8247cbb56a5e03.jpg" alt="Traditional Wear" className="mt-4 mx-auto" style={{ maxWidth: "100%" }} />
          </div>
        )}
        {filteredCategories.includes('Accessories') && (
          <div>
          <Link to="/category/accessories" className="category-link">
            <button
              className="category-button bg-white shadow-lg hover:shadow-lg px-4 py-3 rounded-md" // Added padding and rounded-md
            >
              <h3 className="text-xl font-semibold mb-2">Accessories</h3>
              <p className="text-slate-600">Description of Accessories</p>
            </button>
          </Link>
            <img src="https://i.pinimg.com/474x/92/bc/48/92bc48b1ba332157633b2f13d79e8da0.jpg" alt="Traditional Wear" className="mt-4 mx-auto" style={{ maxWidth: "100%" }} />
            </div>
        )}
      </div>
    </div>
  );
};

export default Category;
