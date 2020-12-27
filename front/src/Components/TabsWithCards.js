import { Card, Nav, Button} from 'react-bootstrap'

function TabsWithCards() {
    return (
            <Card>
            <Card.Header className="nav navbar-dark bg-dark">
                <Nav variant="pills" defaultActiveKey="#first">
                <Nav.Item>
                    <Nav.Link href="#first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#third">Tab 3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#fourth">Tab 4</Nav.Link>
                </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default TabsWithCards;