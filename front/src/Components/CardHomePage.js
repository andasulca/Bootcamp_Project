import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardHomePage(props) {
    return (
        <div className="border border-dark">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dummyimage.com/200x100/000/fff" />
                <Card.Body className="text-center">
                    <Card.Title>{props.item.header}</Card.Title>
                    <Card.Text>{props.item.content}</Card.Text>
                    <Button variant="dark"><Link to="/article">Go somewhere</Link></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardHomePage