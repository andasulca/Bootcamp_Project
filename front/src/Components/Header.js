import { Link } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';
import { Navbar,Nav } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand as={Link} to="/"><img src={logo} alt="Logo" style={{width: "25px", height:"25px"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="pills" className="mr-auto" defaultActiveKey="/">
                        <Nav.Link as={Link} to="/" eventKey="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/articles" eventKey="/articles">Articles</Nav.Link>
                        <Nav.Link as={Link} to="/chat" eventKey="/chat">Chat</Nav.Link>
                        <Nav.Link as={Link} to="/registration" eventKey="/registration">Register</Nav.Link>
                        <Nav.Link as={Link} to="/about-us"eventKey="/about">About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
