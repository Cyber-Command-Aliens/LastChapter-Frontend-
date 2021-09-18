import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Home/BookCards.scss';



class BookCards extends React.Component {

    render() {
        return (
            <>
                <Card style={{ width: '18rem', marginTop: '50px' }} onClick={this.show}>
                    <Card.Img variant="top" src={this.props.item.img} />
                    <Card.Body>
                        <Card.Title>Title: {this.props.item.title}</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem style={{ color: 'white', background: '#292b2c' }}><strong>Author:</strong> {this.props.item.author}</ListGroupItem>
                        <ListGroupItem style={{ color: 'white', background: '#292b2c' }}><strong>Type:</strong> {this.props.item.status}</ListGroupItem>
                        <ListGroupItem style={{ color: 'white', background: '#292b2c' }}><strong>Pages:</strong>{this.props.item.pages}</ListGroupItem>
                        <ListGroupItem style={{ color: 'white', background: '#292b2c' }}>
                            <Row xs={2} md={4} lg={6}>
                                <Col><Button type="submit" onClick ={()=> this.props.favourite(this.props.item.title,this.props.item.img,this.props.item.author,this.props.item.status,this.props.item.pages ,this.props.item.infoLink)} style={{ marginLeft: '180px' }} variant="outline-info">💟</Button></Col>

                            </Row>
                            <Col><a className="font-weight-bold text-warning mt-5" href={this.props.item.infoLink}>Read More</a></Col>

                        </ListGroupItem>
                    </ListGroup>
                </Card>
      

            </>

        )
    }
}

export default BookCards;