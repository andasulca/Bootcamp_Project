import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function CardHomePage(props) {
    return (
        <div className="border border-dark">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dummyimage.com/200x100/000/fff" />
                <Card.Body>
                    <Card.Title>{props.item.header}</Card.Title>
                    <Card.Text>{props.item.content}</Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardHomePage