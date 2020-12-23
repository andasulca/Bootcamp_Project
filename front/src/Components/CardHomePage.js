import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function CardHomePage(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.item.header}</Card.Title>
                    <Card.Text>{props.item.text}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardHomePage