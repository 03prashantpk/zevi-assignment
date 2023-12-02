import { useEffect } from 'react';
import './Products.scss';

const Products = ({filters}) => {

    //Use filters
    const brandFilters = filters.brand;
    const priceRangeFilters = filters.priceRange;
    const ratingFilters = filters.rating;

    return (
        <div className='Products'>
            <div className="products-container">
                <div className="card">
                    <div className="card-top">
                        <img src="https://picsum.photos/200" alt="product" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Round Neck Cotton Tee</h5>
                        <p className="card-text"><strike>Rs. 599</strike> 549</p>
                        <p className="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>(210)</span>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-top">
                        <img src="https://picsum.photos/200" alt="product" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Round Neck Cotton Tee</h5>
                        <p className="card-text"><strike>Rs. 599</strike> 549</p>
                        <p className="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>(210)</span>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-top">
                        <img src="https://picsum.photos/200" alt="product" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Round Neck Cotton Tee</h5>
                        <p className="card-text"><strike>Rs. 599</strike> 549</p>
                        <p className="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>(210)</span>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-top">
                        <img src="https://picsum.photos/200" alt="product" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Round Neck Cotton Tee</h5>
                        <p className="card-text"><strike>Rs. 599</strike> 549</p>
                        <p className="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>(210)</span>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-top">
                        <img src="https://picsum.photos/200" alt="product" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Round Neck Cotton Tee</h5>
                        <p className="card-text"><strike>Rs. 599</strike> 549</p>
                        <p className="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>(210)</span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Products;