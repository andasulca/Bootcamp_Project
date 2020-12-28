import { Card, Nav} from 'react-bootstrap'
import { useState } from 'react';

function TabsWithCards() {
    const [activeTab, setActiveTab] = useState(1);
    const changeActiveTab = (tabIndex) => {
        setActiveTab(tabIndex);
    } 
    let tabContent = null;
    let tabHeader = null;

    if (activeTab === 1) {
        tabHeader = <h3>Tab 1</h3>
        tabContent = <p>This is tab 1</p>
    } else if (activeTab === 2) {
        tabHeader = <h3>Tab 2</h3>
        tabContent = <p>This is tab 2</p>
    } else if (activeTab === 3) {
        tabHeader = <h3>Tab 3</h3>
        tabContent = <p>This is tab 3</p>
    } else if (activeTab === 4) {
        tabHeader = <h3>Tab 4</h3>
        tabContent = <p>This is tab 4</p>
    }
    return (
        <Card className="card-links">
            <Card.Header className="nav navbar-dark bg-dark">
                <Nav variant="pills" defaultActiveKey="#first" >
                <div onClick={() => changeActiveTab(1)}>
                <Nav.Item>
                    <Nav.Link href="#first">Tab 1</Nav.Link >
                </Nav.Item>
                </div>
                <Nav.Item>
                    <div onClick={() => changeActiveTab(2)}>
                    <Nav.Link href="#second">Tab 2</Nav.Link>
                    </div>
                </Nav.Item>
                <Nav.Item>
                    <div onClick={() => changeActiveTab(3)}>
                    <Nav.Link href="#third">Tab 3</Nav.Link>
                    </div>
                </Nav.Item>
                <Nav.Item>
                    <div onClick={() => changeActiveTab(4)}>
                    <Nav.Link href="#fourth">Tab 4</Nav.Link>
                    </div>
                </Nav.Item>
                </Nav>
            </Card.Header>
            <div className="text-left">
                <Card.Body>
                    <Card.Title>{tabHeader}</Card.Title>
                    <Card.Text>
                        {tabContent}
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
    )
}

export default TabsWithCards;