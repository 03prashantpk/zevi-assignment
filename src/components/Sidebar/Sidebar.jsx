import React, { useState } from 'react';
import './Sidebar.scss';

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
    };

    const handlePriceRangeSelection = (priceRange) => {
        const newSelectedItems = selectedItems.priceRange.includes(priceRange)
            ? selectedItems.priceRange.filter(item => item !== priceRange)
            : [...selectedItems.priceRange, priceRange];

        setSelectedItems({ ...selectedItems, priceRange: newSelectedItems });
        updateFilters('priceRange', priceRange);
    };

    const handleRatingSelection = (rating) => {
        const newSelectedItems = selectedItems.rating.includes(rating)
            ? selectedItems.rating.filter(item => item !== rating)
            : [...selectedItems.rating, rating];

        setSelectedItems({ ...selectedItems, rating: newSelectedItems });
        updateFilters('rating', rating);
    };

    return (
        <div className="Sidebar">
            <p className='page-head'>Search Results</p>

            <p className='filter' onClick={toggleBrandHandler}>
                Brand <i className={toggleBrand ? 'fad fa-chevron-up' : 'fad fa-chevron-down'}></i>
            </p>
            <ul className={toggleBrand && "show"}>
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
            <ul className={togglePrice && "show"}>
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
            <ul className={toggleRating && "show"}>
                <li>
                    <input
                        type="checkbox"
                        id='5star'
                        onChange={() => handleRatingSelection('5 Star')}
                        checked={selectedItems.rating.includes('5 Star')}
                    />
                    <label htmlFor="5star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        id='4star'
                        onChange={() => handleRatingSelection('4 Star')}
                        checked={selectedItems.rating.includes('4 Star')}
                    />
                    <label htmlFor="4star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                    </label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        id='3star'
                        onChange={() => handleRatingSelection('3 Star')}
                        checked={selectedItems.rating.includes('3 Star')}
                    />
                    <label htmlFor="3star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                    </label>
                </li>
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
