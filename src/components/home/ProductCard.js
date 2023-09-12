import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'



const ProductCard = () => {
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)

        // other logic
    }

    // const onPointerEnter = () => console.log('Enter')
    // const onPointerLeave = () => console.log('Leave')
    // const onPointerMove = (value, index) => console.log(value, index)

    return (
        <div className='col-3 mt-2'>
            <Link to='/' className='product-card card-wrapper position-relative'>
                <div className='position-absolute wish-icon'>
                   <Link to='/'>
                        <img src='images/wish.svg' alt='wish-icon' />
                    </Link>
                </div>
                <div className='product-image'>
                    <img className='img-fluid' src='images/watch.jpg' alt='product' />
                    <img className='img-fluid' src='images/laptop.jpg' alt='product' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>Watch for Childrens Watch for Childrens</h5>
                    <Rating
                        onClick={handleRating}
                        value={rating}
                        /* Available Props */
                        size={25}
                    />
                    <p className='price'>Price: $100</p>

                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column'>
                        <Link to='/'>
                            <img src='images/prodcompare.svg' alt='prodcompare' />
                        </Link>
                        <Link to='/'>
                            <img src='images/view.svg' alt='addcart' />
                        </Link>
                        <Link to='/'>
                            <img src='images/add-cart.svg' alt='addcart' />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard