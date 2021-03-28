import React from "react";
import API from "../../utils/API";
import { useStateContext } from "../../utils/GlobalState";
import { Container, Row, Col } from "../Grid";
import { List, ListItem } from "../List";

const BookCard = () => {

    const [state, dispatch] = useStateContext();

    return (

// TODO - remove state and get data from db
//      - add button to remove book
//      - add button to link to book site
//      - update to reflect saved books instead of posts

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
                                        ) : (
                                        <Row>
                                            No description available.    
                                        </Row>
                                    )}
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </ListItem>
            )

        
    ) : (
        <h3>Search for a book to see results.</h3>
    )

        // <Container fluid>
        //     <Row>
        //         <Col size="md-4">
        //             <img />
        //         </Col>
        //         <Col size="md-8">
        //             <h1>
        //                 Title, pass in
        //             </h1>

        //             <h2>
        //                 Author
        //             </h2>

        //             <p>
        //                 Body
        //             </p>
        //         </Col>
        //     </Row>
        // </Container>
    );
};

export default BookCard;