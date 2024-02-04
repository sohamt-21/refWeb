import React from 'react';
import tempdata from '../review.json';
import '../Pages_CSS/Cards.css';

const Cards = () => {
    return (
        <>
            <div className="contentCard">
                {tempdata.map((person, index) => (
                    <div className="card" key={index}>
                        <div className="image">
                        </div>
                        <div className="card-info">
                            <span>{person.name}</span>
                            <p>{person.current_company}</p>
                            <p>{person.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Cards;
