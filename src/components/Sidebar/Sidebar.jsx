import React, { useState } from 'react';
import './Sidebar.scss';
import { HandlerNotificationBar } from '../../handlers/handlerNotificationBar';

const Sidebar = ({ updateFilters }) => {
    const [toggleBrand, setToggleBrand] = useState(false);
    const [togglePrice, setTogglePrice] = useState(false);
    const [toggleRating, setToggleRating] = useState(false);
    const [selectedItems, setSelectedItems] = useState({
        brand: [],
        priceRange: [],
        rating: [],
    });

    const toggleBrandHandler = () => {
        setToggleBrand(!toggleBrand);
    };

    const togglePriceHandler = () => {
        setTogglePrice(!togglePrice);
    };

    const toggleRatingHandler = () => {
        setToggleRating(!toggleRating);
    };

    const handleBrandSelection = (brand) => {
        const newSelectedItems = selectedItems.brand.includes(brand)
            ? selectedItems.brand.filter(item => item !== brand)
            : [...selectedItems.brand, brand];

        setSelectedItems({ ...selectedItems, brand: newSelectedItems });
        updateFilters('brand', brand);
        HandlerNotificationBar('Brand Filter Applied!');
    };

    const handlePriceRangeSelection = (priceRange) => {
        const newSelectedItems = selectedItems.priceRange.includes(priceRange)
            ? selectedItems.priceRange.filter(item => item !== priceRange)
            : [...selectedItems.priceRange, priceRange];

        setSelectedItems({ ...selectedItems, priceRange: newSelectedItems });
        updateFilters('priceRange', priceRange);
        HandlerNotificationBar('Price Filter Applied!');
    };

    const handleRatingSelection = (rating) => {
        const newSelectedItems = selectedItems.rating.includes(rating)
            ? selectedItems.rating.filter(item => item !== rating)
            : [...selectedItems.rating, rating];

        setSelectedItems({ ...selectedItems, rating: newSelectedItems });
        updateFilters('rating', rating);
        HandlerNotificationBar('Rating Filter Applied!');
    };

    return (
        <div className="Sidebar">
            <p className='page-head'>Search Results</p>

            <p className='filter' onClick={toggleBrandHandler}>
                Brand <i className={toggleBrand ? 'fad fa-chevron-up' : 'fad fa-chevron-down'}></i>
            </p>
            <ul className={toggleBrand ? "show" : ""}>
                <li>
                    <input
                        type="checkbox"
                        id='Mango'
                        onChange={() => handleBrandSelection('Mango')}
                        checked={selectedItems.brand.includes('Mango')}
                    />
                    <label htmlFor="Mango">Mango</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        id='H&M'
                        onChange={() => handleBrandSelection('H&M')}
                        checked={selectedItems.brand.includes('H&M')}
                    />
                    <label htmlFor="H&M">H&M</label>
                </li>
            </ul>

            <p className='filter' onClick={togglePriceHandler}>
                Price Range <i className={togglePrice ? 'fad fa-chevron-up' : 'fad fa-chevron-down'}></i>
            </p>
            <ul className={togglePrice ? "show" : ""&& "show"}>
                <li>
                    <input
                        type="checkbox"
                        id='500'
                        onChange={() => handlePriceRangeSelection('Under 500')}
                        checked={selectedItems.priceRange.includes('Under 500')}
                    />
                    <label htmlFor="500">Under 500</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        id='1000-3000'
                        onChange={() => handlePriceRangeSelection('1000 To 3000')}
                        checked={selectedItems.priceRange.includes('1000 To 3000')}
                    />
                    <label htmlFor="1000-3000">1000 To 3000</label>
                </li>
            </ul>

            <p className='filter' onClick={toggleRatingHandler}>
                Rating <i className={toggleRating ? 'fad fa-chevron-up' : 'fad fa-chevron-down'}></i>
            </p>
            <ul className={toggleRating ? "show" : ""}>
                {[5, 4, 3, 2].map((rating, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            id={`${rating}star`}
                            onChange={() => handleRatingSelection(rating.toString())}
                            checked={selectedItems.rating.includes(rating.toString())}
                        />
                        <label htmlFor={`${rating}star`}>
                            {Array.from({ length: 5 }, (_, i) => (
                                <i key={i} className={i < rating ? "fas fa-star" : "far fa-star"}></i>
                            ))}
                        </label>
                    </li>
                ))}
            </ul>


            <div className='Applied' hidden>
                <p>Selected Brand: {selectedItems.brand.join(', ')}</p>
                <p>Selected Price Range: {selectedItems.priceRange.join(', ')}</p>
                <p>Selected Rating: {selectedItems.rating.join(', ')}</p>
            </div>
        </div>
    );
};

export default Sidebar;
