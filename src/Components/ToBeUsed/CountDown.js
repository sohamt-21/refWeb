import React, { useState, useEffect } from 'react'
import '../Pages_CSS/CountDown.css';

const CountDown = () => {

    const [currentNumber, setCurrentNumber] = useState(0);
    let targetInteger = 1000;


    useEffect(() => {
        const animateNumbers = () => {
            const intervalId = setInterval(() => {
                if (currentNumber < targetInteger) {
                    setCurrentNumber((prevNumber) => prevNumber + 1);
                } else {
                    // Stop the animation when target integer is reached
                    clearInterval(intervalId);
                }
            }, 100); // Adjust the interval time as needed

            return () => clearInterval(intervalId);
        };

        if (currentNumber < targetInteger) {
            animateNumbers();
        }else{
            setCurrentNumber(1000);
        }

    }, [currentNumber, targetInteger]);

    return (
        <>
            <div className='CountDownDiv'>

            <div className='FirstCountDiv'>

            </div>

            <div className='FirstCountDiv'>

</div>


            </div>
        </>
    )
}

export default CountDown