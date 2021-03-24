import React from "react";
import { Container, Row, Col} from "../Grid";

const Search = () => {
    return (
        <Container>
            <Row>
                <div class="input-group">
                    <Col size="md-8">
                        <div class="form-outline">
                            <input type="search" id="form1" class="form-control" />
                        </div>
                    </Col>
                    <Col size="md-4">
                        <button type="button" class="btn btn-primary">
                            <i class="fas fa-search">Search</i>
                        </button>
                    </Col>
                </div>
            </Row>
        </Container>
    );
};

export default Search;