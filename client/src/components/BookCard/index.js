import React from "react";
import { Container, Row, Col } from "../Grid";

const BookCard = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-4">
                    <img />
                </Col>
                <Col size="md-8">
                    <h1>
                        Title, pass in
                    </h1>

                    <h2>
                        Author
                    </h2>

                    <p>
                        Body
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default BookCard;