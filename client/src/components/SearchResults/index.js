import React, { useEffect } from "react";
import { useStateContext } from "../../utils/GlobalState";
import { Container, Row, Col } from "../Grid";
import { List, ListItem } from "../List";

const SearchResults = () => {

    const [state, dispatch] = useStateContext();

    return (

        state && state.posts && state.posts.length ? (
                state.posts.map(result =>
                    <ListItem key={result.id}>
                        <Container>
                            <Row>
                                <Col size="md-3">
                                    <img src={result.volumeInfo.imageLinks.smallThumbnail} />
                                </Col>
                                <Col size="md-9">
                                    <Container>
                                        <Row>
                                            <strong>
                                                {result.volumeInfo.title} by {result.volumeInfo.authors.join(",")}
                                            </strong>
                                        </Row>
                                        {result.volumeInfo.description ? (
                                            <Row>
                                                {result.volumeInfo.description.substring(0,250) /*only load 250 characters*/} 
                                            </Row>
                                            ) : 
                                            <Row>
                                                No description available.    
                                            </Row>
                                        }
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </ListItem>
                )

            
        ) : (
            <h3>Search for a book to see results.</h3>
        )
    );
};

export default SearchResults;