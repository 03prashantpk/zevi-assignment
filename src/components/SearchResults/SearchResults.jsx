import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Products from '../Products/Products';
import './SearchResults.scss';

const SearchResults = () => {
    const [filters, setFilters] = useState({
        brand: [],
        priceRange: [],
        rating: [],
    });

    const updateFilters = (filterType, filterValue) => {
        setFilters(prevFilters => {
            const existingValues = prevFilters[filterType];
            const isValueSelected = existingValues.includes(filterValue);

            // If the value is already selected, remove it; otherwise, add it
            const updatedValues = isValueSelected
                ? existingValues.filter(value => value !== filterValue)
                : [filterValue];

            return {
                ...prevFilters,
                [filterType]: updatedValues,
            };
        });
    };

    return (
        <div className='SearchResults'>
            <Sidebar updateFilters={updateFilters} />
            <Products filters={filters} />
        </div>
    );
}
export default SearchResults;
