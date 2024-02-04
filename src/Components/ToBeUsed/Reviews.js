import React from 'react'
import Cards from '../Design/Cards'
import '../Pages_CSS/Review.css'

const Reviews = () => {
    return (
        <div className='reviewsHeader'>
            <div className="headertext">
                <h1 style={{ alignSelf: "center" }}>Review</h1>
                <h3>Check what our user says</h3>
            </div>
            <div className="cardContainer">
                <Cards />
            </div>
        </div>
    )
}

export default Reviews