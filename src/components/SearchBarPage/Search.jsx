import React, { useState } from "react";
import SearchSuggestion from "../SearchSuggestion/SearchSuggestion";
import "./Search.scss";
import SearchLogo from "/search.png";

const Search = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [typedInput, setTypedInput] = useState("");

  const handleInputChange = (event) => {
    const input = event.target.value;
    setTypedInput(input);
  };


  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 5000);
  };
  document.body.style.background = "linear-gradient(rgba(255, 255, 255, 0.297), rgba(255, 255, 255, 0.297)), url('/bg.jpg')";

  return (
    <>
      <div className="Search-Bar">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={typedInput}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            // onBlur={handleInputBlur}
          />
          <img src={SearchLogo} alt="searchlogo" />
        </div>
      </div>

      {showSuggestions && <SearchSuggestion showSuggestions={showSuggestions} typedInput={typedInput} />}
    </>
  );
};

export default Search;
