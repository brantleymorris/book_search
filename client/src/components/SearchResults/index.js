import React from "react";
import { useStateContext } from "../../utils/GlobalState";
import { Container, Row, Col } from "../Grid";
import { List, ListItem } from "../List";

const SearchResults = () => {

    const [state, dispatch] = useStateContext();

    // this needs to be wrapped in a map
    return (
        // <Container fluid>
        //     <Row>
        //         <Col size="md-4">
        //             <img />
        //         </Col>
        //         <Col size="md-8">
        //             <h1>
        //                 Title, pass in
        //             </h1>
        //             <h3>
        //                 Author
        //             </h3>
        //             <p>
        //                 Body
        //             </p>
        //         </Col>
        //     </Row>
        // </Container>

        // double check all of the object keys to make sure they are right
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
                                        <Row>
                                            {result.volumeInfo.description.substring(0,250) /*only load 250 characters*/} 
                                        </Row>
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