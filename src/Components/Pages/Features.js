import React from 'react'
// import styled from 'styled-components'
import { FaRegHeart, FaRegStar } from 'react-icons/fa'
import { AiOutlineAntDesign } from 'react-icons/ai'
import '../Pages_CSS/Feature.css'

function Features() {
    return (
        <div className='featureHead'>
            <div className='featureheader'>
                <h1>Features</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit, sed do eiusmod tempor.</p>
            </div>
            <div className='features'>
                <div className='feature'>
                    <FaRegHeart />
                    <h3>Feature 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
                <div className='feature'>
                    <FaRegStar />
                    <h3>Feature 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
                <div className='feature'>
                    <AiOutlineAntDesign />
                    <h3>Feature 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
            </div>
        </div>
    )
}

export default Features