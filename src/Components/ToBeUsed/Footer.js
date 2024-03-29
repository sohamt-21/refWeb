import React from 'react'
import '../Pages_CSS/Footer.css'
import Discord from '../Assests/Discord-1.png'
import Insta from '../Assests/Instagram-1.png'
import Linkdin from '../Assests/LinkedIn-1.png'
import Twitter from '../Assests/X-1.png';
import FooterPhoto from '../../Images/Footer.png';


const Footer = () => {

    const gotoDiscord = () => {
        window.open("https://discord.com");
    }

    const gotoInsta = () => {
        window.open("https://www.instagram.com");
    }

    const gotoLinkedIn = () => {
        window.open("https://www.linkedin.com/feed/");
    }

    const gotoTwitter = () => {
        window.open("https://twitter.com/")
    }

    return (
        <div style={{ height: "500px", backgroundColor: "#0A1D56", padding: "30px", marginLeft: "auto", marginRight: "auto", fontSize: "large", maxWidth: "100%", color: "#E8D8C4" }} >
            <div className="header">
                <div className="logo">
                    <img  style={{height:"200px" ,width:"200px"}} src={FooterPhoto} alt="NO Image Found..." />
                </div>

                <div className="second">
                    <h2>Students</h2>
                    <li>
                        <a href="" target='_blank'>OverView</a>
                        <a href="/apply">Apply For Referral</a>
                        <a href="/video">Ask for guidance</a>
                        <a href="">Any Dummy if left</a>
                    </li>
                </div>

                <div className="third">
                    <h2>Employee</h2>
                    <li>
                        <a href="" target='_blank'>OverView</a>
                        <a href="/apply">Give Referral</a>
                        <a href="/video">Check Students</a>
                        <a href="">Any Dummy if left</a>
                    </li>
                </div>

                <div className="fourth">
                    <h2>Comapnies</h2>
                    <li>
                        <a href="https://www.microsoft.com/en-in/">Microsoft</a>
                        <a href="https://www.google.com/">Google</a>
                        <a href="https://www.apple.com/">Apple</a>
                        <a href="https://medianet.com/">Many More</a>
                    </li>
                </div>

                <div className="fifth">
                    <h2>Contact Us</h2>
                    <li>
                        <a href="edushaalahelp@gmail.com">edushaalahelp@gmail.com</a>
                        <a href="">+91 7517207273</a>
                    </li>           
                </div>
            </div>

            <div className="copyright">
                <div className="wrap" style={{ width: "90%", marginTop: "50px", margin: "auto" }}>
                    <hr />
                    <div className="belowLine">
                        <div className="left">
                            <p>@2024 All Copyrights Reserved</p>
                        </div>
                        <div className="right">
                            <img src={Discord} alt="" onClick={gotoDiscord} />
                            <img src={Insta} alt="" onClick={gotoInsta} />
                            <img src={Linkdin} alt="" onClick={gotoLinkedIn} />
                            <img src={Twitter} alt="" onClick={gotoTwitter} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer