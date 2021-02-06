import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand as={Link} to="/" eventKey="/"><h4 className="pt-1 text-white">LOGO</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="pills" className="mr-auto" defaultActiveKey="/">
                        <Nav.Link as={Link} to="/" eventKey="">Home</Nav.Link>
                        <Nav.Link as={Link} to="/articles" eventKey="articles">Articles</Nav.Link>
                        <Nav.Link as={Link} to="/chat" eventKey="chat">Chat</Nav.Link>
                        <Nav.Link as={Link} to="/chat2" eventKey="chat2">Chat2</Nav.Link>
                        <Nav.Link as={Link} to="/registration" eventKey="registration">Register</Nav.Link>
                        <Nav.Link as={Link} to="/about-us"eventKey="about">About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
