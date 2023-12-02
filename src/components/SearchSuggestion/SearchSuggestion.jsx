import React, { useState, useEffect } from "react";
import "./SearchSuggestion.scss";

const SearchSuggestion = ({ showSuggestions, typedInput }) => {
    const [womenClothing, setWomenClothing] = useState([]);
    const [menClothing, setMenClothing] = useState([]);

    useEffect(() => {
        const fetchWomenClothing = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products/category/women's clothing?limit=5"
                );
                const data = await response.json();
                setWomenClothing(data);
            } catch (error) {
                console.error("Error fetching women's clothing:", error);
            }
        };

        const fetchMenClothing = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products?limit=5"
                );
                const data = await response.json();
                setMenClothing(data);
            } catch (error) {
                console.error("Error fetching men's clothing:", error);
            }
        };

        fetchWomenClothing();
        fetchMenClothing();
    }, [showSuggestions]);

    const truncateString = (str, wordsCount, index) => {
        const words = str.split(' ');
        let truncatedWords;

        if (index === 0) {
            truncatedWords = words.slice(1, wordsCount + 1);
        } else {
            truncatedWords = words.slice(0, wordsCount);
        }

        return truncatedWords.join(' ');
    };

    return (
        showSuggestions && (
            <div className="Search-Suggestion">
                <div className="box">
                    <p>Latest Trends</p>
                    <div className="cards-suggestions">
                        {womenClothing.map((item, index) => (
                            <div className="card" key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <p title={item.title}>{truncateString(item.title, 4, index)}</p>
                            </div>
                        ))}
                    </div>
                    <p>Popular Suggestions</p>
                    <div className="list-suggestions">
                        <ul>
                            {menClothing.map((item) => (
                                <li key={item.id}>{item.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    );
};

export default SearchSuggestion;
