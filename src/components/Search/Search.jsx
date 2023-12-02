import SearchSuggestion from "../SearchSuggestion/SearchSuggestion";
import "./Search.scss";
import SearchLogo from "/search.png";
const Search = () => {
    return (
        <>
            <div className="Search-Bar">
                <div className="search-box">
                    <input type="text" placeholder="Search" />
                    <img src={SearchLogo} alt="searchlogo" />
                </div>
            </div>

            <SearchSuggestion />

        </>
    )
}
export default Search;