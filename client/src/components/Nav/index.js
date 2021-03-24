import React from "react";
import { Container, Row, Col} from "../Grid";

const Nav = () => {
    return(
        <Container>
            <Row>
                <Col size="md-2">
                    <img />
                </Col>
                <Col size="md-6">
                    <h1>Google Book Search</h1>
                </Col>
                <Col size="md-2">
                    <a href={"/"}>
                        Home
                    </a>
                </Col>
                <Col size ="md-2">
                    <a href = {"/saved"}>
                        Saved Books
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default Nav;