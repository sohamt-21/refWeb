import React, { useState, useEffect } from 'react'
import '../Pages_CSS/CountDown.css';

const CountDown = () => {

    const [currentNumber, setCurrentNumber] = useState(0);
    let targetInteger = 10000;


    useEffect(() => {
        const animateNumbers = () => {
            const intervalId = setInterval(() => {
                if (currentNumber < targetInteger) {
                    setCurrentNumber((prevNumber) => prevNumber + 1);
                } else {
                    clearInterval(intervalId);
                }
            }, 200);

            return () => clearInterval(intervalId);
        };

        if (currentNumber < targetInteger) {
            animateNumbers();
        } else {
            setCurrentNumber(10000);
        }

    }, [currentNumber, targetInteger]);

    return (
        <>
            <div className='CountDownDiv'>
                <div className="countText">
                    <h1></h1>
                </div>
                <div className="cards">
                    {/* This is For the First Card */}

                    <div className="SecondCard">
                        <div className="title">
                            <p className="title-text">
                                Projects
                            </p>
                            <p className="percent">
                            </p>
                        </div>
                        <div className="data">
                            <p>
                                {currentNumber}
                            </p>
                        </div>
                    </div>

                    {/* This is For the End of  First Card */}


                    {/* This is For the Second Card */}

                    <div className="SecondCard">
                        <div className="title">
                            <p className="title-text">
                                Companies
                            </p>
                            <p className="percent">
                            </p>
                        </div>
                        <div className="data">
                            <p>
                                {currentNumber}
                            </p>
                        </div>
                    </div>

                    {/* This is For the End of  Second  Card */}

                    {/* This is for the third Card  */}

                    <div className="SecondCard">
                        <div className="title">
                            <p className="title-text">
                                Students
                            </p>
                        </div>
                        <div className="data">
                            <p>
                                {currentNumber}
                            </p>
                        </div>
                    </div>
                    {/* This is End of third card */}

                </div>
            </div>
        </>
    )
}

export default CountDown