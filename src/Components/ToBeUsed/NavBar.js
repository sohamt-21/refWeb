import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ViewMode from '../Design/ViewMode'
import '../Pages_CSS/Nav.css'

const NavBar = () => {

    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = '#000000'
            document.title = 'TextUtils - Dark Mode';
        }

        else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
            document.title = 'TextUtils - Light Mode';
        }
    }

    const navigate = useNavigate();

    const navToHowToUse = () => {
        navigate('./howtoUse');
    };

    const navTo = () => {
        navigate('./howtoUse');
    };

    return (
        <div>
            <div className="navContainer">
                <div className="logo">
                    <img src="" alt="" />
                </div>

                <div className="links">
                    <button onClick={navToHowToUse}>How to Use?</button>
                    <button onClick={setMode('dark')}><ViewMode /></button>
                    <button onClick={navToHowToUse}>How to Use?</button>
                    <button onClick={navToHowToUse}>How to Use?</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar