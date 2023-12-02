import './SearchBar.scss';
import SearchLogo from "/search.png";
const SearchBar = () => {
    return (
        <div className="Search-bar">
            <div>
                <input type="text" placeholder="Search" />
                <img src={SearchLogo} alt="searchlogo" />
            </div>
        </div>
    )
}

export default SearchBar;