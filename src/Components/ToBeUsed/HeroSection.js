import React from 'react'
import "../Pages_CSS/Herosection.css";
import Cards from '../Design/Cards';

const HeroSection = () => {
    return (
        <>
            <div className='MainRenderTheme'>

                <section className="hero">
                    <div className="hero-content">
                        <h1>ReferHub</h1>
                        <p className='newp'>Referals At Your FingerTips !!</p>
                    </div>
                </section>

                <div className='FlexDivision'>
                    <Cards />

                    <Cards />
                </div>

            </div>
        </>
    )
}

export default HeroSection