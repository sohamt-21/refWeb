import React from 'react';
import '../Pages_CSS/VideoCall.css';
import VideoAd from '../Design/VideoAd.js';
import { useNavigate } from 'react-router-dom';

const VideoCall = () => {

    const Navigate = useNavigate();

    const NavigatetoVideoCall = async () => {
        window.open("https://refmemeet.vercel.app/")
    }

    return (
        <>
            <div className='VideoCallDiv'>

                <div className='SplineDiv'>
                    <VideoAd />
                </div>

                <div className='WordsDiv'>
                    <h2>Join Us</h2>

                    <p>Join our Peer-to-Peer Meet to delve into the intricate process of referrals with live interactions featuring ReferHub staff. Engage, learn, and bridge your knowledge gaps firsthand. Don't miss out on this opportunity for insightful communication.</p>

                    <button className='textbut' onClick={(e) => {
                        e.preventDefault();
                        NavigatetoVideoCall();
                    }}>Get Started</button>

                </div>


            </div>
        </>
    )
}

export default VideoCall