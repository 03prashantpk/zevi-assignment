import './SearchSuggestion.scss';

const SearchSuggestion = ({ suggestions, onSuggestionSelected }) => {
    return (
        <div className="Search-Suggestion">
            <div className='box'>
                <p>Latest Trends</p>
                <div className="cards-suggestions">
                    <div className="card">
                        <img src="https://picsum.photos/200" alt="suggestion" />
                        <p>White Formal Suit</p>
                    </div>
                    <div className="card">
                        <img src="https://picsum.photos/201" alt="suggestion" />
                        <p>Line Jumpsuite</p>
                    </div>
                    <div className="card">
                        <img src="https://picsum.photos/203" alt="suggestion" />
                        <p>Patter Dress</p>
                    </div>
                    <div className="card">
                        <img src="https://picsum.photos/204" alt="suggestion" />
                        <p>Leather Jacket</p>
                    </div>
                    <div className="card">
                        <img src="https://picsum.photos/205" alt="suggestion" />
                        <p>Suit With Puffed Sleeves</p>
                    </div>
                </div>
                <p>Popular Suggestions</p>
                <div className="list-suggestions">
                    <ul>
                        <li>Striped Shirt Dress</li>
                        <li>Leather Jacket</li>
                        <li>Formal Dress</li>
                        <li>Traditional Indian</li>
                        <li>Puffed Sleeves</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default SearchSuggestion;