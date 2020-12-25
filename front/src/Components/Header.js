import { Link } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';




function Header() {
    return (
        <div className="">
            <div>
            
            </div>
            <div>
                <ul className="nav navbar-dark bg-dark">
                    <li className="nav-item">
                        
                        <Link className="nav-link" to="/" exact activeClassName="active"><img src={logo} alt="Logo" style={{width: "25px", height:"25px"}}/></Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/" exact activeClassName="active">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/articles" activeClassName="active">Articles</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/chat" activeClassName="active">Chat</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/registration" activeClassName="active">Register</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/about-us" activeClassName="active">About Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;