import React, { useEffect, useState } from 'react';
import './Products.scss';
import { handleLikes } from '../../handlers/handleLikes';
import { applyFilters } from '../../handlers/handleFilter';
import { convertToIndianRupees } from '../../handlers/handlerCurrencyConverter';
import { HandlerNotificationBar } from '../../handlers/handlerNotificationBar';

const Products = ({ filters }) => {
  const [products, setProducts] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    // Fetching data function
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    document.body.style.backgroundImage = '';

    // Fetch data
    fetchData();
  }, []);

  // Apply filters
  const filteredProducts = products.filter(product => {
    return applyFilters(product, filters);
  });

  const truncateStrings = (str, wordsCount) => {
    const words = str.split(' ');
    const truncatedWords = words.slice(0, wordsCount);
    return truncatedWords.join(' ');
  };

  useEffect(() => {
    // Get liked items from local storage
    const storedLikedItems = localStorage.getItem('likedItems');
    if (storedLikedItems) {
      setLikedItems(JSON.parse(storedLikedItems));
    }
  }, []);

  const toggleLiked = (id) => {
    handleLikes(id, likedItems, setLikedItems);

  };

  return (
    <div className='Products'>
      <div className="products-container">
        {filteredProducts.map(product => (
          <div className="card" key={product.id}>
            <div className="card-top">
              <img src={product.image} alt={product.title} />
              <i
                className={likedItems.includes(product.id) ? "fas fa-heart" : "fal fa-heart"}
                onClick={() => toggleLiked(product.id)}
              ></i>
              <div className="product-details">
                <p>View Product</p>
              </div>
            </div>
            <div className="card-body">
              <p>{truncateStrings(product.title, 5)}</p>
              <p>
                <strike>Rs. {convertToIndianRupees(product.price)}</strike>{' '}
                Rs. {convertToIndianRupees(product.price)}
              </p>
              <p>
                {Array.from({ length: 5 }, (_, index) => (
                  <i
                    key={index}
                    className={index < Math.round(product.rating.rate) ? "fas fa-star" : "far fa-star"}
                  ></i>
                ))}
                <span>({product.rating.count})</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
