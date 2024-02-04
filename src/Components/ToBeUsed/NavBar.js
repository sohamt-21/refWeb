import '../Pages_CSS/Nav.css';
import sampleImg from '../../Images/Logo.png';
import { useTheme } from '../../Contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    const { isDarkMode, toggleTheme } = useTheme();

    if (isDarkMode) {
        document.documentElement.classList.add('Dark');
    } else {
        document.documentElement.classList.remove('Dark');
        document.documentElement.classList.add('light');
    }


    return (

        <nav className="navbar">
            <div className="logo">
                <img src={sampleImg} alt="Logo" />
                <span className="logo-text">ReferHub</span>
            </div>

            <ul className="nav-links">
                <li onClick={() => handleNavigate('/overview')}>Overview</li>
                <li><a href='#'>How It Works</a></li>
                <li><a href='#'>Hiring</a></li>
                <li><a href='#'>Tips</a></li>
            </ul>

            <label class="switch" className='ToggleClass' >
                <input type="checkbox" onChange={toggleTheme} />
                <span class="slider">{isDarkMode}</span>
            </label>


            <button className='button' id='signupbut'> Sign up
            </button>

            <button className='button' id='signinbut'> Sign In
            </button>


        </nav>
    );

};

export default Navbar;
