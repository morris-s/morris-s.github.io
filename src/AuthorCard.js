import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function AuthorCard(props) {
    return (
        <>
            <h1 className="pt-4 pb-3 text-center">{props.title}</h1>

            <Card style={{maxWidth: "300px"}}>
                <Row className="no-gutters">
                    <Col xs={4}>
                        <Card.Img src={process.env.PUBLIC_URL + "/images/headshot.png"} />
                    </Col>
                    <Col xs={8}>
                        <Card.Body>
                            <Card.Title>S. Morris</Card.Title>
                            <Card.Text>{props.date}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <br />
        </>
    );
}

export default AuthorCard;
