import { Link } from 'react-router-dom';
import './SearchBar.scss';
import SearchLogo from "/search.png";
const SearchBar = () => {
    return (
        <div className="Search-bar">
            <div>
               
                <input type="text" placeholder="Search" />
                <Link to="/"><img src={SearchLogo} alt="searchlogo" /></Link>
                
            </div>
        </div>
    )
}

export default SearchBar;