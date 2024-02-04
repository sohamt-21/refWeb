import React from 'react'
import NavBar from '../ToBeUsed/NavBar'
import TimeLine from '../Design/TimeLine'
import '../Pages_CSS/OverView.css'

const OverView = () => {
    return (
        <div>
            <div className="header">
                <div className="nav">
                    <NavBar />
                </div>
                <div className="text">
                    <p>Get and Give Referrals Easily to Deserving Applications</p>
                </div>
                <div className="design">
                    <TimeLine/>
                </div>
            </div>

            <div className="timeline">
                
            </div>
        </div>
    )
}

export default OverView