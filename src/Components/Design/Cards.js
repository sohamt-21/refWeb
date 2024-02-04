import React from 'react'
import '../Pages_CSS/Cards.css';

const Cards = () => {
    return (
        <>
            <div className="card">
                <div className="image"></div>
                <div className="card-info">
                    <span>George Johnson</span>
                    <p>Support Specialist</p>
                </div>
                <a href="#" className="button">Folow</a>
            </div>
        </>
    )
}

export default Cards