import React from "react";
import Search from "../components/SearchBar";
import BookCard from "../components/BookCard";
import { Container, Row, Col} from "../components/Grid";

const Home = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Search />
                    </Col>
                    <Col size="md-6">
                        <BookCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;